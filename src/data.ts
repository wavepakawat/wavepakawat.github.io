import type { L } from "./i18n";

/* ============================================================
   All site content lives here (bilingual EN / TH).
   Edit both languages in place.
   ============================================================ */

export const PROFILE = {
  name: "Pakawat Maleephet",
  role: { en: "Mobile & Fullstack Developer", th: "นักพัฒนา Mobile & Fullstack" } as L,
  email: "wave51040@hotmail.com",
  phone: "098-870-7965",
  phoneHref: "+66988707965",
  linkedin: "https://www.linkedin.com/in/pakawat-maleephet",
  github: "https://github.com/wavepakawat",
  resume: "/Pakawat-Maleephet-Resume.pdf",
};

export const UI = {
  nav: {
    about: { en: "About", th: "เกี่ยวกับ" },
    skills: { en: "Skills", th: "ทักษะ" },
    experience: { en: "Experience", th: "ประสบการณ์" },
    projects: { en: "Projects", th: "โปรเจกต์" },
    education: { en: "Education", th: "การศึกษา" },
    contact: { en: "Contact", th: "ติดต่อ" },
  },
  hero: {
    eyebrow: { en: "Hi, I'm", th: "สวัสดีครับ ผมชื่อ" },
    tagline: {
      en: "Building full-cycle apps — from polished React Native frontends to robust Golang & .NET backends.",
      th: "พัฒนาแอปแบบครบวงจร — ตั้งแต่ฟรอนต์เอนด์ React Native ที่สวยงาม ไปจนถึงระบบหลังบ้าน Golang และ .NET ที่แข็งแกร่ง",
    },
    cta: { en: "Get in touch", th: "ติดต่อผม" },
    resume: { en: "Download Résumé", th: "ดาวน์โหลดเรซูเม่" },
    available: { en: "Available for work", th: "เปิดรับงาน" },
    scroll: { en: "Scroll", th: "เลื่อนลง" },
  },
  about: {
    title: { en: "About me", th: "เกี่ยวกับฉัน" },
    lead: {
      en: "Highly agile developer specialized in React Native, Golang, and SQL Server. I've shipped full-cycle applications across mobile and web — designing intuitive frontend interfaces and engineering robust, scalable backend systems.",
      th: "นักพัฒนาที่มีความคล่องตัวสูง เชี่ยวชาญด้าน React Native, Golang และ SQL Server มีประสบการณ์ส่งมอบแอปพลิเคชันแบบครบวงจรทั้งบนมือถือและเว็บ — ออกแบบหน้าจอที่ใช้งานง่าย และพัฒนาระบบหลังบ้านที่แข็งแกร่งและขยายต่อได้",
    },
    facts: [
      { num: "5+", label: { en: "Years building apps", th: "ปีในการพัฒนาแอป" } },
      { num: "4+", label: { en: "Production apps shipped", th: "แอปที่ขึ้นใช้งานจริง" } },
      { num: "∞", label: { en: "Frontend ↔ Backend", th: "ฟรอนต์เอนด์ ↔ แบ็กเอนด์" } },
    ],
  },
  skillsTitle: { en: "Skills & Tools", th: "ทักษะ & เครื่องมือ" },
  experienceTitle: { en: "Experience", th: "ประสบการณ์" },
  projectsTitle: { en: "Selected Projects", th: "ผลงานที่คัดสรร" },
  educationTitle: { en: "Education", th: "การศึกษา" },
  contact: {
    title: { en: "Let's work together", th: "มาร่วมงานกัน" },
    big: {
      en: "Let's build something worth shipping.",
      th: "มาสร้างอะไรที่ส่งมอบได้จริงไปด้วยกัน",
    },
    lead: {
      en: "Open to mobile & fullstack roles. The fastest way to reach me is email — I'll reply quickly.",
      th: "เปิดรับงานสาย Mobile & Fullstack ติดต่อผมได้เร็วที่สุดทางอีเมล แล้วผมจะรีบตอบกลับครับ",
    },
    location: {
      en: "Based in Bang Phlat, Bangkok, Thailand",
      th: "อยู่ที่เขตบางพลัด กรุงเทพมหานคร ประเทศไทย",
    },
  },
  footer: {
    en: "Built with care & lots of coffee",
    th: "ตั้งใจทำพร้อมกาแฟอีกหลายแก้ว",
  },
};

export type SkillGroup = {
  key: "mobile" | "backend" | "database" | "tools";
  title: L;
  tags: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    key: "mobile",
    title: { en: "Mobile & Frontend", th: "มือถือ & ฟรอนต์เอนด์" },
    tags: ["React Native (CLI & Expo)", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    key: "backend",
    title: { en: "Backend", th: "แบ็กเอนด์" },
    tags: ["Golang", "C# .NET Core", "REST API"],
  },
  {
    key: "database",
    title: { en: "Database", th: "ฐานข้อมูล" },
    tags: ["SQL Server", "MongoDB", "PostgreSQL", "MariaDB", "SQLite"],
  },
  {
    key: "tools",
    title: { en: "Tools & Technologies", th: "เครื่องมือ & เทคโนโลยี" },
    tags: ["Docker", "Git", "Figma", "Claude Code", "GitHub Copilot", "Gemini API"],
  },
];

export type Job = {
  role: L;
  company: L;
  period: L;
  points: L[];
};

export const EXPERIENCE: Job[] = [
  {
    role: { en: "Software Engineer", th: "วิศวกรซอฟต์แวร์" },
    company: { en: "E-Business Plus Co., Ltd.", th: "บริษัท อี-บิซิเนส พลัส จำกัด" },
    period: { en: "2020 — 2026", th: "2020 — 2026" },
    points: [
      {
        en: "ERP & HRM Systems: developed and maintained Enterprise Resource Planning and Human Resource Management systems.",
        th: "ระบบ ERP & HRM: พัฒนาและดูแลระบบบริหารจัดการทรัพยากรองค์กร (ERP) และระบบบริหารจัดการทรัพยากรบุคคล (HRM)",
      },
      {
        en: "Mobile App (React Native): built a Time Attendance app for iOS & Android with GPS location tracking and map verification before clock-in/out.",
        th: "Mobile App (React Native): พัฒนาแอปลงเวลาทำงาน (Time Attendance) รองรับ iOS และ Android พร้อมระบุตำแหน่งด้วย GPS และแสดงผลบนแผนที่ก่อนยืนยันข้อมูล",
      },
      {
        en: "Employee Self-Service (ESS): leave & OT requests, shift changes, welfare checks, salary-adjustment history, and work-schedule viewing.",
        th: "Employee Self-Service (ESS): ยื่นขออนุมัติลา, ขอ OT, เปลี่ยนกะการทำงาน, ตรวจสอบสวัสดิการ, ประวัติการปรับเงินเดือน และตรวจสอบตารางงาน",
      },
      {
        en: "Web App: built ERP data-management dashboards using Next.js.",
        th: "Web App: พัฒนาหน้าเว็บจัดการข้อมูลในระบบ ERP ด้วย Next.js",
      },
      {
        en: "Backend & API: designed and developed RESTful APIs using Golang and C# .NET Core with SQL Server.",
        th: "Backend & API: ออกแบบและพัฒนา RESTful API ด้วย Golang, C# .NET Core และจัดการฐานข้อมูล SQL Server",
      },
    ],
  },
  {
    role: {
      en: "Mobile & Backend Developer (Part-time)",
      th: "นักพัฒนา Mobile & Backend (พาร์ทไทม์)",
    },
    company: { en: "Freelance / Contract", th: "ฟรีแลนซ์ / รับงานอิสระ" },
    period: { en: "2022 — Present", th: "2022 — ปัจจุบัน" },
    points: [
      {
        en: "PT-Max Gas (consumer): gas-cylinder sales app in React Native (Android/iOS) + C# .NET Core — cart, discounts, referrals, payment gateway, and order-status map.",
        th: "PT-Max Gas (ฝั่งลูกค้า): แอปจำหน่ายถังแก๊สและอุปกรณ์เสริม พัฒนาด้วย React Native (Android/iOS) และ Backend C# .NET Core — ระบบตะกร้าสินค้า ส่วนลด เชิญเพื่อน ชำระเงิน และแสดงสถานะคำสั่งซื้อบนแผนที่",
      },
      {
        en: "Gas sales (merchant): React Native (Android) + C# .NET Core integrated with EDC terminals to read membership & ID cards (NFC) — sales, tank-status monitoring, safety audits, and contract generation.",
        th: "แอปจำหน่ายแก๊ส (ฝั่งร้านค้า): React Native (Android) + Backend C# .NET Core เชื่อมต่อเครื่อง EDC อ่านบัตรสมาชิกและบัตรประชาชน (NFC) เพื่อขายแก๊ส ตรวจสอบสถานะถัง เก็บข้อมูลตรวจสภาพถัง และสร้างสัญญายืมถัง",
      },
      {
        en: "Water Level Tracking (Royal Irrigation Dept): React Native app visualizing water-level data through dynamic graphs and tables.",
        th: "แอปติดตามระดับน้ำ กรมชลประทาน: พัฒนาด้วย React Native เน้นแสดงผลข้อมูลแบบกราฟและตารางเพื่อวิเคราะห์ได้ง่าย",
      },
    ],
  },
  {
    role: {
      en: "IT Support & Programmer (Internship)",
      th: "IT Support & Programmer (ฝึกงาน)",
    },
    company: {
      en: "Forth Corporation Public Co., Ltd.",
      th: "บริษัท ฟอร์ท คอร์ปอเรชั่น จำกัด (มหาชน)",
    },
    period: { en: "2017", th: "2017" },
    points: [
      {
        en: "Provided basic hardware and software support and troubleshooting.",
        th: "ดูแลและแก้ปัญหาด้านสารสนเทศ ทั้ง Hardware และ Software เบื้องต้น",
      },
      {
        en: "Developed Windows applications using VB.NET.",
        th: "พัฒนา Windows Application ด้วยภาษา VB.NET",
      },
    ],
  },
];

export type Project = {
  icon: "fuel" | "pin" | "chart" | "building";
  accent: string;
  title: L;
  desc: L;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    icon: "fuel",
    accent: "var(--g-orange)",
    title: { en: "PT-Max Gas App", th: "แอป PT-Max Gas" },
    desc: {
      en: "Consumer & merchant gas-cylinder sales platform. Shopping cart, discounts, referrals, payment gateway, EDC/NFC card reading, and live order mapping.",
      th: "แพลตฟอร์มจำหน่ายถังแก๊สทั้งฝั่งลูกค้าและร้านค้า ระบบตะกร้าสินค้า ส่วนลด เชิญเพื่อน ชำระเงิน อ่านบัตรผ่าน EDC/NFC และแสดงสถานะคำสั่งซื้อบนแผนที่",
    },
    tags: ["React Native", "C# .NET Core", "NFC / EDC", "Maps"],
  },
  {
    icon: "pin",
    accent: "var(--g-cyan)",
    title: { en: "Time Attendance App", th: "แอปลงเวลาทำงาน" },
    desc: {
      en: "iOS & Android clock-in/out with GPS location tracking and on-map verification for accuracy before submitting.",
      th: "แอปลงเวลาเข้า-ออกงานบน iOS และ Android ระบุตำแหน่งด้วย GPS และยืนยันบนแผนที่เพื่อความแม่นยำก่อนส่งข้อมูล",
    },
    tags: ["React Native", "GPS", "Maps", "HRM"],
  },
  {
    icon: "chart",
    accent: "var(--g-lime)",
    title: { en: "Water Level Tracking", th: "ติดตามระดับน้ำ" },
    desc: {
      en: "Royal Irrigation Department app visualizing water-level data through dynamic graphs and tables for fast, effective analysis.",
      th: "แอปของกรมชลประทาน แสดงผลข้อมูลระดับน้ำในรูปแบบกราฟและตารางแบบไดนามิก เพื่อการวิเคราะห์ที่รวดเร็วและมีประสิทธิภาพ",
    },
    tags: ["React Native", "Data Viz", "Charts"],
  },
  {
    icon: "building",
    accent: "var(--g-purple)",
    title: { en: "ERP / HRM & ESS Platform", th: "แพลตฟอร์ม ERP / HRM & ESS" },
    desc: {
      en: "Enterprise resource & human-resource management with Next.js dashboards and an Employee Self-Service suite, backed by Golang & .NET APIs.",
      th: "ระบบบริหารทรัพยากรองค์กรและบุคคล พร้อมแดชบอร์ด Next.js และชุดฟีเจอร์ Employee Self-Service รองรับด้วย API ที่พัฒนาด้วย Golang และ .NET",
    },
    tags: ["Next.js", "Golang", "C# .NET Core", "SQL Server"],
  },
];

export type Education = {
  period: string;
  degree: L;
  school: L;
};

export const EDUCATION: Education[] = [
  {
    period: "2015 — 2019",
    degree: { en: "B.Eng. Computer Engineering", th: "วิศวกรรมคอมพิวเตอร์" },
    school: {
      en: "Rajamangala University of Technology Rattanakosin (Salaya)",
      th: "มหาวิทยาลัยเทคโนโลยีราชมงคลรัตนโกสินทร์ (ศาลายา)",
    },
  },
  {
    period: "2012 — 2014",
    degree: { en: "Electronics Technology", th: "สาขาวิชาอิเล็กทรอนิกส์" },
    school: {
      en: "Prachuap Khiri Khan Technical College",
      th: "วิทยาลัยเทคนิคประจวบคีรีขันธ์",
    },
  },
];

export const HERO_STACK = ["React Native", "Golang", "C# .NET Core", "Next.js", "SQL Server"];
