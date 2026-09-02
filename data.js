// ==========================================
// 1. STAFF DIRECTORY (Full Names)
// ==========================================
const staffList = {
    "MRK": "Dr. M. Ramesh Kumar",
    "MSR": "Dr. M. Sundara Rajan",
    "VAT": "Dr. V. Asaithambi",
    "RTS": "Dr. R. Thirumalai Selvi",
    "RK":  "Dr. R. Kalaimagal",
    "VR":  "Dr. V. Ramya",
    "MSK": "Dr. M. Suriakala",
    "":    "Staff Not Assigned" // Fallback for empty brackets like PROJ()
};

// ==========================================
// 2. SUBJECTS DIRECTORY (Full Forms)
// ==========================================
const subjectList = {
    "PYT": "Python Programming",
    "TAMIL": "Tamil Language",
    "ENGLISH": "English Language",
    "FC": "Foundation Course",
    "MP": "Microprocessors",
    "AOA": "Analysis of Algorithms",
    "SE": "Software Engineering",
    "DBMS": "Database Management Systems",
    "BDA": "Big Data Analytics",
    "DBMS LAB": "DBMS Practical",
    "ADALAB": "ADA Practical",
    "OOAD": "Object Oriented Analysis & Design",
    "A.PY": "Advanced Python ",
    "ADA": "Analysis and Design of Algorithms",
    "DIP": "Digital Image Processing",
    "NSC": "Network Security & Cryptography",
    "BT": "Blockchain Technology",
    "CC": "Cloud Computing",
    "OS": "Operating Systems",
    "GT": "Graph Theory",
    "NUM.METH": "Numerical Methods",
    "PY. LAB": "Python Practical",
    "ES": "Embedded Systems",
    "PROJ": "Project Work",
    "NAAN": "Naan Mudhalvan Scheme",
    "VE": "Value Education",
    "SEC": "Skill Enhancement Course",
    "DIP LAB": "DIP Practical",
    "MP LAB": "Microprocessor Practical",
    "ASE": "Advanced Software Engineering"
};

// ==========================================
// 3. CALENDAR CONFIGURATION (The simple comma method)
// ==========================================
// Rule:
// - Just list comma separated values for all days in the month (Day 1 to 31).
// - "I", "II", "III" for day orders.
// - "-" for normal holidays (e.g., weekends).
// - "Order|Event" or "-|Event" for special days (e.g., "-|Independence Day").
// ==========================================
// 3. FULL ACADEMIC CALENDAR (July 2026 to April 2027)
// ==========================================
const calendarConfig = {
    // ஜூலை 2026
    "2026-07": {
        baseWorkingDays: 11, // ஜூலை 1-ஆம் தேதி 12-வது நாளாக தொடங்குகிறது
        days: [
            "VI|வகுப்புகள் தொடக்கம்", "I", "II", "-", "-",
            "III", "IV", "V", "VI", "I",
            "-", "-", "II", "III", "IV",
            "V", "VI", "-", "-", "I",
            "II", "III", "IV", "V", "-",
            "-", "VI", "I", "II", "III", "IV"
        ]
    },
    // ஆகஸ்ட் 2026
    "2026-08": {
        baseWorkingDays: 34, 
        days: [
            "-", "-", "V|அகமதிப்பீடு தேர்வு II & III UG & II PG", "VI", "I", 
            "II", "III", "-", "-", "IV", 
            "V", "VI", "I", "II", "-|சுதந்திர தினம் - விடுமுறை", 
            "-", "III|அகமதிப்பீட்டு தேர்வு I UG", "IV", "V", "VI", 
            "I", "-", "-", "II", "III", 
            "-|ஓணம், மிலாது நபி - விடுமுறை", "IV", "V", "-", "-", "VI"
        ]
    },
    // செப்டம்பர் 2026
    "2026-09": {
        baseWorkingDays: 54, 
        days: [
            "I", "II", "III", "-|கிருஷ்ணஜெயந்தி - விடுமுறை", "-", "-", "IV", "V", "VI", "I", 
            "II", "-", "-", "-|விநாயகர் சதுர்த்தி - விடுமுறை", "III", "IV", "V", "VI", "-", "-", 
            "I|அகமதிப்பீடு தேர்வு-2", "II", "III", "IV", "V", "-", "-", "VI", "I", "II"
        ]
    },
    // அக்டோபர் 2026
    "2026-10": {
        baseWorkingDays: 74, 
        days: [
            "III", "-|காந்தி ஜெயந்தி - விடுமுறை", "-", "-", "IV", 
            "V|END SEMESTER PRACTICAL", "VI", "I", "II", "-", 
            "-", "III", "IV", "V", "VI|மாதிரித் தேர்வு தொடக்கம்", 
            "I", "-", "-", "-|சரஸ்வதி பூஜை - விடுமுறை", "-|விஜயதசமி - விடுமுறை", 
            "II", "III", "IV", "-", "-", 
            "V", "VI", "I|முதல் பருவம் - நிறைவு வேலை நாள்", "-", "-|பருவத் தேர்வுகள் தொடக்கம்", "-"
        ]
    },
    // நவம்பர் 2026
    "2026-11": {
        baseWorkingDays: 0, // இரண்டாம் பருவம் (Even Semester) தொடக்கம்
        days: [
            "-", "-", "-", "-", "-", "-", "-", "-", "-", "-",
            "-", "-", "-", "-", "-", "-", "-", "-", "-", "-",
            "-", "-", "I|கல்லூரி திறக்கும் நாள்", "II", "III", "IV", "V", "-", "-", "VI"
        ]
    },
    // டிசம்பர் 2026
    "2026-12": {
        baseWorkingDays: 6,
        days: [
            "I", "II", "III", "IV", "-", "-", "V", "VI", "I", "II", 
            "III", "-", "-", "IV", "V", "VI", "I", "II", "-", "-", 
            "III", "IV", "V", "VI", "-|கிறிஸ்துமஸ் - விடுமுறை", "-", "-", "I", "II", "III", "IV"
        ]
    },
    // ஜனவரி 2027
    "2027-01": {
        baseWorkingDays: 28,
        days: [
            "-|ஆங்கிலப் புத்தாண்டு - விடுமுறை", "-", "-", "V", "VI|அகமதிப்பீடு தேர்வு -1", 
            "I", "II", "III", "-", "-", 
            "IV", "V", "VI", "-|போகிப் பண்டிகை", "-|பொங்கல்", 
            "-|உழவர் திருநாள்", "-", "I", "II", "III", 
            "IV", "-|தைப்பூசம் - விடுமுறை", "-", "-", "V", 
            "-|குடியரசு தினம் - விடுமுறை", "VI", "I", "II", "-", "-"
        ]
    },
    // பிப்ரவரி 2027
    "2027-02": {
        baseWorkingDays: 44,
        days: [
            "III", "IV", "V", "VI", "I", "-", "-", "II", "III", "IV", 
            "V", "VI", "-", "-", "I", "II", "III", "IV", "V", "-", 
            "-", "VI", "I", "II", "III", "IV", "-", "-"
        ]
    },
    // மார்ச் 2027
    "2027-03": {
        baseWorkingDays: 64,
        days: [
            "V", "VI", "I", "II", "III", "-", "-", "IV", "V", "-|ரம்ஜான் - விடுமுறை", 
            "VI|செய்முறைத்தேர்வு தொடக்கம்", "I", "-", "-", "II", 
            "III", "IV", "V", "VI", "-", 
            "-", "I", "II", "III", "IV", 
            "-|புனித வெள்ளி - விடுமுறை", "-", "-", "V", "VI", "I"
        ]
    },
    // ஏப்ரல் 2027
    "2027-04": {
        baseWorkingDays: 85,
        days: [
            "II", "III", "-", "-", "IV", "V", "VI", "-|தெலுங்கு வருடப்பிறப்பு - விடுமுறை", "I|கல்லூரி கடைசி வேலை நாள்", "-", 
            "-", "-", "-", "-|தமிழ் வருடப்பிறப்பு - விடுமுறை", "-", 
            "-", "-", "-", "-|மகாவீர் ஜெயந்தி - விடுமுறை", "-", 
            "-|பருவத் தேர்வுகள் தொடக்கம்", "-", "-", "-", "-", 
            "-", "-", "-", "-", "-"
        ]
    }
};

// ==========================================
// 4. TIMETABLE CONFIGURATION (Direct from image)
// ==========================================
const timeTableConfig = {
    "I": {
        "I BSc": ["PYT(MRK)", "PYT(MRK)", "FC(VR)", "TAMIL", "ENGLISH"],
        "II BSc": ["TAMIL", "ENGLISH", "MP(MSR)", "AOA(MSR)", "MP(RTS)"],
        "III BSc": ["SE(MSR)", "DBMS(VAT)", "BDA(RTS)", "DBMS LAB(VAT)", "DBMS LAB(VAT)"],
        "I MSc": ["ADALAB(RK)", "ADALAB(RK)", "OOAD(VAT)", "A.PY(MRK)", "ADA(RK)"],
        "II MSc": ["DIP(RTS)", "NSC(MSK)", "NSC(MSK)", "BT(VR)", "CC(MSK)"]
    },
    "II": {
        "I BSc": ["NUM.METH(VR)", "ENGLISH", "TAMIL", "PYT(MRK)", "PYT(MRK)"],
        "II BSc": ["MP LAB(MSR)", "MP LAB(MSR)", "GT(MSK)", "TAMIL", "ENGLISH"],
        "III BSc": ["DBMS(VAT)", "OS(RK)", "SE(MSR)", "BDA(RTS)", "PROJ()"],
        "I MSc": ["ADA(RK)", "A.PY(MRK)", "OOAD(VAT)", "OOAD(VAT)", "ASE(MSR)"],
        "II MSc": ["DIP(RTS)", "NSC(MSK)", "BT(VR)", "DIP LAB(VR)", "DIP LAB(VR)"]
    },
    "III": {
        "I BSc": ["PY. LAB(MRK)", "PY. LAB(MSK)", "NUM.METH(VR)", "ENGLISH", "TAMIL"],
        "II BSc": ["GT(MSK)", "ENGLISH", "MP(MSR)", "TAMIL", "MP(RTS)"],
        "III BSc": ["BDA(RTS)", "SE(MSR)", "DBMS(VAT)", "PROJ()", "PROJ()"],
        "I MSc": ["ADA(RK)", "A.PY(MRK)", "ADALAB(RK)", "ADALAB(RK)", "ASE(MSR)"],
        "II MSc": ["ES(VAT)", "BT(VR)", "DIP(RTS)", "CC(MSK)", "CC(MSK)"]
    },
    "IV": {
        "I BSc": ["ENGLISH", "PY. LAB(MRK)", "PY. LAB(MRK)", "NUM.METH(VR)", "TAMIL"],
        "II BSc": ["GT(MSK)", "MP(RTS)", "AOA(RK)", "TAMIL", "ENGLISH"],
        "III BSc": ["SE(MSR)", "DBMS(VAT)", "NAAN()", "NAAN()", "OS(RK)"],
        "I MSc": ["ADA(RK)", "ASE(MSR)", "OOAD(VAT)", "ASE(MSR)", "A.PY(MRK)"],
        "II MSc": ["NSC(VR)", "CC(MSK)", "DIP(RTS)", "DIP LAB(RTS)", "DIP LAB(RTS)"]
    },
    "V": {
        "I BSc": ["TAMIL", "ENGLISH", "PY. LAB(MRK)", "SEC(RK)", "SEC(RK)"],
        "II BSc": ["ENGLISH", "VE(VR)", "VE(MRK)", "GT(MSK)", "TAMIL"],
        "III BSc": ["DBMS LAB(VAT)", "DBMS LAB(VAT)", "BDA(RTS)", "SE(MSR)", "PROJ()"],
        "I MSc": ["ADA(RK)", "A.PY(MRK)", "ASE(MSR)", "ADALAB(MSK)", "ADALAB(MSK)"],
        "II MSc": ["CC(MSK)", "DIP(RTS)", "ES(VAT)", "NSC(VR)", "BT(VR)"]
    },
    "VI": {
        "I BSc": ["ENGLISH", "TAMIL", "PYT(MRK)", "NUM.METH(VR)", "FC(VR)"],
        "II BSc": ["MP LAB(VR)", "MP LAB(VR)", "MP LAB(MSR)", "ENGLISH", "TAMIL"],
        "III BSc": ["OS(RK)", "OS(RK)", "PROJ()", "PROJ()", "DBMS(VAT)"],
        "I MSc": ["OOAD(VAT)", "A.PY(MRK)", "ADA(RK)", "OOAD(VAT)", "ASE(MSR)"],
        "II MSc": ["NSC(MSK)", "DIP(RTS)", "CC(MSK)", "DIP LAB(RTS)", "DIP LAB(RTS)"]
    }
};
