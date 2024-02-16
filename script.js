const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

data=[
    {
        "_id": 1,
        "device": "Bed - Patient, Fowler, Adult",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 2,
        "device": "Centrifuge - General Purpose, Electrical",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 3,
        "device": "Centrifuge - Hematocrit, Electrical",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 4,
        "device": "Couch - Delivery ",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 5,
        "device": "Couch - Examination, Gynecological",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 6,
        "device": "Cylinder - Oxygen, 20 L with regulator(With Humidifier and Flowmeter )",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 7,
        "device": "Cylinder - Oxygen, 50 L, With regulator (Humidifier and Flow Meter)",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 8,
        "device": "Defibrillator With Monitor",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 9,
        "device": "Drum - Sterilizer, 240mmx240mm",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 10,
        "device": "Drum - Sterilizer, 240mmx290 mm",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 11,
        "device": "Drum - Sterilizer, 240mmx340mm",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 12,
        "device": "ECG Machine - 12 Channel",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 13,
        "device": "Electro Surgical Unit",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 14,
        "device": "Forceps - Pick Up, With Jar",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 15,
        "device": "Glucometer",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 16,
        "device": "Hemoglobinometer",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 17,
        "device": "Knife - Humby, with  Blade ",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 18,
        "device": "Light - Examination, Mobile",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 19,
        "device": "Light - Operating, Mobile",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 20,
        "device": "Microscope - Binocular, LED",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 21,
        "device": "Mixer - Vortex",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 22,
        "device": "Monitor - Patient",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 23,
        "device": "Oxygen Concentrator",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 24,
        "device": "Phototherapy Unit",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 25,
        "device": "Pulse Oximeter - Hand Held",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 26,
        "device": "Pump - Infusion",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 27,
        "device": "Resuscitator - Manual, Adult",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 28,
        "device": "Resuscitator - Manual, Infant",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 29,
        "device": "Resuscitator - Manual, pediatric",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 30,
        "device": "Scale - Weight, Digital, Adult, With Height",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 31,
        "device": "Scale - Weight, Digital, Baby, With Height",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 32,
        "device": "Set - Biopsy, Incission",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 33,
        "device": "Set - Biopsy, Punch ",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 34,
        "device": "Set - Cholecystectomy ",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 35,
        "device": "Set - Cusco Vaginal Speculum",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 36,
        "device": "Set - Diagnostic, EENT",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 37,
        "device": "Set - Episiotomy/Perineal/Vaginal Cervical ",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 38,
        "device": "Set - Foreign Body Removal ",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 39,
        "device": "Set - Hysterectomy ",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 40,
        "device": "Set - Instrument, Caeserean Section",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 41,
        "device": "Set - Instrument, Examination, Gynecology",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 42,
        "device": "Set - Instrument, Surgery, Major",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 43,
        "device": "Set - Instrument, Surgery, Minor",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 44,
        "device": "Set - Laparotomy, Adult",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 45,
        "device": "Set - Laparotomy, Infant ",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 46,
        "device": "Set - Laryngoscope",
        "amount": "Set",
        "type": "RMD"
    },
    {
        "_id": 47,
        "device": "Shaker - Rotary, Clinical Testing",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 48,
        "device": "Sphygmomanometer - Aneroid, Adult",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 49,
        "device": "Sphygmomanometer - Aneroid, pediatric",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 50,
        "device": "Sphygmomanometer - Digital , Adult",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 51,
        "device": "Sphygmomanometer - Digital pediatric",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 52,
        "device": "Sterilizer - Hot Air, 30L/50L",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 53,
        "device": "Sterilizer - Steam, 40 L",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 54,
        "device": "Sterilizer - Steam, 80 L",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 55,
        "device": "Stethoscope - Adult",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 56,
        "device": "Stethoscope - Pediatric",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 57,
        "device": "Suction Machine - Surgical, Electrical",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 58,
        "device": "Thermometer - Clinical, Digital",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 59,
        "device": "Ultrasound - Doppler, Fetal",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 60,
        "device": "Ultrasound - Ob/Gyn",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 61,
        "device": "Vacuum Extractor - Electrical ",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 62,
        "device": "Wheel Chair - Adult",
        "amount": "Each",
        "type": "RMD"
    },
    {
        "_id": 63,
        "device": "Analyzer - Blood Gas",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 64,
        "device": "Analyzer - Blood Gouping, Fully Automated",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 65,
        "device": "Analyzer - Clinical Chemistry, Fully Automated",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 66,
        "device": "Analyzer – Coagulation",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 67,
        "device": "Analyzer - ELISA",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 68,
        "device": "Analyzer - ESR",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 69,
        "device": "Analyzer – Flow cytometer, CD4",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 70,
        "device": "Analyzer - Hematology, 3 Differential",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 71,
        "device": "Analyzer - Hematology, 5 Differential",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 72,
        "device": "Anesthesia machine - with monitor",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 73,
        "device": "Autostainer - Tissue",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 74,
        "device": "Bath - Tissue Floatation ",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 75,
        "device": "Bed - Patient, ICU, Electrohydraulic",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 76,
        "device": "Bed - Patient, ICU, Manual",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 77,
        "device": "Cabinet - Biosafety",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 78,
        "device": "CATH LAB  Machine",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 79,
        "device": "Centrifuge - Refrigerated, Blood Bank",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 80,
        "device": "Corneal Topography",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 81,
        "device": "Cryosurgical - Ophthalmic",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 82,
        "device": "Cryosurgical Unit - Derma,  Electrical",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 83,
        "device": "Cryosurgical Unit - Gyn, Electrical ",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 84,
        "device": "CT Scan Machine - 128 Slice ",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 85,
        "device": "CT Scan Machine - 16 Slice ",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 86,
        "device": "CT Scan Machine - 64 Slice ",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 87,
        "device": "Cutter - Bone, Electrical",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 88,
        "device": "Dialysis Machine",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 89,
        "device": "Diathermy - Short Wave ",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 90,
        "device": "EEG Machine",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 91,
        "device": "Embedding Station - with Dispensor and Cooler",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 92,
        "device": "EMG Machine",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 93,
        "device": "Endoscope - Bronchoscope, Flexible",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 94,
        "device": "Endoscope - Colonoscope",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 95,
        "device": "Endoscope - Cysto Uretheroscope, Flexiable ",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 96,
        "device": "Endoscope - Hysteroscope",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 97,
        "device": "Endoscope - Laparoscope",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 98,
        "device": "Endoscope - Laryngoscope",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 99,
        "device": "Endoscope - Trans urethral resectoscope",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 100,
        "device": "Endoscope - Upper and Lower, GI Scope",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 101,
        "device": "Endoscope - Ureteroscope, Flexiable",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 102,
        "device": "Extractor - Plasma, Electrical",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 103,
        "device": "Extractor - Plasma, Manual",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 104,
        "device": "Freezer - Deep , Vaccine, 300 L",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 105,
        "device": "Freezer - Deep , Vaccine, 500 L",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 106,
        "device": "Freezer - Deep , Vaccine, 700 L",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 107,
        "device": "Freezer - Plasma, 300 L",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 108,
        "device": "Freezer - Plasma, 500 L",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 109,
        "device": "Freezer - Plasma, 700 L",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 110,
        "device": "Fundus Camera",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 111,
        "device": "Incubator - laboratory ",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 112,
        "device": "Incubator - Newborn",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 113,
        "device": "Keratometer",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 114,
        "device": "Laser Machine - Derma",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 115,
        "device": "Light - Operating, Ceiling ",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 116,
        "device": "Lithotripter - Extracorporeal shock wave",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 117,
        "device": "Microscope - Binocular,  Fluorescence",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 118,
        "device": "Microscope - Operating, Neurosurgical",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 119,
        "device": "Microscope - Operating, Ophthalmic",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 120,
        "device": "Microtome - Rotary, Fully Automatic",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 121,
        "device": "Microtome - Rotary, Manual",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 122,
        "device": "Microtome - Rotary, Semi-Automatic",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 123,
        "device": "Microtome - Vibrating, Fully Automatic",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 124,
        "device": "Monitor - Doppler, Fetal",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 125,
        "device": "Monitor - Patient, Central",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 126,
        "device": "MRI Machine - 1.5T",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 127,
        "device": "MRI Machine - 3T",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 128,
        "device": "Optical Coherence Tomography Machine",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 129,
        "device": "PCR Machine - Thermal Cycler",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 130,
        "device": "Perimetry/ Automated Visual Field Analyzer",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 131,
        "device": "Phaco Machine",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 132,
        "device": "Plasma Thawing Machine",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 133,
        "device": "Platelate Agitator With Iincubator",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 134,
        "device": "Platelate Agitator Without Iincubator",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 135,
        "device": "Radiotherapy - Linear Accelerator",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 136,
        "device": "Refractometer - Ophthlalmic, Automated",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 137,
        "device": "Refrigerator - Blood Bank, 300 L",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 138,
        "device": "Refrigerator - Blood Bank, 750 L",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 139,
        "device": "Refrigerator - Medicine",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 140,
        "device": "Retinoscope",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 141,
        "device": "Screws - Orthopedic",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 142,
        "device": "Set - Amputation",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 143,
        "device": "Set - Cervical spinal",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 144,
        "device": "Set - General Orthopedics",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 145,
        "device": "Set - Haemorrhoidectomy ",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 146,
        "device": "Set - Hip, Hemiarthroplasty",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 147,
        "device": "Set - Laminectomy",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 148,
        "device": "Set - Mastectomy, simple ",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 149,
        "device": "Set - Neurosurgical ",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 150,
        "device": "Set - Oral and maxillofacial surgery ",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 151,
        "device": "Set - Prostatectomy",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 152,
        "device": "Set - Spinal surgery",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 153,
        "device": "Set - Thoracotomy, Adult",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 154,
        "device": "Set - Vesicovaginal fistula",
        "amount": "Set",
        "type": "CMD"
    },
    {
        "_id": 155,
        "device": "Slit Lamp - Microscope",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 156,
        "device": "Sterilizer - Steam, 1000 L",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 157,
        "device": "Sterilizer - Steam, 300 L",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 158,
        "device": "Sterilizer - Steam, 500 L",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 159,
        "device": "Table - Operating, Electro hydraulic",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 160,
        "device": "Table - Physiotherapy, Tilting",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 161,
        "device": "Tissue Processor - Rotary",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 162,
        "device": "Tissue Processor - Vacuum Infiltration Pressure (VIP)",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 163,
        "device": "Tonometer - Computerized",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 164,
        "device": "Tourniquet - Pneumatic, Digital",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 165,
        "device": "Ultrasound - AB scan, Ophthalmic",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 166,
        "device": "Ultrasound - Echo Cardiography",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 167,
        "device": "Ultrasound - General Purpose,  Color Doppler, Mobile, 3D",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 168,
        "device": "Ultrasound - General Purpose,  Color Doppler, Mobile, 4D",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 169,
        "device": "Ultrasound - General Purpose,  Color Doppler, Portable, 3D",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 170,
        "device": "Ultrasound - Therapy",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 171,
        "device": "Ventilator - ICU, Mechanical",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 172,
        "device": "Vetrectomy machine",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 173,
        "device": "Warmer - Radiant, Infant",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 174,
        "device": "X-Ray - Dental, Cephalometric",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 175,
        "device": "X-Ray - Dental, Digital, with  RVG",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 176,
        "device": "X-Ray - Fluoroscopy, C-Arm, Digital",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 177,
        "device": "X-Ray - Mammography, Digital",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 178,
        "device": "X-Ray - Radiography with Fluoroscopy, Digital",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 179,
        "device": "X-Ray - Radiography, Digital",
        "amount": "Each",
        "type": "CMD"
    },
    {
        "_id": 180,
        "device": "X-Ray - Radiography, Mobile, Digital",
        "amount": "Each",
        "type": "CMD"
    }
]


data1=[
    {
        "_id": "64008232ee630f9d14166006",
        "no": "131",
        "device": "Set - Pneumatic Tourniquet, Digital",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T11:02:10.433Z",
        "updatedAt": "2023-03-02T11:02:10.433Z",
        "__v": 0
    },
    {
        "_id": "64008212ee630f9d14166000",
        "no": "130",
        "device": "Endoscope - Bronchoscope, Flexible",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T11:01:38.036Z",
        "updatedAt": "2023-03-02T11:01:38.036Z",
        "__v": 0
    },
    {
        "_id": "640081ffee630f9d14165ffa",
        "no": "129",
        "device": "Table - Physiotherapy, Tilting",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T11:01:19.765Z",
        "updatedAt": "2023-03-02T11:01:19.765Z",
        "__v": 0
    },
    {
        "_id": "640081eeee630f9d14165ff4",
        "no": "128",
        "device": "EMG Machine",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T11:01:02.115Z",
        "updatedAt": "2023-03-02T11:01:02.115Z",
        "__v": 0
    },
    {
        "_id": "640081ddee630f9d14165fee",
        "no": "127",
        "device": "Ultrasound - Therapy",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T11:00:45.361Z",
        "updatedAt": "2023-03-02T11:00:45.361Z",
        "__v": 0
    },
    {
        "_id": "640081cdee630f9d14165fe8",
        "no": "126",
        "device": "Refrigerator - General Purpose, 700 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T11:00:29.377Z",
        "updatedAt": "2023-03-02T11:00:29.377Z",
        "__v": 0
    },
    {
        "_id": "640081b7ee630f9d14165fe2",
        "no": "126",
        "device": "Refrigerator - General Purpose, 500 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T11:00:07.261Z",
        "updatedAt": "2023-03-02T11:00:07.261Z",
        "__v": 0
    },
    {
        "_id": "640081a6ee630f9d14165fdc",
        "no": "126",
        "device": "Refrigerator - General Purpose, 300 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:59:50.980Z",
        "updatedAt": "2023-03-02T10:59:50.980Z",
        "__v": 0
    },
    {
        "_id": "6400818eee630f9d14165fd6",
        "no": "125",
        "device": "Freezer - Deep , Vaccine, 700 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:59:26.651Z",
        "updatedAt": "2023-03-02T10:59:26.651Z",
        "__v": 0
    },
    {
        "_id": "6400817fee630f9d14165fd0",
        "no": "125",
        "device": "Freezer - Deep , Vaccine, 500 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:59:11.892Z",
        "updatedAt": "2023-03-02T10:59:11.892Z",
        "__v": 0
    },
    {
        "_id": "64008170ee630f9d14165fca",
        "no": "125",
        "device": "Freezer - Deep , Vaccine, 300 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:58:56.605Z",
        "updatedAt": "2023-03-02T10:58:56.605Z",
        "__v": 0
    },
    {
        "_id": "6400813dee630f9d14165fc4",
        "no": "124",
        "device": "Bath - Tissue Floatation",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:58:05.988Z",
        "updatedAt": "2023-03-02T10:58:05.988Z",
        "__v": 0
    },
    {
        "_id": "6400812dee630f9d14165fbe",
        "no": "123",
        "device": "Autostainer - Tissue",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:57:49.202Z",
        "updatedAt": "2023-03-02T10:57:49.202Z",
        "__v": 0
    },
    {
        "_id": "64008112ee630f9d14165fb8",
        "no": "122",
        "device": "Embedding Station - with Dispensor and Cooler",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:57:22.367Z",
        "updatedAt": "2023-03-02T10:57:22.367Z",
        "__v": 0
    },
    {
        "_id": "64008101ee630f9d14165fb2",
        "no": "121",
        "device": "Tissue Processor - Rotary",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:57:05.506Z",
        "updatedAt": "2023-03-02T10:57:05.506Z",
        "__v": 0
    },
    {
        "_id": "640080efee630f9d14165fac",
        "no": "120",
        "device": "Tissue Processor - Vacuum Infiltration Pressure (VIP)",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:56:47.693Z",
        "updatedAt": "2023-03-02T10:56:47.693Z",
        "__v": 0
    },
    {
        "_id": "640080d5ee630f9d14165fa6",
        "no": "119",
        "device": "Microtome - Rotary, Semi-Automatic",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:56:21.889Z",
        "updatedAt": "2023-03-02T10:56:21.889Z",
        "__v": 0
    },
    {
        "_id": "640080b9ee630f9d14165fa0",
        "no": "119",
        "device": "Microtome - Rotary, Manual",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:55:53.851Z",
        "updatedAt": "2023-03-02T10:55:53.851Z",
        "__v": 0
    },
    {
        "_id": "640080a8ee630f9d14165f9a",
        "no": "119",
        "device": "Microtome - Vibrating, Fully Automatic",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:55:36.205Z",
        "updatedAt": "2023-03-02T10:55:36.205Z",
        "__v": 0
    },
    {
        "_id": "64008096ee630f9d14165f94",
        "no": "119",
        "device": "Microtome - Rotary, Fully Automatic",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:55:18.619Z",
        "updatedAt": "2023-03-02T10:55:18.619Z",
        "__v": 0
    },
    {
        "_id": "64008083ee630f9d14165f8e",
        "no": "118",
        "device": "RUSH rod",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:54:59.909Z",
        "updatedAt": "2023-03-02T10:54:59.909Z",
        "__v": 0
    },
    {
        "_id": "6400806eee630f9d14165f88",
        "no": "117",
        "device": "L Buttress Plates Right, Left",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:54:38.985Z",
        "updatedAt": "2023-03-02T10:54:38.985Z",
        "__v": 0
    },
    {
        "_id": "6400805cee630f9d14165f82",
        "no": "116",
        "device": "T Buttress Plates Right, Left",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:54:20.553Z",
        "updatedAt": "2023-03-02T10:54:20.553Z",
        "__v": 0
    },
    {
        "_id": "6400804aee630f9d14165f7c",
        "no": "115",
        "device": "Set - Instrument, Patella",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:54:02.199Z",
        "updatedAt": "2023-03-02T10:54:02.199Z",
        "__v": 0
    },
    {
        "_id": "64008029ee630f9d14165f76",
        "no": "114",
        "device": "PFNA Nail",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:53:29.572Z",
        "updatedAt": "2023-03-02T10:53:29.572Z",
        "__v": 0
    },
    {
        "_id": "64007c42ee630f9d14165f70",
        "no": "113",
        "device": "Set - Cannulated screws",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:36:50.815Z",
        "updatedAt": "2023-03-02T10:36:50.815Z",
        "__v": 0
    },
    {
        "_id": "64007c30ee630f9d14165f6a",
        "no": "112",
        "device": "POP Small, medium, large - POP spreader",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:36:32.624Z",
        "updatedAt": "2023-03-02T10:36:32.624Z",
        "__v": 0
    },
    {
        "_id": "64007c17ee630f9d14165f64",
        "no": "111",
        "device": "Plate - 1/3 tubular",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:36:07.171Z",
        "updatedAt": "2023-03-02T10:36:07.171Z",
        "__v": 0
    },
    {
        "_id": "64007bf6ee630f9d14165f5e",
        "no": "110",
        "device": "Set - DHS/DCS",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:35:34.197Z",
        "updatedAt": "2023-03-02T10:35:34.197Z",
        "__v": 0
    },
    {
        "_id": "64007be7ee630f9d14165f58",
        "no": "109",
        "device": "Screws - Orthopedic",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:35:19.017Z",
        "updatedAt": "2023-03-02T10:35:19.017Z",
        "__v": 0
    },
    {
        "_id": "64007bdaee630f9d14165f52",
        "no": "108",
        "device": "Intra medullary nail",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:35:06.584Z",
        "updatedAt": "2023-03-02T10:35:06.584Z",
        "__v": 0
    },
    {
        "_id": "64007bceee630f9d14165f4c",
        "no": "107",
        "device": "Table - Orthopedic, Traction",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:34:54.812Z",
        "updatedAt": "2023-03-02T10:34:54.812Z",
        "__v": 0
    },
    {
        "_id": "64007bbbee630f9d14165f46",
        "no": "106",
        "device": "Set - Laminectomy",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:34:35.157Z",
        "updatedAt": "2023-03-02T10:34:35.157Z",
        "__v": 0
    },
    {
        "_id": "64007bacee630f9d14165f40",
        "no": "105",
        "device": "Set - Mini fragment",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:34:20.075Z",
        "updatedAt": "2023-03-02T10:34:20.075Z",
        "__v": 0
    },
    {
        "_id": "64007b9fee630f9d14165f3a",
        "no": "104",
        "device": "Set - Head and Neck",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:34:07.134Z",
        "updatedAt": "2023-03-02T10:34:07.134Z",
        "__v": 0
    },
    {
        "_id": "64007b92ee630f9d14165f34",
        "no": "103",
        "device": "Set - Arthroscopy",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:33:54.746Z",
        "updatedAt": "2023-03-02T10:33:54.746Z",
        "__v": 0
    },
    {
        "_id": "64007b83ee630f9d14165f2e",
        "no": "102",
        "device": "Set - Arthroplasty",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:33:39.417Z",
        "updatedAt": "2023-03-02T10:33:39.417Z",
        "__v": 0
    },
    {
        "_id": "64007b76ee630f9d14165f28",
        "no": "101",
        "device": "Set - Amputation",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:33:26.567Z",
        "updatedAt": "2023-03-02T10:33:26.567Z",
        "__v": 0
    },
    {
        "_id": "64007b6aee630f9d14165f22",
        "no": "100",
        "device": "Cutter - Bone, Electrical",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:33:14.095Z",
        "updatedAt": "2023-03-02T10:33:14.095Z",
        "__v": 0
    },
    {
        "_id": "64007b5cee630f9d14165f1c",
        "no": "99",
        "device": "Set - General Orthopedics",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:33:00.620Z",
        "updatedAt": "2023-03-02T10:33:00.620Z",
        "__v": 0
    },
    {
        "_id": "64007b4fee630f9d14165f16",
        "no": "98",
        "device": "Set - Hip, Hemiarthroplasty",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:32:47.159Z",
        "updatedAt": "2023-03-02T10:32:47.159Z",
        "__v": 0
    },
    {
        "_id": "64007b43ee630f9d14165f10",
        "no": "97",
        "device": "Diathermy - Short Wave",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:32:35.519Z",
        "updatedAt": "2023-03-02T10:32:35.519Z",
        "__v": 0
    },
    {
        "_id": "64007b36ee630f9d14165f0a",
        "no": "96",
        "device": "Anesthesia machine - wth monitor",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:32:22.596Z",
        "updatedAt": "2023-03-02T10:32:22.596Z",
        "__v": 0
    },
    {
        "_id": "64007b28ee630f9d14165f04",
        "no": "95",
        "device": "Set - Thoracotomy",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:32:08.911Z",
        "updatedAt": "2023-03-02T10:32:08.911Z",
        "__v": 0
    },
    {
        "_id": "64007b0bee630f9d14165efe",
        "no": "94",
        "device": "Set - Tympanoplasty",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:31:39.328Z",
        "updatedAt": "2023-03-02T10:31:39.328Z",
        "__v": 0
    },
    {
        "_id": "64007afeee630f9d14165ef8",
        "no": "93",
        "device": "Set - Tonsillectomy",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:31:26.236Z",
        "updatedAt": "2023-03-02T10:31:26.236Z",
        "__v": 0
    },
    {
        "_id": "64007af2ee630f9d14165ef2",
        "no": "92",
        "device": "Sterilizer - Steam, 1000 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:31:14.076Z",
        "updatedAt": "2023-03-02T10:31:14.076Z",
        "__v": 0
    },
    {
        "_id": "64007ae6ee630f9d14165eec",
        "no": "92",
        "device": "Sterilizer - Steam, 500 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:31:02.026Z",
        "updatedAt": "2023-03-02T10:31:02.026Z",
        "__v": 0
    },
    {
        "_id": "64007ad7ee630f9d14165ee6",
        "no": "92",
        "device": "Sterilizer - Steam, 300 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:30:47.573Z",
        "updatedAt": "2023-03-02T10:30:47.573Z",
        "__v": 0
    },
    {
        "_id": "64007aafee630f9d14165ee0",
        "no": "91",
        "device": "Set - Prostatectomy",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:30:07.339Z",
        "updatedAt": "2023-03-02T10:30:07.339Z",
        "__v": 0
    },
    {
        "_id": "64007aa1ee630f9d14165eda",
        "no": "90",
        "device": "Set - Mastectomy, simple",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:29:53.544Z",
        "updatedAt": "2023-03-02T10:29:53.544Z",
        "__v": 0
    },
    {
        "_id": "64007a92ee630f9d14165ed4",
        "no": "89",
        "device": "Light - Operating, Ceiling",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:29:38.654Z",
        "updatedAt": "2023-03-02T10:29:38.654Z",
        "__v": 0
    },
    {
        "_id": "64007a85ee630f9d14165ece",
        "no": "88",
        "device": "Set - Haemorrhoidectomy",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:29:25.743Z",
        "updatedAt": "2023-03-02T10:29:25.743Z",
        "__v": 0
    },
    {
        "_id": "64007a7aee630f9d14165ec8",
        "no": "87",
        "device": "Endoscope - Laparoscope",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:29:14.069Z",
        "updatedAt": "2023-03-02T10:29:14.069Z",
        "__v": 0
    },
    {
        "_id": "64007a6eee630f9d14165ec2",
        "no": "86",
        "device": "Cryosurgical - Ophthalmic",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:29:02.110Z",
        "updatedAt": "2023-03-02T10:29:02.110Z",
        "__v": 0
    },
    {
        "_id": "64007a5fee630f9d14165ebc",
        "no": "85",
        "device": "Tonometer - Computerized",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:28:47.243Z",
        "updatedAt": "2023-03-02T10:28:47.243Z",
        "__v": 0
    },
    {
        "_id": "64007a4dee630f9d14165eb6",
        "no": "84",
        "device": "Corneal Topography",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:28:29.002Z",
        "updatedAt": "2023-03-02T10:28:29.002Z",
        "__v": 0
    },
    {
        "_id": "64007a40ee630f9d14165eb0",
        "no": "83",
        "device": "Slit Lamp",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:28:16.098Z",
        "updatedAt": "2023-03-02T10:28:16.098Z",
        "__v": 0
    },
    {
        "_id": "64007a2eee630f9d14165eaa",
        "no": "82",
        "device": "Keratometer",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:27:58.684Z",
        "updatedAt": "2023-03-02T10:27:58.684Z",
        "__v": 0
    },
    {
        "_id": "64007a1fee630f9d14165ea4",
        "no": "81",
        "device": "Argon Laser",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:27:43.743Z",
        "updatedAt": "2023-03-02T10:27:43.743Z",
        "__v": 0
    },
    {
        "_id": "64007a13ee630f9d14165e9e",
        "no": "80",
        "device": "Laser Machine - Ophtalmic",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:27:31.182Z",
        "updatedAt": "2023-03-02T10:27:31.182Z",
        "__v": 0
    },
    {
        "_id": "64007a05ee630f9d14165e98",
        "no": "79",
        "device": "Ultrasound - Ophthalmic",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:27:17.777Z",
        "updatedAt": "2023-03-02T10:27:17.777Z",
        "__v": 0
    },
    {
        "_id": "640079edee630f9d14165e92",
        "no": "78",
        "device": "Retinoscope",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:26:53.570Z",
        "updatedAt": "2023-03-02T10:26:53.570Z",
        "__v": 0
    },
    {
        "_id": "640079dcee630f9d14165e8c",
        "no": "77",
        "device": "Refractometer - Automated",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:26:36.554Z",
        "updatedAt": "2023-03-02T10:26:36.554Z",
        "__v": 0
    },
    {
        "_id": "640079c0ee630f9d14165e81",
        "no": "76",
        "device": "Vitrector machine",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:26:08.835Z",
        "updatedAt": "2023-03-02T10:26:20.134Z",
        "__v": 0
    },
    {
        "_id": "640079b4ee630f9d14165e7b",
        "no": "75",
        "device": "Phaco Machine",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:25:56.893Z",
        "updatedAt": "2023-03-02T10:25:56.893Z",
        "__v": 0
    },
    {
        "_id": "640079a1ee630f9d14165e75",
        "no": "74",
        "device": "Perimetry/ Automated Visual Field Analyzer",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:25:37.171Z",
        "updatedAt": "2023-03-02T10:25:37.171Z",
        "__v": 0
    },
    {
        "_id": "64007990ee630f9d14165e6f",
        "no": "73",
        "device": "Optical Coherence Tomography Machine",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:25:20.794Z",
        "updatedAt": "2023-03-02T10:25:20.794Z",
        "__v": 0
    },
    {
        "_id": "6400797dee630f9d14165e69",
        "no": "72",
        "device": "Microscope - Operating, Ophthalmic",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:25:01.661Z",
        "updatedAt": "2023-03-02T10:25:01.661Z",
        "__v": 0
    },
    {
        "_id": "6400796fee630f9d14165e63",
        "no": "71",
        "device": "Fundus Camera",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:24:47.697Z",
        "updatedAt": "2023-03-02T10:24:47.697Z",
        "__v": 0
    },
    {
        "_id": "64007961ee630f9d14165e5d",
        "no": "70",
        "device": "Brachytherapy",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:24:33.373Z",
        "updatedAt": "2023-03-02T10:24:33.373Z",
        "__v": 0
    },
    {
        "_id": "64007954ee630f9d14165e57",
        "no": "69",
        "device": "Radiotherapy - Linear Accelerator",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:24:20.113Z",
        "updatedAt": "2023-03-02T10:24:20.113Z",
        "__v": 0
    },
    {
        "_id": "64007940ee630f9d14165e51",
        "no": "68",
        "device": "Ventilator - ICU, Mechanical",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:24:00.567Z",
        "updatedAt": "2023-03-02T10:24:00.567Z",
        "__v": 0
    },
    {
        "_id": "64007925ee630f9d14165e4b",
        "no": "67",
        "device": "Monitor - Patient, Central",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:23:33.611Z",
        "updatedAt": "2023-03-02T10:23:33.611Z",
        "__v": 0
    },
    {
        "_id": "64007915ee630f9d14165e45",
        "no": "66",
        "device": "Warmer - Radiant, Infant",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:23:17.430Z",
        "updatedAt": "2023-03-02T10:23:17.430Z",
        "__v": 0
    },
    {
        "_id": "64007900ee630f9d14165e3f",
        "no": "65",
        "device": "Monitor - Patient",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:22:56.886Z",
        "updatedAt": "2023-03-02T10:22:56.886Z",
        "__v": 0
    },
    {
        "_id": "640078edee630f9d14165e39",
        "no": "64",
        "device": "Bed - Patient, ICU, Electrohydraulic",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:22:37.731Z",
        "updatedAt": "2023-03-02T10:22:37.731Z",
        "__v": 0
    },
    {
        "_id": "640078ddee630f9d14165e33",
        "no": "63",
        "device": "Bed - Patient, ICU, Manual",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:22:21.346Z",
        "updatedAt": "2023-03-02T10:22:21.346Z",
        "__v": 0
    },
    {
        "_id": "640078d1ee630f9d14165e2d",
        "no": "62",
        "device": "Bed - Patient, ICU",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:22:09.006Z",
        "updatedAt": "2023-03-02T10:22:09.006Z",
        "__v": 0
    },
    {
        "_id": "640078b8ee630f9d14165e27",
        "no": "61",
        "device": "Incubator - Newborn",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:21:44.876Z",
        "updatedAt": "2023-03-02T10:21:44.876Z",
        "__v": 0
    },
    {
        "_id": "640078aaee630f9d14165e21",
        "no": "60",
        "device": "Set - Spinal surgery",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:21:30.694Z",
        "updatedAt": "2023-03-02T10:21:30.694Z",
        "__v": 0
    },
    {
        "_id": "64007895ee630f9d14165e1b",
        "no": "59",
        "device": "Set - Neurosurgical",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:21:09.562Z",
        "updatedAt": "2023-03-02T10:21:09.562Z",
        "__v": 0
    },
    {
        "_id": "64007888ee630f9d14165e15",
        "no": "58",
        "device": "Set - Cervical spinal",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:20:56.269Z",
        "updatedAt": "2023-03-02T10:20:56.269Z",
        "__v": 0
    },
    {
        "_id": "6400787aee630f9d14165e0f",
        "no": "57",
        "device": "Microscope - Operating, Neurosurgical",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:20:42.124Z",
        "updatedAt": "2023-03-02T10:20:42.124Z",
        "__v": 0
    },
    {
        "_id": "6400786eee630f9d14165e09",
        "no": "56",
        "device": "EEG Machine",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:20:30.350Z",
        "updatedAt": "2023-03-02T10:20:30.350Z",
        "__v": 0
    },
    {
        "_id": "64007860ee630f9d14165e03",
        "no": "55",
        "device": "Endoscope - Ureterorenoscope",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:20:16.331Z",
        "updatedAt": "2023-03-02T10:20:16.331Z",
        "__v": 0
    },
    {
        "_id": "64007854ee630f9d14165dfd",
        "no": "54",
        "device": "Endoscope - Cysto Uretheroscope",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:20:04.588Z",
        "updatedAt": "2023-03-02T10:20:04.588Z",
        "__v": 0
    },
    {
        "_id": "6400783fee630f9d14165df7",
        "no": "53",
        "device": "Lithotripter - Extracorporeal shock wave",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:19:43.743Z",
        "updatedAt": "2023-03-02T10:19:43.743Z",
        "__v": 0
    },
    {
        "_id": "64007833ee630f9d14165df1",
        "no": "52",
        "device": "Endoscope - Trans urethral resectoscope",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:19:31.680Z",
        "updatedAt": "2023-03-02T10:19:31.680Z",
        "__v": 0
    },
    {
        "_id": "64007827ee630f9d14165deb",
        "no": "51",
        "device": "Dialysis Machine",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:19:19.534Z",
        "updatedAt": "2023-03-02T10:19:19.534Z",
        "__v": 0
    },
    {
        "_id": "64007816ee630f9d14165de5",
        "no": "50",
        "device": "Laundry Machine- 25 Kg",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:19:02.765Z",
        "updatedAt": "2023-03-02T10:19:02.765Z",
        "__v": 0
    },
    {
        "_id": "64007806ee630f9d14165ddf",
        "no": "50",
        "device": "Laundry Machine - 40 Kg",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:18:46.951Z",
        "updatedAt": "2023-03-02T10:18:46.951Z",
        "__v": 0
    },
    {
        "_id": "640077faee630f9d14165dd9",
        "no": "50",
        "device": "Laundry Machine - 50 Kg",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:18:34.449Z",
        "updatedAt": "2023-03-02T10:18:34.449Z",
        "__v": 0
    },
    {
        "_id": "640077e4ee630f9d14165dd3",
        "no": "49",
        "device": "Analyzer - Hematology, 5 Differential",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:18:12.897Z",
        "updatedAt": "2023-03-02T10:18:12.897Z",
        "__v": 0
    },
    {
        "_id": "640077c4ee630f9d14165dcd",
        "no": "48",
        "device": "Analyzer - Hematology, 3 Differential",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:17:40.305Z",
        "updatedAt": "2023-03-02T10:17:40.305Z",
        "__v": 0
    },
    {
        "_id": "640077b8ee630f9d14165dc7",
        "no": "47",
        "device": "Analyzer - Clinical Chemistry, Semi Automated",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:17:28.628Z",
        "updatedAt": "2023-03-02T10:17:28.628Z",
        "__v": 0
    },
    {
        "_id": "6400779dee630f9d14165dc1",
        "no": "46",
        "device": "Analyzer - Clinical Chemistry, Fully Automated",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:17:01.909Z",
        "updatedAt": "2023-03-02T10:17:01.909Z",
        "__v": 0
    },
    {
        "_id": "64007790ee630f9d14165dbb",
        "no": "45",
        "device": "Cabinet - Bio-safety",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:16:48.433Z",
        "updatedAt": "2023-03-02T10:16:48.433Z",
        "__v": 0
    },
    {
        "_id": "64007783ee630f9d14165db5",
        "no": "44",
        "device": "Analyzer - ESR",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:16:35.404Z",
        "updatedAt": "2023-03-02T10:16:35.404Z",
        "__v": 0
    },
    {
        "_id": "64007777ee630f9d14165daf",
        "no": "43",
        "device": "Microscope - With Multi Head Teaching Scope",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:16:23.250Z",
        "updatedAt": "2023-03-02T10:16:23.250Z",
        "__v": 0
    },
    {
        "_id": "64007763ee630f9d14165da9",
        "no": "42",
        "device": "PCR Machine - Thermal Cycler",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:16:03.587Z",
        "updatedAt": "2023-03-02T10:16:03.587Z",
        "__v": 0
    },
    {
        "_id": "64007757ee630f9d14165da3",
        "no": "41",
        "device": "Microscope - Fluorescence",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:15:51.686Z",
        "updatedAt": "2023-03-02T10:15:51.686Z",
        "__v": 0
    },
    {
        "_id": "6400774aee630f9d14165d9d",
        "no": "40",
        "device": "Freezer - Plasma, 700 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:15:38.640Z",
        "updatedAt": "2023-03-02T10:15:38.640Z",
        "__v": 0
    },
    {
        "_id": "6400773fee630f9d14165d97",
        "no": "39",
        "device": "Freezer - Plasma, 500 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:15:27.242Z",
        "updatedAt": "2023-03-02T10:15:27.242Z",
        "__v": 0
    },
    {
        "_id": "6400772cee630f9d14165d91",
        "no": "38",
        "device": "Freezer - Plasma, 350 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:15:08.794Z",
        "updatedAt": "2023-03-02T10:15:08.794Z",
        "__v": 0
    },
    {
        "_id": "64007719ee630f9d14165d8b",
        "no": "37",
        "device": "Freezer - Plasma",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:14:49.222Z",
        "updatedAt": "2023-03-02T10:14:49.222Z",
        "__v": 0
    },
    {
        "_id": "64007709ee630f9d14165d85",
        "no": "36",
        "device": "Analyzer - Blood Gas",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:14:33.430Z",
        "updatedAt": "2023-03-02T10:14:33.430Z",
        "__v": 0
    },
    {
        "_id": "640076f6ee630f9d14165d7f",
        "no": "35",
        "device": "Analyzer – Coagulation",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:14:14.437Z",
        "updatedAt": "2023-03-02T10:14:14.437Z",
        "__v": 0
    },
    {
        "_id": "640076dfee630f9d14165d79",
        "no": "34",
        "device": "Analyzer – Flow cytometer, CD4",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:13:51.875Z",
        "updatedAt": "2023-03-02T10:13:51.875Z",
        "__v": 0
    },
    {
        "_id": "640076d0ee630f9d14165d73",
        "no": "33",
        "device": "Analyzer - Elisa",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:13:36.389Z",
        "updatedAt": "2023-03-02T10:13:36.389Z",
        "__v": 0
    },
    {
        "_id": "640076c4ee630f9d14165d6d",
        "no": "32",
        "device": "X-Ray - Radiography, Mobile, Digital",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:13:24.608Z",
        "updatedAt": "2023-03-02T10:13:24.608Z",
        "__v": 0
    },
    {
        "_id": "640076b5ee630f9d14165d67",
        "no": "31",
        "device": "Ultrasound - Echo Cardiography",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:13:09.909Z",
        "updatedAt": "2023-03-02T10:13:09.909Z",
        "__v": 0
    },
    {
        "_id": "640076a4ee630f9d14165d61",
        "no": "30",
        "device": "X-Ray - Radiography with Fluoroscopy, Digital",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:12:52.379Z",
        "updatedAt": "2023-03-02T10:12:52.379Z",
        "__v": 0
    },
    {
        "_id": "64007696ee630f9d14165d5b",
        "no": "29",
        "device": "X-Ray - Mammography, Digital",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:12:38.765Z",
        "updatedAt": "2023-03-02T10:12:38.765Z",
        "__v": 0
    },
    {
        "_id": "64007680ee630f9d14165d55",
        "no": "28",
        "device": "X-Ray - Radiography, Digital",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:12:16.117Z",
        "updatedAt": "2023-03-02T10:12:16.117Z",
        "__v": 0
    },
    {
        "_id": "64007671ee630f9d14165d4f",
        "no": "27",
        "device": "X Ray - Fluoroscopy, C-Arm, Digital",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:12:01.788Z",
        "updatedAt": "2023-03-02T10:12:01.788Z",
        "__v": 0
    },
    {
        "_id": "6400765fee630f9d14165d49",
        "no": "26",
        "device": "Ultrasound - General Purpose, Color Doppler, Mobile, 4D",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:11:43.293Z",
        "updatedAt": "2023-03-02T10:11:43.293Z",
        "__v": 0
    },
    {
        "_id": "640075e5ee630f9d14165d43",
        "no": "26",
        "device": "Ultrasound - General Purpose, Color Doppler, Mobile, 3D",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:09:41.544Z",
        "updatedAt": "2023-03-02T10:09:41.544Z",
        "__v": 0
    },
    {
        "_id": "640075d9ee630f9d14165d3d",
        "no": "26",
        "device": "Ultrasound - General Purpose, Color Doppler, Portable, 3D",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:09:29.721Z",
        "updatedAt": "2023-03-02T10:09:29.721Z",
        "__v": 0
    },
    {
        "_id": "640075c5ee630f9d14165d37",
        "no": "25",
        "device": "CT Scan Machine - 16 Slice",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:09:09.745Z",
        "updatedAt": "2023-03-02T10:09:09.745Z",
        "__v": 0
    },
    {
        "_id": "640075b0ee630f9d14165d31",
        "no": "25",
        "device": "CT Scan Machine - 64 Slice",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:08:48.159Z",
        "updatedAt": "2023-03-02T10:08:48.159Z",
        "__v": 0
    },
    {
        "_id": "64007596ee630f9d14165d2b",
        "no": "24",
        "device": "MRI Machine - 1.5 T",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:08:22.590Z",
        "updatedAt": "2023-03-02T10:08:22.590Z",
        "__v": 0
    },
    {
        "_id": "64007582ee630f9d14165d25",
        "no": "23",
        "device": "Cryosurgical Unit - Gyn, Electrical",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:08:02.974Z",
        "updatedAt": "2023-03-02T10:08:02.974Z",
        "__v": 0
    },
    {
        "_id": "64007551ee630f9d14165d1f",
        "no": "22",
        "device": "Monitor - Fetal",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:07:13.435Z",
        "updatedAt": "2023-03-02T10:07:13.435Z",
        "__v": 0
    },
    {
        "_id": "64007546ee630f9d14165d19",
        "no": "21",
        "device": "Endoscope - Hysteroscope",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:07:02.050Z",
        "updatedAt": "2023-03-02T10:07:02.050Z",
        "__v": 0
    },
    {
        "_id": "64007536ee630f9d14165d13",
        "no": "20",
        "device": "Set - Vesicovaginal fistula",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:06:46.153Z",
        "updatedAt": "2023-03-02T10:06:46.153Z",
        "__v": 0
    },
    {
        "_id": "64007526ee630f9d14165d0d",
        "no": "19",
        "device": "Endoscope - Colonoscope",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:06:30.984Z",
        "updatedAt": "2023-03-02T10:06:30.984Z",
        "__v": 0
    },
    {
        "_id": "64007519ee630f9d14165d07",
        "no": "18",
        "device": "Endoscope - Laryngoscope",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:06:17.674Z",
        "updatedAt": "2023-03-02T10:06:17.674Z",
        "__v": 0
    },
    {
        "_id": "64007504ee630f9d14165d01",
        "no": "17",
        "device": "Endoscope - Upper and Lower, GI Scope",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:05:56.661Z",
        "updatedAt": "2023-03-02T10:05:56.661Z",
        "__v": 0
    },
    {
        "_id": "640074e7ee630f9d14165cfb",
        "no": "16",
        "device": "Laser Machine - Derma",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:05:27.926Z",
        "updatedAt": "2023-03-02T10:05:27.926Z",
        "__v": 0
    },
    {
        "_id": "640074d8ee630f9d14165cf5",
        "no": "15",
        "device": "Cryosurgical Unit - Derma, Electrical",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:05:12.270Z",
        "updatedAt": "2023-03-02T10:05:12.270Z",
        "__v": 0
    },
    {
        "_id": "640074b9ee630f9d14165cef",
        "no": "14",
        "device": "CX-Ray - Dental, Digital, with RVG",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:04:41.439Z",
        "updatedAt": "2023-03-02T10:04:41.439Z",
        "__v": 0
    },
    {
        "_id": "640074abee630f9d14165ce9",
        "no": "13",
        "device": "X-Ray - Dental, Cephalometric",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:04:27.448Z",
        "updatedAt": "2023-03-02T10:04:27.448Z",
        "__v": 0
    },
    {
        "_id": "6400749dee630f9d14165ce3",
        "no": "12",
        "device": "Set - Oral and maxillofacial surgery",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:04:13.711Z",
        "updatedAt": "2023-03-02T10:04:13.711Z",
        "__v": 0
    },
    {
        "_id": "6400748fee630f9d14165cdd",
        "no": "11",
        "device": "Heart Lung Machine",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:03:59.916Z",
        "updatedAt": "2023-03-02T10:03:59.916Z",
        "__v": 0
    },
    {
        "_id": "64007483ee630f9d14165cd7",
        "no": "10",
        "device": "CATH LAB Machine",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:03:47.357Z",
        "updatedAt": "2023-03-02T10:03:47.357Z",
        "__v": 0
    },
    {
        "_id": "6400746cee630f9d14165cd1",
        "no": "9",
        "device": "Plasma Thawing Machine",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:03:24.901Z",
        "updatedAt": "2023-03-02T10:03:24.901Z",
        "__v": 0
    },
    {
        "_id": "6400745fee630f9d14165ccb",
        "no": "8",
        "device": "Automated Coagulation Timer",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T10:03:11.570Z",
        "updatedAt": "2023-03-02T10:03:11.570Z",
        "__v": 0
    },
    {
        "_id": "6400739bee630f9d14165cc5",
        "no": "7",
        "device": "Analyzer - Blood Gouping, Fully Automated",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T09:59:55.539Z",
        "updatedAt": "2023-03-02T09:59:55.539Z",
        "__v": 0
    },
    {
        "_id": "6400738dee630f9d14165cbf",
        "no": "6",
        "device": "Transfusion Transmissible infetions Testing Machine",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T09:59:41.928Z",
        "updatedAt": "2023-03-02T09:59:41.928Z",
        "__v": 0
    },
    {
        "_id": "6400737bee630f9d14165cb9",
        "no": "5",
        "device": "Extractor - Plasma, Electrical",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T09:59:23.443Z",
        "updatedAt": "2023-03-02T09:59:23.443Z",
        "__v": 0
    },
    {
        "_id": "64007370ee630f9d14165cb3",
        "no": "5",
        "device": "Extractor - Plasma, Manual",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T09:59:12.262Z",
        "updatedAt": "2023-03-02T09:59:12.262Z",
        "__v": 0
    },
    {
        "_id": "64007357ee630f9d14165cad",
        "no": "4",
        "device": "Platelate Agitator Without Iincubator",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T09:58:48.031Z",
        "updatedAt": "2023-03-02T09:58:48.031Z",
        "__v": 0
    },
    {
        "_id": "6400734aee630f9d14165ca7",
        "no": "4",
        "device": "Platelate Agitator With Iincubator",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T09:58:34.080Z",
        "updatedAt": "2023-03-02T09:58:34.080Z",
        "__v": 0
    },
    {
        "_id": "64007333ee630f9d14165ca1",
        "no": "3",
        "device": "Refrigerator - Mortuary",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T09:58:11.134Z",
        "updatedAt": "2023-03-02T09:58:11.134Z",
        "__v": 0
    },
    {
        "_id": "640072d7ee630f9d14165c9b",
        "no": "2",
        "device": "Refrigerator - Blood Bank, 750 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T09:56:39.671Z",
        "updatedAt": "2023-03-02T09:56:39.671Z",
        "__v": 0
    },
    {
        "_id": "640072c7ee630f9d14165c95",
        "no": "2",
        "device": "Refrigerator - Blood Bank, 300 L",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T09:56:23.494Z",
        "updatedAt": "2023-03-02T09:56:23.494Z",
        "__v": 0
    },
    {
        "_id": "640072b2ee630f9d14165c8f",
        "no": "1",
        "device": "Centrifuge - Refrigerated, Blood Bank",
        "amount": "Each",
        "type": "CMD",
        "createdAt": "2023-03-02T09:56:02.389Z",
        "updatedAt": "2023-03-02T09:56:02.389Z",
        "__v": 0
    },
    {
        "_id": "640054c0ee630f9d14165c7f",
        "no": "92",
        "device": "Ultrasound - Ob/Gyn",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:48:16.560Z",
        "updatedAt": "2023-03-02T07:48:16.560Z",
        "__v": 0
    },
    {
        "_id": "640054b0ee630f9d14165c79",
        "no": "91",
        "device": "ECG Machine - 12 Channel",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:48:00.319Z",
        "updatedAt": "2023-03-02T07:48:00.319Z",
        "__v": 0
    },
    {
        "_id": "64005496ee630f9d14165c73",
        "no": "90",
        "device": "Tonometer - Non Contact, Hand Held",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:47:34.415Z",
        "updatedAt": "2023-03-02T07:47:34.415Z",
        "__v": 0
    },
    {
        "_id": "6400547cee630f9d14165c6d",
        "no": "89",
        "device": "Table - Operating, Electro hydraulic",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:47:08.063Z",
        "updatedAt": "2023-03-02T07:47:08.063Z",
        "__v": 0
    },
    {
        "_id": "6400546cee630f9d14165c67",
        "no": "88",
        "device": "Electro Surgical Unit",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:46:52.490Z",
        "updatedAt": "2023-03-02T07:46:52.490Z",
        "__v": 0
    },
    {
        "_id": "6400545aee630f9d14165c61",
        "no": "87",
        "device": "Defibrillator With Monitor",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:46:34.584Z",
        "updatedAt": "2023-03-02T07:46:34.584Z",
        "__v": 0
    },
    {
        "_id": "64005440ee630f9d14165c5b",
        "no": "86",
        "device": "Cold Box - 10 L",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:46:08.778Z",
        "updatedAt": "2023-03-02T07:46:08.778Z",
        "__v": 0
    },
    {
        "_id": "64005425ee630f9d14165c55",
        "no": "85",
        "device": "Bed Pan - Adult, Female, Stainless Steel, 3 L",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:45:41.839Z",
        "updatedAt": "2023-03-02T07:45:41.839Z",
        "__v": 0
    },
    {
        "_id": "6400540fee630f9d14165c4f",
        "no": "85",
        "device": "Bed Pan - Adult, Male, Stainless Steel, 3 L",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:45:19.466Z",
        "updatedAt": "2023-03-02T07:45:19.466Z",
        "__v": 0
    },
    {
        "_id": "640053e2ee630f9d14165c49",
        "no": "84",
        "device": "Trolley - Baby Crib",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:44:34.378Z",
        "updatedAt": "2023-03-02T07:44:34.378Z",
        "__v": 0
    },
    {
        "_id": "640053c8ee630f9d14165c43",
        "no": "83",
        "device": "Bed - Patient, Fowler, Adult",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:44:08.764Z",
        "updatedAt": "2023-03-02T07:44:08.764Z",
        "__v": 0
    },
    {
        "_id": "640053b1ee630f9d14165c3d",
        "no": "82",
        "device": "Hammer - Reflex, 20 cm",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:43:45.443Z",
        "updatedAt": "2023-03-02T07:43:45.443Z",
        "__v": 0
    },
    {
        "_id": "64005390ee630f9d14165c37",
        "no": "81",
        "device": "Trolley - General Purpose",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:43:12.592Z",
        "updatedAt": "2023-03-02T07:43:12.592Z",
        "__v": 0
    },
    {
        "_id": "6400537dee630f9d14165c31",
        "no": "80",
        "device": "Trolley - Dressing",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:42:53.643Z",
        "updatedAt": "2023-03-02T07:42:53.643Z",
        "__v": 0
    },
    {
        "_id": "6400536dee630f9d14165c2b",
        "no": "79",
        "device": "Tray - Instrument, With Cover, Stainless Steel, 35x30x3.5 cm",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:42:37.638Z",
        "updatedAt": "2023-03-02T07:42:37.638Z",
        "__v": 0
    },
    {
        "_id": "6400535aee630f9d14165c25",
        "no": "78",
        "device": "Suction Machine - Surgical, Electrical",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:42:18.653Z",
        "updatedAt": "2023-03-02T07:42:18.653Z",
        "__v": 0
    },
    {
        "_id": "64005337ee630f9d14165c1f",
        "no": "77",
        "device": "Sterilizer - Steam, 80 L",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:41:43.660Z",
        "updatedAt": "2023-03-02T07:41:43.660Z",
        "__v": 0
    },
    {
        "_id": "6400532aee630f9d14165c19",
        "no": "77",
        "device": "Sterilizer - Steam, 40 L",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:41:30.800Z",
        "updatedAt": "2023-03-02T07:41:30.800Z",
        "__v": 0
    },
    {
        "_id": "64005317ee630f9d14165c13",
        "no": "76",
        "device": "Set - Vascular",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:41:11.089Z",
        "updatedAt": "2023-03-02T07:41:11.089Z",
        "__v": 0
    },
    {
        "_id": "64005304ee630f9d14165c0d",
        "no": "75",
        "device": "Stapler - skin",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:40:52.900Z",
        "updatedAt": "2023-03-02T07:40:52.900Z",
        "__v": 0
    },
    {
        "_id": "640052f7ee630f9d14165c07",
        "no": "74",
        "device": "Set - Instrument, Rectal, Major",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:40:39.556Z",
        "updatedAt": "2023-03-02T07:40:39.556Z",
        "__v": 0
    },
    {
        "_id": "640052e5ee630f9d14165c01",
        "no": "73",
        "device": "Set - pancreaticoduodenectomy",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:40:21.976Z",
        "updatedAt": "2023-03-02T07:40:21.976Z",
        "__v": 0
    },
    {
        "_id": "640052c9ee630f9d14165bfb",
        "no": "72",
        "device": "Set - Pancreatectomy",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:39:53.575Z",
        "updatedAt": "2023-03-02T07:39:53.575Z",
        "__v": 0
    },
    {
        "_id": "640052b8ee630f9d14165bf5",
        "no": "71",
        "device": "Set - Laparotomy, Infant",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:39:36.205Z",
        "updatedAt": "2023-03-02T07:39:36.205Z",
        "__v": 0
    },
    {
        "_id": "640052a0ee630f9d14165bef",
        "no": "70",
        "device": "Set - Laparotomy",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:39:12.080Z",
        "updatedAt": "2023-03-02T07:39:12.080Z",
        "__v": 0
    },
    {
        "_id": "6400524cee630f9d14165be4",
        "no": "69",
        "device": "Set - Laminectomy",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:37:48.587Z",
        "updatedAt": "2023-03-02T07:38:01.242Z",
        "__v": 0
    },
    {
        "_id": "64005238ee630f9d14165bde",
        "no": "68",
        "device": "Set - Instrument, Tracheostomy",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:37:28.834Z",
        "updatedAt": "2023-03-02T07:37:28.834Z",
        "__v": 0
    },
    {
        "_id": "64005226ee630f9d14165bd8",
        "no": "67",
        "device": "Set - Instrument, Surgery, Major",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:37:10.955Z",
        "updatedAt": "2023-03-02T07:37:10.955Z",
        "__v": 0
    },
    {
        "_id": "64005218ee630f9d14165bd2",
        "no": "66",
        "device": "Set - Instrument, Obstetrical",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:36:56.957Z",
        "updatedAt": "2023-03-02T07:36:56.957Z",
        "__v": 0
    },
    {
        "_id": "64005204ee630f9d14165bcc",
        "no": "65",
        "device": "Set - Instrument, Surgery, Minor",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:36:36.377Z",
        "updatedAt": "2023-03-02T07:36:36.377Z",
        "__v": 0
    },
    {
        "_id": "640051a6ee630f9d14165bc6",
        "no": "64",
        "device": "Set - Instrument, Caeserean Section",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:35:02.899Z",
        "updatedAt": "2023-03-02T07:35:02.899Z",
        "__v": 0
    },
    {
        "_id": "64005186ee630f9d14165bbb",
        "no": "63",
        "device": "Set - Incision and Drainage",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:34:30.425Z",
        "updatedAt": "2023-03-02T07:34:40.092Z",
        "__v": 0
    },
    {
        "_id": "64005179ee630f9d14165bb5",
        "no": "62",
        "device": "Set - Hysterectomy",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:34:17.626Z",
        "updatedAt": "2023-03-02T07:34:17.626Z",
        "__v": 0
    },
    {
        "_id": "64005157ee630f9d14165baf",
        "no": "61",
        "device": "Set - Foreign Body Removal",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:33:43.887Z",
        "updatedAt": "2023-03-02T07:33:43.887Z",
        "__v": 0
    },
    {
        "_id": "6400511cee630f9d14165ba9",
        "no": "60",
        "device": "Set - Episiotomy/Perineal/Vaginal Cervical",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:32:44.554Z",
        "updatedAt": "2023-03-02T07:32:44.554Z",
        "__v": 0
    },
    {
        "_id": "64005102ee630f9d14165ba3",
        "no": "59",
        "device": "Set - Instrument, Dressing",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:32:18.811Z",
        "updatedAt": "2023-03-02T07:32:18.811Z",
        "__v": 0
    },
    {
        "_id": "640050ebee630f9d14165b9d",
        "no": "58",
        "device": "Set - Delivery",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:31:55.126Z",
        "updatedAt": "2023-03-02T07:31:55.126Z",
        "__v": 0
    },
    {
        "_id": "640050caee630f9d14165b92",
        "no": "57",
        "device": "Set - Cusco Vaginal Speculum",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:31:22.213Z",
        "updatedAt": "2023-03-02T07:31:32.690Z",
        "__v": 0
    },
    {
        "_id": "640050b5ee630f9d14165b8c",
        "no": "56",
        "device": "Set - Cholecystectomy",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:31:01.721Z",
        "updatedAt": "2023-03-02T07:31:01.721Z",
        "__v": 0
    },
    {
        "_id": "640050a2ee630f9d14165b86",
        "no": "55",
        "device": "Set - Biopsy, punch",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:30:42.068Z",
        "updatedAt": "2023-03-02T07:30:42.068Z",
        "__v": 0
    },
    {
        "_id": "64005083ee630f9d14165b80",
        "no": "54",
        "device": "Set - Biopsy, incision",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:30:11.770Z",
        "updatedAt": "2023-03-02T07:30:11.770Z",
        "__v": 0
    },
    {
        "_id": "6400506bee630f9d14165b7a",
        "no": "53",
        "device": "Set - Instrument, Vasectomy",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:29:47.882Z",
        "updatedAt": "2023-03-02T07:29:47.882Z",
        "__v": 0
    },
    {
        "_id": "6400501fee630f9d14165b74",
        "no": "52",
        "device": "Set - Instrument, Examination, Gynecology",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:28:31.717Z",
        "updatedAt": "2023-03-02T07:28:31.717Z",
        "__v": 0
    },
    {
        "_id": "64005008ee630f9d14165b6e",
        "no": "51",
        "device": "Light - Operating, Mobile",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:28:08.294Z",
        "updatedAt": "2023-03-02T07:28:08.294Z",
        "__v": 0
    },
    {
        "_id": "64004fe9ee630f9d14165b68",
        "no": "50",
        "device": "Dish - Kidney, Stainless Steel, 300 ml",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:27:37.425Z",
        "updatedAt": "2023-03-02T07:27:37.425Z",
        "__v": 0
    },
    {
        "_id": "64004fc5ee630f9d14165b62",
        "no": "49",
        "device": "Knife - Humby, with Blade",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:27:01.887Z",
        "updatedAt": "2023-03-02T07:27:01.887Z",
        "__v": 0
    },
    {
        "_id": "64004fb6ee630f9d14165b5c",
        "no": "48",
        "device": "Galipot - Stainless Steel, 100 ml",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:26:46.131Z",
        "updatedAt": "2023-03-02T07:26:46.131Z",
        "__v": 0
    },
    {
        "_id": "64004fa2ee630f9d14165b56",
        "no": "47",
        "device": "Set- Enema",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T07:26:26.807Z",
        "updatedAt": "2023-03-02T07:26:26.807Z",
        "__v": 0
    },
    {
        "_id": "64004f87ee630f9d14165b50",
        "no": "46",
        "device": "Drum - Sterilizer, 240mmx340mm",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:25:59.298Z",
        "updatedAt": "2023-03-02T07:25:59.298Z",
        "__v": 0
    },
    {
        "_id": "64004f75ee630f9d14165b4a",
        "no": "46",
        "device": "Drum - Sterilizer, 240mm X290 mm",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:25:41.598Z",
        "updatedAt": "2023-03-02T07:25:41.598Z",
        "__v": 0
    },
    {
        "_id": "64004f61ee630f9d14165b44",
        "no": "46",
        "device": "Drum - Sterilizer, 240mmx240mm",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:25:21.576Z",
        "updatedAt": "2023-03-02T07:25:21.576Z",
        "__v": 0
    },
    {
        "_id": "64004f4cee630f9d14165b3e",
        "no": "45",
        "device": "Clamp - Bowel, Stainless Steel",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:25:00.159Z",
        "updatedAt": "2023-03-02T07:25:00.159Z",
        "__v": 0
    },
    {
        "_id": "64004f18ee630f9d14165b38",
        "no": "44",
        "device": "Bowl - With Stand, 300 ml",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:24:08.282Z",
        "updatedAt": "2023-03-02T07:24:08.282Z",
        "__v": 0
    },
    {
        "_id": "64004f06ee630f9d14165b32",
        "no": "43",
        "device": "Anoscope - Metal",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:23:50.339Z",
        "updatedAt": "2023-03-02T07:23:50.339Z",
        "__v": 0
    },
    {
        "_id": "64004ef9ee630f9d14165b2c",
        "no": "42",
        "device": "Screen - Patient Four Section",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:23:37.861Z",
        "updatedAt": "2023-03-02T07:23:37.861Z",
        "__v": 0
    },
    {
        "_id": "64004ee8ee630f9d14165b26",
        "no": "41",
        "device": "Scale - Weight, Digital, Baby, With Height",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:23:20.609Z",
        "updatedAt": "2023-03-02T07:23:20.609Z",
        "__v": 0
    },
    {
        "_id": "64004ed4ee630f9d14165b20",
        "no": "41",
        "device": "Scale - Weight, Digital, Adult, With Height",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:23:00.128Z",
        "updatedAt": "2023-03-02T07:23:00.128Z",
        "__v": 0
    },
    {
        "_id": "64004eaeee630f9d14165b1a",
        "no": "40",
        "device": "Pulse Oximeter - Hand Held",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:22:22.460Z",
        "updatedAt": "2023-03-02T07:22:22.460Z",
        "__v": 0
    },
    {
        "_id": "64004ea1ee630f9d14165b14",
        "no": "39",
        "device": "Light - Examination, Mobile",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:22:09.606Z",
        "updatedAt": "2023-03-02T07:22:09.606Z",
        "__v": 0
    },
    {
        "_id": "64004e8dee630f9d14165b0e",
        "no": "38",
        "device": "Couch - Examination",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:21:49.363Z",
        "updatedAt": "2023-03-02T07:21:49.363Z",
        "__v": 0
    },
    {
        "_id": "64004e78ee630f9d14165b08",
        "no": "37",
        "device": "Trolley - Patient, Strecher",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:21:28.948Z",
        "updatedAt": "2023-03-02T07:21:28.948Z",
        "__v": 0
    },
    {
        "_id": "64004e5dee630f9d14165b02",
        "no": "36",
        "device": "Tourniquet - Single, Manual",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:21:01.414Z",
        "updatedAt": "2023-03-02T07:21:01.414Z",
        "__v": 0
    },
    {
        "_id": "64004e47ee630f9d14165afc",
        "no": "36",
        "device": "Tourniquet - Pneumatic, Manual",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:20:39.396Z",
        "updatedAt": "2023-03-02T07:20:39.396Z",
        "__v": 0
    },
    {
        "_id": "64004dafee630f9d14165af6",
        "no": "35",
        "device": "Thermometer - Rectal, Digital",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:18:07.894Z",
        "updatedAt": "2023-03-02T07:18:07.894Z",
        "__v": 0
    },
    {
        "_id": "64004d98ee630f9d14165af0",
        "no": "35",
        "device": "Thermometer - Auxillary, Digital",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:17:44.115Z",
        "updatedAt": "2023-03-02T07:17:44.115Z",
        "__v": 0
    },
    {
        "_id": "64004d79ee630f9d14165aea",
        "no": "34",
        "device": "Stethoscope - Pediatric",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:17:13.317Z",
        "updatedAt": "2023-03-02T07:17:13.317Z",
        "__v": 0
    },
    {
        "_id": "64004d66ee630f9d14165ae4",
        "no": "34",
        "device": "Stethoscope - Adult",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:16:54.916Z",
        "updatedAt": "2023-03-02T07:16:54.916Z",
        "__v": 0
    },
    {
        "_id": "64004d36ee630f9d14165ade",
        "no": "33",
        "device": "Sphygmomanometer - Digital pediatric",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:16:06.917Z",
        "updatedAt": "2023-03-02T07:16:06.917Z",
        "__v": 0
    },
    {
        "_id": "64004d25ee630f9d14165ad8",
        "no": "33",
        "device": "Sphygmomanometer - Digital , Adult",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:15:49.356Z",
        "updatedAt": "2023-03-02T07:15:49.356Z",
        "__v": 0
    },
    {
        "_id": "64004ce7ee630f9d14165ad2",
        "no": "32",
        "device": "Sphygmomanometer - Aneroid, pediatric",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:14:47.651Z",
        "updatedAt": "2023-03-02T07:14:47.651Z",
        "__v": 0
    },
    {
        "_id": "64004ccbee630f9d14165acc",
        "no": "32",
        "device": "Sphygmomanometer - Aneroid, Adult",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:14:19.456Z",
        "updatedAt": "2023-03-02T07:14:19.456Z",
        "__v": 0
    },
    {
        "_id": "64004c83ee630f9d14165ac6",
        "no": "31",
        "device": "Resuscitator - Manual, Infant",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:13:07.217Z",
        "updatedAt": "2023-03-02T07:13:07.217Z",
        "__v": 0
    },
    {
        "_id": "64004c71ee630f9d14165ac0",
        "no": "31",
        "device": "Resuscitator - Manual, pediatric",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:12:49.792Z",
        "updatedAt": "2023-03-02T07:12:49.792Z",
        "__v": 0
    },
    {
        "_id": "64004c65ee630f9d14165aba",
        "no": "31",
        "device": "Resuscitator - Manual, Adult",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:12:37.288Z",
        "updatedAt": "2023-03-02T07:12:37.288Z",
        "__v": 0
    },
    {
        "_id": "64004c47ee630f9d14165ab4",
        "no": "30",
        "device": "Regulator - Oxygen, With Humidifier and Flowmeter",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:12:07.508Z",
        "updatedAt": "2023-03-02T07:12:07.508Z",
        "__v": 0
    },
    {
        "_id": "64004be6ee630f9d14165aae",
        "no": "29",
        "device": "Cylinder - Oxygen, 10 L",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:10:30.314Z",
        "updatedAt": "2023-03-02T07:10:30.314Z",
        "__v": 0
    },
    {
        "_id": "64004bceee630f9d14165aa8",
        "no": "29",
        "device": "Cylinder - Oxygen, 20 L",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:10:06.817Z",
        "updatedAt": "2023-03-02T07:10:06.817Z",
        "__v": 0
    },
    {
        "_id": "64004b96ee630f9d14165aa2",
        "no": "29",
        "device": "Cylinder - Oxygen, 50 L",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:09:10.315Z",
        "updatedAt": "2023-03-02T07:09:10.315Z",
        "__v": 0
    },
    {
        "_id": "64004b7cee630f9d14165a9c",
        "no": "29",
        "device": "Cylinder - Oxygen, 50 L, With Humidifier and Flow Meter",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:08:44.944Z",
        "updatedAt": "2023-03-02T07:08:44.944Z",
        "__v": 0
    },
    {
        "_id": "64004b49ee630f9d14165a96",
        "no": "28",
        "device": "Oxygen Concentrator",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:07:53.220Z",
        "updatedAt": "2023-03-02T07:07:53.220Z",
        "__v": 0
    },
    {
        "_id": "64004b39ee630f9d14165a90",
        "no": "27",
        "device": "Nebulizer",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:07:37.013Z",
        "updatedAt": "2023-03-02T07:07:37.013Z",
        "__v": 0
    },
    {
        "_id": "64004b20ee630f9d14165a8a",
        "no": "26",
        "device": "Monitor - Patient",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:07:12.923Z",
        "updatedAt": "2023-03-02T07:07:12.923Z",
        "__v": 0
    },
    {
        "_id": "64004af2ee630f9d14165a84",
        "no": "25",
        "device": "Phototherapy Unit",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:06:26.196Z",
        "updatedAt": "2023-03-02T07:06:26.196Z",
        "__v": 0
    },
    {
        "_id": "64004addee630f9d14165a7e",
        "no": "24",
        "device": "Stand - Infusion",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:06:05.890Z",
        "updatedAt": "2023-03-02T07:06:05.890Z",
        "__v": 0
    },
    {
        "_id": "64004ac3ee630f9d14165a78",
        "no": "23",
        "device": "Pump - Infusion",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:05:39.076Z",
        "updatedAt": "2023-03-02T07:05:39.076Z",
        "__v": 0
    },
    {
        "_id": "64004a9fee630f9d14165a72",
        "no": "22",
        "device": "Bath - Water, 8 L",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:05:03.453Z",
        "updatedAt": "2023-03-02T07:05:03.453Z",
        "__v": 0
    },
    {
        "_id": "64004a72ee630f9d14165a6c",
        "no": "21",
        "device": "Sterilizer - Hot Air, 80 L",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:04:18.091Z",
        "updatedAt": "2023-03-02T07:04:18.091Z",
        "__v": 0
    },
    {
        "_id": "64004a5bee630f9d14165a66",
        "no": "21",
        "device": "Sterilizer - Hot Air, 40 L",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:03:55.735Z",
        "updatedAt": "2023-03-02T07:03:55.735Z",
        "__v": 0
    },
    {
        "_id": "640049f4ee630f9d14165a60",
        "no": "20",
        "device": "Mixer - Vortex",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:02:12.719Z",
        "updatedAt": "2023-03-02T07:02:12.719Z",
        "__v": 0
    },
    {
        "_id": "640049e2ee630f9d14165a5a",
        "no": "19",
        "device": "Shaker - Rotary, Clinical Testing",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:01:54.162Z",
        "updatedAt": "2023-03-02T07:01:54.162Z",
        "__v": 0
    },
    {
        "_id": "640049a9ee630f9d14165a54",
        "no": "18",
        "device": "Rack - Drying",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:00:57.525Z",
        "updatedAt": "2023-03-02T07:00:57.525Z",
        "__v": 0
    },
    {
        "_id": "6400498cee630f9d14165a4e",
        "no": "18",
        "device": "Rack - Staining",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T07:00:28.530Z",
        "updatedAt": "2023-03-02T07:00:28.530Z",
        "__v": 0
    },
    {
        "_id": "6400496eee630f9d14165a48",
        "no": "17",
        "device": "Microscope - Binocular, LED",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:59:58.579Z",
        "updatedAt": "2023-03-02T06:59:58.579Z",
        "__v": 0
    },
    {
        "_id": "6400494bee630f9d14165a42",
        "no": "16",
        "device": "Hemoglobinometer",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:59:23.818Z",
        "updatedAt": "2023-03-02T06:59:23.818Z",
        "__v": 0
    },
    {
        "_id": "64004931ee630f9d14165a3c",
        "no": "15",
        "device": "Hemocytometer",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:58:57.233Z",
        "updatedAt": "2023-03-02T06:58:57.233Z",
        "__v": 0
    },
    {
        "_id": "64004912ee630f9d14165a36",
        "no": "14",
        "device": "Hematocrit Reading Scale",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:58:26.499Z",
        "updatedAt": "2023-03-02T06:58:26.499Z",
        "__v": 0
    },
    {
        "_id": "640048fcee630f9d14165a30",
        "no": "13",
        "device": "Glucometer",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:58:04.850Z",
        "updatedAt": "2023-03-02T06:58:04.850Z",
        "__v": 0
    },
    {
        "_id": "640048e1ee630f9d14165a2a",
        "no": "12",
        "device": "Forceps - Pick Up, With Jar",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:57:37.219Z",
        "updatedAt": "2023-03-02T06:57:37.219Z",
        "__v": 0
    },
    {
        "_id": "640048c6ee630f9d14165a24",
        "no": "11",
        "device": "ESR Stand - Stainless Steel, 60 Minute",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:57:10.293Z",
        "updatedAt": "2023-03-02T06:57:10.293Z",
        "__v": 0
    },
    {
        "_id": "640048b3ee630f9d14165a1e",
        "no": "10",
        "device": "Distiller - Water, 8 L/hr",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:56:51.933Z",
        "updatedAt": "2023-03-02T06:56:51.933Z",
        "__v": 0
    },
    {
        "_id": "64004888ee630f9d14165a18",
        "no": "9",
        "device": "Clamp - Tube",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:56:08.475Z",
        "updatedAt": "2023-03-02T06:56:08.475Z",
        "__v": 0
    },
    {
        "_id": "64004867ee630f9d14165a12",
        "no": "8",
        "device": "Centrifuge - Hematocrit, Electrical",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:55:35.020Z",
        "updatedAt": "2023-03-02T06:55:35.020Z",
        "__v": 0
    },
    {
        "_id": "64004851ee630f9d14165a0c",
        "no": "8",
        "device": "Centrifuge - General Purpose, Electrical",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:55:13.852Z",
        "updatedAt": "2023-03-02T06:55:13.852Z",
        "__v": 0
    },
    {
        "_id": "64004800ee630f9d14165a06",
        "no": "7",
        "device": "Vacuum Extractor - Electrical",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:53:52.185Z",
        "updatedAt": "2023-03-02T06:53:52.185Z",
        "__v": 0
    },
    {
        "_id": "640047ebee630f9d14165a00",
        "no": "6",
        "device": "Doppler - Fetal",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:53:31.775Z",
        "updatedAt": "2023-03-02T06:53:31.775Z",
        "__v": 0
    },
    {
        "_id": "640047c3ee630f9d141659fa",
        "no": "5",
        "device": "Fetoscope - Wooden",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:52:51.338Z",
        "updatedAt": "2023-03-02T06:52:51.338Z",
        "__v": 0
    },
    {
        "_id": "640047aaee630f9d141659f4",
        "no": "4",
        "device": "Couch - Examination, Gynaecological",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:52:26.229Z",
        "updatedAt": "2023-03-02T06:52:26.229Z",
        "__v": 0
    },
    {
        "_id": "6400478aee630f9d141659ee",
        "no": "3",
        "device": "Set - Laryngoscope",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T06:51:54.871Z",
        "updatedAt": "2023-03-02T06:51:54.871Z",
        "__v": 0
    },
    {
        "_id": "6400476fee630f9d141659e8",
        "no": "2",
        "device": "Set - Diagnostic, EENT",
        "amount": "Set",
        "type": "RMD",
        "createdAt": "2023-03-02T06:51:27.173Z",
        "updatedAt": "2023-03-02T06:51:27.173Z",
        "__v": 0
    },
    {
        "_id": "6400472bee630f9d141659e2",
        "no": "1",
        "device": "Wheel Chair - Adult",
        "amount": "Each",
        "type": "RMD",
        "createdAt": "2023-03-02T06:50:19.606Z",
        "updatedAt": "2023-03-02T06:50:19.606Z",
        "__v": 0
    }
].sort((a,b) => a.device.localeCompare(b.device));

let users = []
let currentData = data

let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function(){
  spinnerWrapper.style.display= 'none';
});





function copyContentit(text2){
    console.log(text2)
    try {
       navigator.clipboard.writeText(text2);
       document.getElementById("no").innerText = text2 +" is copied to your clipboard";

setTimeout(function(){
    document.getElementById("no").innerText = 180 - document.querySelectorAll('.hide').length;
}, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase().trim()

  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) 
      
    user.element.classList.toggle("hide", !isVisible)
    

  })
  var element = document.getElementById("no");
  if(currentData == data){
    element.innerHTML = 180 - document.querySelectorAll('.hide').length;
  }else{
    element.innerHTML = 258 - document.querySelectorAll('.hide').length;
  }

if(element.innerHTML == 0 ){
    document.getElementById("noitem").innerText=" ITEM IS NOT FOUND" 
}
else{
    document.getElementById("noitem").innerText="" 
}

})


function renderUsers() {
    // Clear the userCardContainer
    userCardContainer.innerHTML = ""
  
    users = currentData.map(user => {
      // Code for creating user card
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const type = card.querySelector("[data-type]")
      const amount = card.querySelector("[data-amount]")
      const device = card.querySelector("[data-device]")
      const device_copy = card.querySelector("[data-copy]")
      const device_search = card.querySelector("[data-search]")
      device_copy.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-clipboard btn h-10 w-10  ml-4 md:ml-20 align-middle text-yellow-300 hover:text-red-600 hover:scale-125" onclick="copyContentit('${user.device}')" viewBox="0 0 16 16">
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
    </svg>
      `  
      device.innerHTML = `<a href="https://www.google.com/search?q=${user.device}" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"> ${user.device}</a>
    
      `
      device_search.innerHTML = `
      <button id="dropdownDefaultButton" data-dropdown-toggle="${user._id}" class="text-white hidden md:flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Search<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
      <button id="dropdownDefaultButton" data-dropdown-toggle="${user._id}" class="text-white sm:flex md:hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search text-slate-100" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg><svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
      <!-- Dropdown menu -->
      <div id="${user._id}"  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="https://www.alibaba.com/trade/search?tab=all&searchText=${user.device}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Alibaba</a>
            </li>
            <li>
              <a href="https://www.amazon.com/s?k=${user.device}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Amazon</a>
            </li>
            <li>
              <a href="https://supply.unicef.org/catalogsearch/result/?q=${user.device}"class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Unicef Catalogue</a>
            </li>
            
          </ul>
      </div>
      

      `
      
  
      amount.textContent = user.amount
      type.textContent = user.type
      userCardContainer.append(card)
  
      return { name: user.device, email: user.type, amount: user.amount, element: card }
    })
  }
 

  function handleSwitchButton(value) {
   
    if (value == true) {
      currentData = data1
      var element = document.getElementById("ppl");
      element.innerHTML = "PPL 2021"
      document.getElementById("no").innerText = 258
    } else {
      currentData = data
      var element = document.getElementById("ppl");
      element.innerHTML = "PPL 2023"
      document.getElementById("no").innerText = 180
    }
    
   
    renderUsers()
  }
  
  // Event listener for switch button
//   const switchButton = document.querySelector("[data-switch-button]")
//   switchButton.addEventListener("click", handleSwitchButton)
  const switchButton = document.querySelector("[data-switch-button]");

  switchButton.addEventListener("change", function(event) {
    const switchValue = event.target.checked;
   

    // Call your other function here
    handleSwitchButton(switchValue);
   
  });




  

  // Initial rendering
 
  renderUsers()






    
    document.getElementById('downloadBtn').addEventListener('click', function() {
        var pdfUrl = 'ppl2021.pdf'; // Replace with the actual URL of the PDF file
      
        // Create a link element
        var link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'ppl 2021.pdf'; // Set the filename for the download
        link.innerText = 'Download PDF';
      
        // Append the link to the document body
        document.body.appendChild(link);
      
        // Simulate clicking the link to trigger the download
        link.click();
      
        // Remove the link element from the document body
        document.body.removeChild(link);
      });
      document.getElementById('downloadBtn1').addEventListener('click', function() {
        var pdfUrl = 'ppl.xlsx'; // Replace with the actual URL of the PDF file
      
        // Create a link element
        var link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'ppl 2021.xlsx'; // Set the filename for the download
        link.innerText = 'Download PDF';
      
        // Append the link to the document body
        document.body.appendChild(link);
      
        // Simulate clicking the link to trigger the download
        link.click();
      
        // Remove the link element from the document body
        document.body.removeChild(link);
      });