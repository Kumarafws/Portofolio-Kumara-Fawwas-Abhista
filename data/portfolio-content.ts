export interface ProjectItem {
  slug: string
  name: string
  category: string
  categoryKey: 'fullstack' | 'frontend'
  accent: 'cyan' | 'violet'
  tagline: {
    id: string
    en: string
  }
  description: {
    id: string
    en: string
  }
  highlights: {
    id: string[]
    en: string[]
  }
  technologies: string[]
  github?: string
  demo?: string
  badge?: {
    id: string
    en: string
  }
}

export interface ExperienceItem {
  role: { id: string; en: string }
  organization: string
  period: string | { id: string; en: string }
  type: 'work' | 'organization'
  description: { id: string; en: string }
}

export interface AwardItem {
  title: { id: string; en: string }
  issuer: string
  year: string
  description: { id: string; en: string }
}

export const personalInfo = {
  name: 'Kumara Fawwas Abhista',
  nickname: 'Kumara',
  email: 'kumarafawwas@gmail.com',
  github: 'https://github.com/kumarafws',
  linkedin: 'https://www.linkedin.com/in/kumara-fawwas',
  cv: '/Kumara-Fawwas-Abhista-CV.pdf',
  photo: '/Pas Foto - Latar Merah.png',
  university: 'Universitas Ahmad Dahlan',
  major: {
    id: 'S1 Sistem Informasi',
    en: 'B.S. in Information Systems'
  },
  gpa: '3.71 / 4.0',
  graduationStatus: {
    id: 'Lulusan Sistem Informasi',
    en: 'Information Systems Graduate'
  },
  statusBadge: {
    id: 'Terbuka untuk Peluang Kerja / Freelance',
    en: 'Available for Full-time & Opportunities'
  }
}

export const navigationTranslations = {
  id: {
    home: 'Beranda',
    projects: 'Proyek',
    about: 'Tentang',
    skills: 'Keahlian',
    experience: 'Pengalaman',
    education: 'Pendidikan',
    contact: 'Kontak',
  },
  en: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  }
}

export const heroContent = {
  id: {
    greeting: 'Halo, saya',
    headlinePrefix: 'Membangun Web & Sistem',
    headlineHighlight: 'Modern, Cepat, dan Berdampak.',
    subheadline: 'Lulusan Sistem Informasi dari Universitas Ahmad Dahlan dengan fokus pada Full-Stack Web Development. Menggabungkan analisis proses bisnis yang matang dengan eksekusi kode yang efisien dan andal.',
    viewProjects: 'Lihat Proyek',
    downloadCv: 'Unduh CV',
    copyEmail: 'Salin Email',
    emailCopied: 'Email Tersalin!',
    statsGpaLabel: 'IPK Kelulusan',
    statsAwardLabel: 'Penghargaan Capstone',
    statsAwardValue: 'Best Technical Execution',
    roleTag: 'Web & Full-Stack Developer',
  },
  en: {
    greeting: "Hi there, I'm",
    headlinePrefix: 'Building Web Applications & Systems that are',
    headlineHighlight: 'Modern, Fast, and Reliable.',
    subheadline: 'Information Systems graduate from Universitas Ahmad Dahlan specializing in Full-Stack Web Development. Bridging thoughtful business workflows with clean, scalable, and high-performance code.',
    viewProjects: 'View Projects',
    downloadCv: 'Download CV',
    copyEmail: 'Copy Email',
    emailCopied: 'Email Copied!',
    statsGpaLabel: 'Graduation GPA',
    statsAwardLabel: 'Capstone Recognition',
    statsAwardValue: 'Best Technical Execution',
    roleTag: 'Web & Full-Stack Developer',
  }
}

export const projectsData: ProjectItem[] = [
  {
    slug: 'ppdb-smk-panca-bhakti-rakit',
    name: 'PPDB SMK Panca Bhakti Rakit',
    category: 'Full-stack Web Application',
    categoryKey: 'fullstack',
    accent: 'cyan',
    badge: {
      id: 'Live Production',
      en: 'Live in Production'
    },
    tagline: {
      id: 'Sistem Penerimaan Peserta Didik Baru Terpadu',
      en: 'Integrated Student Admission Management System'
    },
    description: {
      id: 'Sistem informasi penerimaan peserta didik baru berbasis web yang mengotomasi alur registrasi online siswa dan membantu panitia sekolah memverifikasi data berkas secara terstruktur.',
      en: 'A web-based student admissions platform that automates online student registration workflows and streamlines applicant document verification for school administrators.'
    },
    highlights: {
      id: [
        'Alur pendaftaran multi-tahap yang aman dengan validasi data calon siswa',
        'Backend RESTful API dibangun dengan Express.js dan database PostgreSQL',
        'Dashboard panitia untuk verifikasi status berkas dan rekapitulasi data pendaftar'
      ],
      en: [
        'Multi-step registration workflow with client and server-side data validation',
        'Robust RESTful API architecture built with Express.js and PostgreSQL',
        'Administrative dashboard for document verification and applicant tracking'
      ]
    },
    technologies: ['Next.js', 'TypeScript', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/kumarafws/PPDB-SMK',
    demo: 'https://ppdb-smk-pb.vercel.app/',
  },
  {
    slug: 'ppdb-smp',
    name: 'PPDB SMP (Capstone Project)',
    category: 'Frontend Web Application',
    categoryKey: 'frontend',
    accent: 'violet',
    badge: {
      id: '🏆 Best Technical Execution',
      en: '🏆 Best Technical Execution'
    },
    tagline: {
      id: 'Antarmuka Portal Registrasi Siswa Responsif',
      en: 'Responsive Student Enrollment Portal Interface'
    },
    description: {
      id: 'Antarmuka web pendaftaran siswa baru yang responsif dan intuitif, dirancang untuk mempermudah calon siswa memahami alur seleksi dan mengunggah persyaratan tanpa kendala.',
      en: 'A responsive and intuitive student admissions frontend interface, crafted to guide applicants seamlessly through enrollment requirements and form submissions.'
    },
    highlights: {
      id: [
        'Meraih penghargaan "Best Technical Execution" pada FIPEX Capstone Program 2025',
        'Arsitektur komponen modular dan reusable menggunakan React.js',
        'Integrasi konsumsi REST API backend yang cepat dan penanganan state yang rapi'
      ],
      en: [
        'Awarded "Best Technical Execution" at the FIPEX Capstone Program 2025',
        'Modular, reusable UI component architecture developed with React.js',
        'Smooth frontend-backend REST API data integration with robust state handling'
      ]
    },
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL'],
    github: 'https://github.com/kumarafws/CP-PSB-FE',
  },
  {
    slug: 'manajmene-sosmed',
    name: 'Social Media Management Platform',
    category: 'Frontend Web Application',
    categoryKey: 'frontend',
    accent: 'cyan',
    badge: {
      id: 'Modern Dashboard',
      en: 'Modern Dashboard'
    },
    tagline: {
      id: 'Platform Penjadwalan & Analitik Konten',
      en: 'Content Scheduling & Analytics Dashboard'
    },
    description: {
      id: 'Aplikasi dashboard berbasis web modern untuk mengelola, merencanakan kalender editorial, dan memantau analitik performa konten media sosial dalam satu antarmuka terpusat.',
      en: 'A modern web dashboard designed to streamline content scheduling, editorial calendar planning, and social media performance monitoring from a single interface.'
    },
    highlights: {
      id: [
        'Kalender interaktif untuk manajemen jadwal postingan multi-platform',
        'Tampilan metrik analitik dan ringkasan performa konten yang intuitif',
        'Dibangun dengan Next.js App Router dan TypeScript untuk performa maksimal'
      ],
      en: [
        'Interactive editorial calendar for scheduling content across channels',
        'Intuitive metric cards and performance breakdown visualizations',
        'Engineered with Next.js App Router and TypeScript for optimal speed and reliability'
      ]
    },
    technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Lucide Icons'],
    github: 'https://github.com/kumarafws/sosial-media-content-frontend',
  },
]

export const skillCategories = {
  id: [
    {
      label: 'Frontend Development',
      description: 'Membangun antarmuka web yang cepat, responsif, dan interaktif.',
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      label: 'Backend & API',
      description: 'Merancang arsitektur server, logika bisnis, dan API yang aman.',
      skills: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'Python', 'RESTful API']
    },
    {
      label: 'Database & Data Modeling',
      description: 'Pengelolaan basis data relasional dan optimasi query data.',
      skills: ['PostgreSQL', 'MySQL', 'SQL', 'Database Design']
    },
    {
      label: 'Tools & DevOps',
      description: 'Alat bantu pengembangan dan kolaborasi modern.',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel']
    },
    {
      label: 'Sistem & Metodologi',
      description: 'Pemahaman komprehensif alur sistem informasi dari hulu ke hilir.',
      skills: ['UML & Business Process', 'Software Testing', 'System Architecture', 'Clean Code']
    }
  ],
  en: [
    {
      label: 'Frontend Development',
      description: 'Crafting responsive, accessible, and high-performance user interfaces.',
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      label: 'Backend & API',
      description: 'Designing robust server architectures, business logic, and APIs.',
      skills: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'Python', 'RESTful API']
    },
    {
      label: 'Database & Data Modeling',
      description: 'Managing relational databases and query optimization.',
      skills: ['PostgreSQL', 'MySQL', 'SQL', 'Database Design']
    },
    {
      label: 'Tools & DevOps',
      description: 'Modern development workflow and collaboration tools.',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel']
    },
    {
      label: 'Systems & Methodologies',
      description: 'Holistic understanding of information systems from requirements to launch.',
      skills: ['UML & Business Process', 'Software Testing', 'System Architecture', 'Clean Code']
    }
  ]
}

export const experiencesData: ExperienceItem[] = [
  {
    role: {
      id: 'Full-Stack Developer',
      en: 'Full-Stack Developer'
    },
    organization: 'Tim Pengembang PPDB SMK Panca Bhakti Rakit',
    period: {
      id: 'Jan 2026 — Jun 2026',
      en: 'Jan 2026 — Jun 2026'
    },
    type: 'work',
    description: {
      id: 'Mengembangkan sistem penerimaan siswa baru berbasis web end-to-end, mulai dari perancangan skema database PostgreSQL, pengembangan REST API dengan Express.js, hingga integrasi antarmuka Next.js.',
      en: 'Developed an end-to-end web-based student admissions system, from designing the PostgreSQL database schema and developing REST APIs with Express.js to frontend integration using Next.js.'
    }
  },
  {
    role: {
      id: 'Asisten Dosen (Teaching Assistant)',
      en: 'Teaching Assistant'
    },
    organization: 'Universitas Ahmad Dahlan',
    period: {
      id: 'Okt 2025 — Jan 2026',
      en: 'Oct 2025 — Jan 2026'
    },
    type: 'work',
    description: {
      id: 'Mendampingi dosen dalam pelaksanaan praktikum laboratorium mata kuliah Statistika & Probabilitas serta Infrastruktur Teknologi Informasi, membimbing mahasiswa dalam pemecahan masalah teknis.',
      en: 'Assisted professors in guiding laboratory sessions for Statistics & Probability and IT Infrastructure courses, facilitating hands-on learning and technical problem solving.'
    }
  },
  {
    role: {
      id: 'Frontend Developer (Capstone Project)',
      en: 'Frontend Developer (Capstone Project)'
    },
    organization: 'Tim Pengembang PPDB SMP MBS',
    period: {
      id: 'Mar 2025 — Jul 2025',
      en: 'Mar 2025 — Jul 2025'
    },
    type: 'work',
    description: {
      id: 'Membangun antarmuka pengguna web yang responsif dengan React.js dan Tailwind CSS, serta mengintegrasikan komponen dengan REST API backend untuk sistem seleksi siswa.',
      en: 'Built responsive web user interfaces using React.js and Tailwind CSS, integrating UI components with backend REST APIs for the student admissions system.'
    }
  },
  {
    role: {
      id: 'Divisi Penelitian & Pengembangan (Litbang)',
      en: 'Research & Development Division'
    },
    organization: 'Himpunan Mahasiswa Sistem Informasi (HMSI) UAD',
    period: {
      id: 'Jan 2024 — Des 2025',
      en: 'Jan 2024 — Dec 2025'
    },
    type: 'organization',
    description: {
      id: 'Menginisiasi dan mengoordinasikan kegiatan penguatan kompetensi akademik mahasiswa Sistem Informasi, termasuk kelompok belajar pemrograman dan persiapan kompetensi teknologi.',
      en: 'Initiated and coordinated academic development programs for Information Systems students, including coding study sessions and tech competition preparation.'
    }
  },
  {
    role: {
      id: 'Ketua Pelaksana (Chairperson) — FIPEX 2024',
      en: 'Chairperson — FIPEX 2024'
    },
    organization: 'FIPEX Innovation Exhibition — Universitas Ahmad Dahlan',
    period: {
      id: 'Agu 2024 — Des 2024',
      en: 'Aug 2024 — Dec 2024'
    },
    type: 'organization',
    description: {
      id: 'Memimpin perencanaan dan pelaksanaan pameran inovasi teknologi tahunan tingkat universitas, mengoordinasikan kepanitiaan lintas divisi, dan kurasi karya inovasi mahasiswa.',
      en: 'Led the overall planning and execution of the annual university-wide innovation exhibition, coordinating cross-functional committees and project curation.'
    }
  }
]

export const awardsData: AwardItem[] = [
  {
    title: {
      id: 'Best Technical Execution',
      en: 'Best Technical Execution'
    },
    issuer: 'FIPEX Capstone Program — Universitas Ahmad Dahlan',
    year: '2025',
    description: {
      id: 'Dianugerahi predikat eksekusi teknis terbaik atas pengembangan proyek Capstone PPDB yang memenuhi standar kualitas arsitektur kode, integrasi API, dan kenyamanan antarmuka pengguna.',
      en: 'Awarded for delivering the top technical execution in the Capstone Program, recognized for architectural code quality, robust API integration, and superior UI/UX responsiveness.'
    }
  }
]

export const sectionHeaders = {
  id: {
    projects: {
      eyebrow: 'Karya Pilihan',
      title: 'Proyek yang Menghubungkan Pengguna, Data & Sistem',
      subtitle: 'Ringkasan sistem web yang telah saya bangun dengan fokus pada fungsionalitas, performa, dan kemudahan penggunaan.',
      allFilter: 'Semua Proyek',
      fullstackFilter: 'Full-Stack',
      frontendFilter: 'Frontend',
      viewDemo: 'Live Demo',
      viewCode: 'Source Code',
      quickView: 'Ringkasan Fitur',
      quickViewModalTitle: 'Detail Singkat Proyek',
      closeModal: 'Tutup',
      highlightsTitle: 'Sorotan & Fitur Utama',
      techTitle: 'Teknologi yang Digunakan',
    },
    about: {
      eyebrow: 'Tentang Saya',
      title: 'Menjembatani Kebutuhan Bisnis dan Implementasi Kode',
      description: 'Latar belakang pendidikan di Sistem Informasi memberi saya perspektif unik: tidak hanya sekadar menulis kode, tetapi juga memahami bagaimana sebuah sistem memecahkan masalah nyata organisasi. Terbiasa menangani seluruh siklus pengembangan—mulai dari perancangan antarmuka React/Next.js, perancangan API, manajemen database SQL, hingga pengujian dan deployment.',
      highlights: [
        { label: 'Pendidikan', value: 'S1 Sistem Informasi (Universitas Ahmad Dahlan)' },
        { label: 'IPK / Prestasi', value: '3.71 / 4.0 (Best Technical Execution 2025)' },
        { label: 'Fokus Utama', value: 'Full-Stack Web (React, Next.js, Node.js, PostgreSQL)' },
        { label: 'Status Saat Ini', value: 'Siap bergabung & berkontribusi dalam tim' },
      ]
    },
    skills: {
      eyebrow: 'Keahlian & Toolkit',
      title: 'Teknologi & Fondasi Pengembangan',
      subtitle: 'Alat dan teknologi yang saya kuasai dan gunakan secara aktif untuk membangun solusi web modern.'
    },
    experience: {
      eyebrow: 'Jejak Langkah',
      title: 'Pengalaman Kerja & Organisasi',
      subtitle: 'Pengalaman praktis dalam pengembangan perangkat lunak, asistensi akademik, dan kontribusi organisasi.',
      workTab: 'Pengalaman Kerja',
      orgTab: 'Organisasi Kampus',
    },
    education: {
      eyebrow: 'Pendidikan & Penghargaan',
      title: 'Fondasi Akademik & Pengakuan',
      academicLabel: 'Pendidikan Formal',
      awardsLabel: 'Penghargaan & Prestasi',
    },
    contact: {
      eyebrow: 'Mari Berkolaborasi',
      title: 'Siap Membangun Sesuatu yang Berdampak?',
      subtitle: 'Apakah Anda memiliki tawaran pekerjaan, proyek web, atau ingin berdiskusi? Jangan ragu untuk menghubungi saya.',
      sendEmail: 'Kirim Email',
      copyEmail: 'Salin Alamat Email',
      copied: 'Alamat Email Berhasil Disalin!',
      connectLinkedin: 'Hubungkan via LinkedIn',
      visitGithub: 'Jelajahi GitHub',
    },
    footer: {
      rights: 'Hak cipta dilindungi.',
      builtWith: 'Dibuat dengan Next.js, TypeScript & Tailwind CSS',
    }
  },
  en: {
    projects: {
      eyebrow: 'Selected Work',
      title: 'Projects that Connect People, Data & Systems',
      subtitle: 'A focused selection of web systems built with emphasis on real utility, performance, and seamless user experiences.',
      allFilter: 'All Projects',
      fullstackFilter: 'Full-Stack',
      frontendFilter: 'Frontend',
      viewDemo: 'Live Demo',
      viewCode: 'Source Code',
      quickView: 'Quick View',
      quickViewModalTitle: 'Project Quick View',
      closeModal: 'Close',
      highlightsTitle: 'Key Highlights & Capabilities',
      techTitle: 'Technologies Used',
    },
    about: {
      eyebrow: 'About Me',
      title: 'Bridging Business Requirements with Robust Engineering',
      description: 'My background in Information Systems equips me with a holistic perspective: looking beyond raw syntax to truly understand how software serves human and business workflows. Comfortable across the entire web stack—from crafting polished React/Next.js interfaces and structuring clean APIs to managing SQL databases and ensuring deployment readiness.',
      highlights: [
        { label: 'Education', value: 'B.S. in Information Systems (Universitas Ahmad Dahlan)' },
        { label: 'GPA / Recognition', value: '3.71 / 4.0 (Best Technical Execution 2025)' },
        { label: 'Core Focus', value: 'Full-Stack Web (React, Next.js, Node.js, PostgreSQL)' },
        { label: 'Current Status', value: 'Ready to contribute to engineering teams' },
      ]
    },
    skills: {
      eyebrow: 'Skills & Toolkit',
      title: 'Technologies & Technical Strengths',
      subtitle: 'Tools, libraries, and frameworks I leverage to deliver production-grade web solutions.'
    },
    experience: {
      eyebrow: 'Career Timeline',
      title: 'Work & Organization Experience',
      subtitle: 'Hands-on journey across software engineering, academic teaching assistance, and campus leadership.',
      workTab: 'Work Experience',
      orgTab: 'Campus Leadership',
    },
    education: {
      eyebrow: 'Academic & Recognition',
      title: 'Education & Honors',
      academicLabel: 'Formal Education',
      awardsLabel: 'Honors & Recognition',
    },
    contact: {
      eyebrow: 'Get In Touch',
      title: "Let's Build Something Meaningful Together.",
      subtitle: 'Looking for a dedicated developer, have an opening, or want to discuss a project? My inbox is always open.',
      sendEmail: 'Send an Email',
      copyEmail: 'Copy Email Address',
      copied: 'Email Copied to Clipboard!',
      connectLinkedin: 'Connect on LinkedIn',
      visitGithub: 'Explore GitHub Profile',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Engineered with Next.js, TypeScript & Tailwind CSS',
    }
  }
}
