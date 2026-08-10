export type Project = {
  slug: string
  name: string
  eyebrow: string
  description: string
  category: string
  technologies: string[]
  accent: 'cyan' | 'violet'
  overview: string
  problem: string
  objective: string
  solution: string
  features: string[]
  process: string[]
  architecture: string
  challenges: string
  outcome: string
  github?: string
  demo?: string
}

export const profile = {
  name: 'Kumara Fawwas Abhista',
  role: 'Information Systems Graduate & Full-Stack Web Developer',
  university: 'Universitas Ahmad Dahlan',
  email: 'kumarafawwas@gmail.com',
  github: 'https://github.com/kumarafws',
  linkedin: 'https://www.linkedin.com/in/kumara-fawwas',
  cv: '/Kumara-Fawwas-Abhista-CV.pdf',
  photo: '\Pas Foto - Latar Merah.png',
  photoAlt: 'Foto formal Kumara Fawwas',
}

export const projects: Project[] = [
  {
    slug: 'ppdb-smk-panca-bhakti-rakit', 
    name: 'PPDB SMK Panca Bhakti Rakit', 
    eyebrow: 'Admissions information system', 
    category: 'Full-stack web', 
    accent: 'cyan',
    description: 'A web-based student admission information system designed to make registration information and workflows easier to manage.',
    technologies: ['Next.js', 'TypeScript', 'React', 'Node.js', 'Express.js', 'PostgreSQL'],
    overview: 'A project-focused admissions platform for a vocational school. Detailed implementation notes and deployment links can be added as the project is documented further.',
    problem: 'Admissions information and registration workflows can become difficult to follow when they are spread across manual processes.', 
    objective: 'Create a clearer digital experience for sharing admissions information and supporting the registration process.', 
    solution: 'A structured web application built around a focused admissions journey, with a modern frontend and a backend/API layer.',
    features: ['Admissions information', 'Registration workflow', 'Structured data handling', 'API-oriented development'], 
    process: ['Understand the admissions workflow', 'Analyze requirements', 'Design the application flow', 'Develop and test the system', 'Prepare deployment and maintenance'], 
    architecture: 'Frontend and backend architecture details are available as a placeholder until the project documentation is finalized.', 
    challenges: 'Specific project challenges have not been documented yet.', 
    outcome: 'A practical information system project demonstrating full-stack web development fundamentals.',
    github: 'https://github.com/kumarafws/PPDB-SMK',
  },
  {
    slug: 'ppdb-smp-mbs', 
    name: 'PPDB SMP MBS', 
    eyebrow: 'Admissions information system', 
    category: 'Frontend web', 
    accent: 'cyan',
    description: 'A web-based student admission information system designed to make registration information and workflows easier to manage.',
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    overview: 'A web-based student admission platform where I contributed as a Frontend Developer. My role focused on designing and implementing the user interface, developing responsive pages, and integrating frontend components with the available backend APIs.',
    problem: 'Prospective students need a clear and accessible interface to understand admission information and complete the registration process without confusion.', 
    objective: 'Create a responsive and user-friendly frontend that makes admission information easier to understand and provides a clear flow for users throughout the registration process.',
    solution: 'Developed the frontend interface using React.js with a focus on responsive design, reusable UI components, clear navigation, and integration with backend APIs to display and submit admission-related data.',
    features: [ 'Admissions information pages','Student registration interface','Responsive user interface','Form input and validation', 'API integration', 'User-friendly navigation'], 
    process: ['Understand the admissions workflow', 'Analyze frontend requirements', 'Design the user interface and page flow', 'Develop reusable React components', 'Implement responsive layouts', 'Integrate frontend with backend APIs', 'Test the interface and user flows'], 
    architecture: 'The project uses a frontend-backend architecture. My contribution focused on the React.js frontend, including user interface development, responsive layouts, component implementation, and integration with the backend APIs.',
    challenges:  'One of the main challenges was creating a consistent and responsive interface while ensuring that frontend components could properly communicate with the available backend APIs.',
    outcome: 'A responsive admissions website that provides a clearer user experience for prospective students and demonstrates practical experience in React.js frontend development and API integration.',
    github: 'https://github.com/kumarafws/CP-PSB-FE',
  },
  {
    slug: 'manajmene-sosmed', 
    name: 'Manajemen Sosial Media', 
    eyebrow: 'Social media management system', 
    category: 'Frontend web', 
    accent: 'cyan',
    description: 'A web-based social media management system designed to make content scheduling and analytics easier to manage.',
    technologies: ['TypeScript', 'Next.js'],
    overview: '-',
    problem: '-',
    objective: '-',
    solution: '-',
    features: [ '-',], 
    process: ['-'], 
    architecture: '-',
    challenges:  '-',
    outcome: '-',
    github: 'https://github.com/kumarafws/sosial-media-content-frontend',
  },
]

export const skillGroups = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'PHP'] },
  { label: 'Frontend', items: ['Next.js', 'React', 'Vue.js', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'Laravel'] },
  { label: 'Data', items: ['SQL', 'MySQL', 'PostgreSQL'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Postman',] },
  { label: 'Practice', items: ['REST API', 'Software Testing', 'Architecture Documentation', 'Business Process (UML)'] },
]

export type Experience = {
  role: string
  organization: string
  period: string
  type: 'work' | 'organization'
  description?: string
}

export type Award = {
  title: string
  issuer: string
  year: string
  description?: string
}

export type Training = {
  title: string
  provider: string
  year: string
  description?: string
}

export const experiences: Experience[] = [
  {
    role: 'Full-Stack Developer',
    organization: 'PPDB SMK Panca Bhakti Rakit Development Team',
    period: '2025 — 2026',
    type: 'work',
    description: 'Developed a web-based system for student admissions.',
  },
  {
    role: 'Teaching Assistant',
    organization: 'Universitas Ahmad Dahlan',
    period: '2025 — 2026',
    type: 'work',
    description: 'Assisted lectures in Statistics & Probability and IT Infrastructure laboratory courses.',
  },
  {
    role: 'Frontend Developer',
    organization: 'PPDB SMP MBS Development Team',
    period: '2025',
    type: 'work',
    description: 'Developed a responsive web interface using React.js and integrated it with backend APIs for the student admissions system.',
  },
  {
    role: 'Literature & Development Division',
    organization: 'Information Systems Student Association (HMSI)',
    period: '2024 — 2025',
    type: 'organization',
    description: 'Participated in academic development activities for Information Systems students, including study sessions and competitions.',
  },
]

export const awards: Award[] = [
  {
    title: 'Best Technical Execution',
    issuer: 'Academic Program',
    year: '2025',
    description: 'Awarded for developing an outstanding execution project during the Capstone Program in FIPEX 202',
  },
]

export const trainings: Training[] = [
]

export const approach = ['Understand the problem', 'Analyze requirements', 'Design the solution', 'Develop and test', 'Deploy and improve']
export const getProject = (slug: string) => projects.find((project) => project.slug === slug)
export const isPlaceholderLink = (link?: string) => !link || link === 'https://github.com/kumarafws' || link === 'https://www.linkedin.com/in/kumara-fawwas' || link.includes('kumarafawwas@gmail.com')
export const profileSummary = 'Information Systems graduate who builds useful, maintainable web applications across the frontend, backend, and delivery process.'
export const profileLong = 'My background in Information Systems helps me connect user needs, business processes, and technical implementation. I enjoy working across the stack from shaping an interface in React or Next.js to designing APIs, working with SQL, testing workflows, and preparing software for deployment.'
export const contactLinks = [{ label: 'Email', href: `mailto:${profile.email}`, value: profile.email }, { label: 'GitHub', href: profile.github, value: 'github.com' }, { label: 'LinkedIn', href: profile.linkedin, value: 'linkedin.com' }]
export const navItems = [{ label: 'Home', href: '#home' }, { label: 'Projects', href: '#projects' }, { label: 'About', href: '#about' }, { label: 'Skills', href: '#skills' }, { label: 'Education', href: '#education' }, { label: 'Experience', href: '#experience' }, { label: 'Contact', href: '#contact' }]
export const education = [{ institution: 'Universitas Ahmad Dahlan', program: 'Information Systems', detail: 'Bachelor / Graduate', gpa: '3.71 / 4.0' }]
export const metadata = { title: 'Kumara Fawwas Abhista — Information Systems Graduate & Full-Stack Developer', description: 'Portfolio of Kumara Fawwas Abhista, an Information Systems graduate building modern full-stack applications.' }
