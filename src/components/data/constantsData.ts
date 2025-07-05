import type { Project } from "./Types";

export const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export const frontendSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 92 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 88 },
];

export const toolsSkills = [
    { name: 'Git/GitHub', level: 90 },
    { name: 'Webpack/Vite', level: 82 },
    { name: 'Jest/Testing Library', level: 78 },
    { name: 'Figma/Design Tools', level: 75 },
    { name: 'CI/CD', level: 70 },
];

export const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio Template',
        description: 'A customizable portfolio template for developers to showcase their work and skills.',
        image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
        tags: ['Bootstrap', 'React', 'JavaScript'],
        category: 'ui',
        demoUrl: 'https://rajkumarseepana.vercel.app/',
        codeUrl: 'https://github.com/rajkumarseepana/reactportfolio',
    },
    {
        id: 2,
        title: 'Weather Dashboard',
        description: 'A weather application with location-based, that fetches and displays real-time weather data based on user input. 🌤️🌍',
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
        tags: ['JavaScript', 'API', 'CSS'],
        category: 'frontend',
        demoUrl: 'https://rajkumarseepana.github.io/WeatherDetector/',
        codeUrl: 'https://github.com/rajkumarseepana/WeatherDetector',
    },
    {
        id: 4,
        title: 'Food Delivery App',
        description: 'A 🍔 streamlined food delivery app with intuitive UI/UX and seamless backend integration. 🚀 Designed for a smooth ordering experience and optimal performance.',
        image: './Potato.png',
        tags: ['React', 'Redux', 'TailwindCSS'],
        category: 'frontend',
        demoUrl: 'https://foodguru.vercel.app/',
        codeUrl: 'https://github.com/iammahesh123/Food-Delivery-App',
    },
    {
        id: 3,
        title: 'Blue Bus App',
        description: 'A Productivity app designed to manage APIs efficiently with dynamic result handling. Focused on delivering accurate UI features for a seamless user experience.',
        image: './blue-bus.png',
        tags: ['TypeScript', 'TailwindCSS', 'React', 'Restfull Apis'],
        category: 'fullstack',
        demoUrl: 'https://booking-app-frontend-blue.vercel.app/',
        codeUrl: 'https://github.com/iammahesh123/booking-app-frontend',
    },
];

export const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'UI Design', value: 'ui' },
];

export const experienceItems = [
    {
        title: 'Frontend Developer Trainee',
        company: 'Auxentios Technology Solutions Private Limited',
        period: '1st Feb 2025 - Present',
        description: 'Developed responsive web applications and e-commerce platforms. Collaborated with designers and backend teams to implement user-centered interfaces.',
        technologies: ['JavaScript', 'React.js', 'SASS', 'RESTful APIs', 'TypeScript', 'Tailwind'],
    },
    {
        title: 'GO AI Associate',
        company: 'Amazon',
        period: '25th Oct 2023 - 16th Mar 2024',
        description: 'Great introduction to the corporate world, where I actively collaborated with dynamic team. Helped in training and improving AI/ML models by providing quality inputs and contribute meaningfully in a fast-paced environment.',
        technologies: ['Attention to detail', 'Time management', 'Teamwork'],
    },
];