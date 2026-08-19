const statusCard = document.getElementById('statusCard');
const timetableSection = document.getElementById('timetableSection');
const datePicker = document.getElementById('datePicker');

// 1. Live Clock
setInterval(() => {
    document.getElementById('liveTime').innerText = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}, 1000);

// 2. Format Date Name (e.g., "Monday")
function getDayName(dateString) {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-US', { weekday: 'long' });
}

// 3. Main UI Update Function
function updateUI(selectedDate) {
    // selectedDate format: "YYYY-MM-DD"
    const parts = selectedDate.split("-");
    const yearMonth = `${parts[0]}-${parts[1]}`;
    const dayIndex = parseInt(parts[2], 10) - 1; // Array is 0-indexed

    const monthData = calendarConfig[yearMonth];
    
    // Check if Data Exists
    if (!monthData || dayIndex >= monthData.days.length || !monthData.days[dayIndex]) {
        statusCard.innerHTML = `<div class="p-5 text-center"><p class="text-red-500 font-bold">Data not available for selected date.</p></div>`;
        timetableSection.innerHTML = "";
        return;
    }

    const dayConfigStr = monthData.days[dayIndex];
    let isHoliday = dayConfigStr.startsWith('-');
    let order = "-";
    let eventText = "";

    // Parse String: check for pipe symbol "|" which denotes an event
    if (dayConfigStr.includes('|')) {
        const splitVal = dayConfigStr.split('|');
        order = isHoliday ? "-" : splitVal[0];
        eventText = splitVal[1];
    } else {
        order = isHoliday ? "-" : dayConfigStr;
    }

    // Auto-Calculate Working Day Count (Programming Logic!)
    let currentWorkingDay = monthData.baseWorkingDays;
    for(let i = 0; i <= dayIndex; i++) {
        let loopDay = monthData.days[i];
        if (loopDay && !loopDay.startsWith('-')) {
            currentWorkingDay++;
        }
    }

    const dayName = getDayName(selectedDate);

    // Update Top Status Card
    if (isHoliday) {
        statusCard.innerHTML = `
            <div class="bg-red-50 p-5 rounded-xl border border-red-200 text-center">
                <h2 class="text-xl font-extrabold text-red-600 mb-1">${dayName} - Holiday</h2>
                <p class="text-sm font-semibold text-red-800">${eventText || 'Weekend / Holiday'}</p>
            </div>`;
        timetableSection.innerHTML = ""; // Clear timetable
    } else {
        statusCard.innerHTML = `
            <div class="p-5 flex justify-between items-center text-left bg-gradient-to-r from-blue-50 to-white rounded-xl">
                <div>
                    <p class="text-gray-500 text-xs uppercase font-bold tracking-wider">Day</p>
                    <p class="text-lg font-bold text-gray-800">${dayName}</p>
                </div>
                <div class="text-center px-4 border-l border-r border-gray-200">
                    <p class="text-gray-500 text-xs uppercase font-bold tracking-wider">Day Order</p>
                    <p class="text-3xl font-black text-blue-700 leading-none mt-1">${order}</p>
                </div>
                <div class="text-right">
                    <p class="text-gray-500 text-xs uppercase font-bold tracking-wider">Working Day</p>
                    <p class="text-lg font-bold text-gray-800">#${currentWorkingDay}</p>
                </div>
            </div>
            ${eventText ? `<div class="bg-yellow-100 text-yellow-800 text-center p-2 rounded-b-xl text-xs font-bold uppercase tracking-wider">${eventText}</div>` : ''}
        `;
        
        loadTimetable(order);
    }
}

// 4. Load Timetable with 3 Columns (Subject full form & Staff Name)
function loadTimetable(dayOrder) {
    timetableSection.innerHTML = "";
    const classesData = timeTableConfig[dayOrder];

    if (!classesData) {
        timetableSection.innerHTML = `<p class="text-center text-gray-500 font-semibold mt-5">Timetable not found for Day Order ${dayOrder}.</p>`;
        return;
    }

    for (const [className, subjects] of Object.entries(classesData)) {
        let subjectsHTML = "";
        
        subjects.forEach((subjStr, index) => {
            // Regex to extract Subject and Staff: e.g., "DBMS(VAT)" -> Code: "DBMS", Staff: "VAT"
            const match = subjStr.match(/(.*?)\((.*?)\)/);
            let subjectCode = subjStr;
            let staffCode = "";

            if (match) {
                subjectCode = match[1].trim();
                staffCode = match[2] ? match[2].trim() : "";
            }

            // Map using dictionaries from data.js
            const fullSubject = subjectList[subjectCode] || subjectCode;

            // புதிய லாஜிக்: ஸ்டாஃப் பெயர் இல்லை என்றால் "சப்ஜெக்ட் பெயர் (Staff)" என காட்டும்
            let fullStaff = staffList[staffCode] || staffCode;
            if (staffCode.trim() === "") {
                fullStaff = fullSubject + " (Staff)";
            }

            // 3-Column Layout using CSS Grid
            subjectsHTML += `
                <div class="grid grid-cols-12 gap-2 items-center py-3 border-b border-gray-100 last:border-0 hover:bg-blue-50 transition duration-150">
                    <!-- Column 1: Hour -->
                    <div class="col-span-2 flex justify-center">
                        <span class="text-[10px] bg-blue-100 text-blue-800 font-extrabold px-2 py-1 rounded-full border border-blue-200">
                            Hr ${index + 1}
                        </span>
                    </div>
                    <!-- Column 2: Subject Full Name -->
                    <div class="col-span-5 flex flex-col justify-center">
                        <span class="text-xs font-black text-gray-800 leading-tight">${fullSubject}</span>
                        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">${subjectCode}</span>
                    </div>
                    <!-- Column 3: Teacher Name -->
                    <div class="col-span-5 text-right flex flex-col justify-center pr-2">
                        <span class="text-[11px] font-bold text-indigo-700 leading-tight">${fullStaff}</span>
                    </div>
                </div>
            `;
        });

        timetableSection.innerHTML += `
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-4">
                <div class="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-2.5 text-center font-bold tracking-widest text-sm shadow-inner uppercase">
                    ${className}
                </div>
                <div class="px-2">${subjectsHTML}</div>
            </div>
        `;
    }
}

// 5. Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Set default date to August 11, 2026 as per user test requirement
    // In real scenario, you can use: new Date().toISOString().split('T')[0];
    const today = new Date();
    const defaultDate = today.getFullYear() + '-' +
    String(today.getMonth() + 1).padStart(2, '0') + '-' +
    String(today.getDate()).padStart(2, '0');

     datePicker.value = defaultDate;
     updateUI(defaultDate);
});

// 6. Handle Date Changes
datePicker.addEventListener('change', (e) => {
    updateUI(e.target.value);
});
