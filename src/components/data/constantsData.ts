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
        tags: ['HTML', 'SASS', 'JavaScript'],
        category: 'ui',
        demoUrl: 'https://rajkumarseepana.vercel.app/',
        codeUrl: 'https://github.com/rajkumarseepana/reactportfolio',
    },
    {
        id: 2,
        title: 'Weather Dashboard',
        description: 'A weather application with location-based forecasts, interactive charts, and weather alerts.',
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
        tags: ['JavaScript', 'API', 'CSS'],
        category: 'frontend',
        demoUrl: 'https://rajkumarseepana.github.io/WeatherDetector/',
        codeUrl: 'https://github.com/rajkumarseepana/WeatherDetector',
    },
    {
        id: 4,
        title: 'E-Commerce Website',
        description: 'A modern e-commerce platform with cart functionality, product filtering, and responsive design.',
        image: 'https://images.pexels.com/photos/5076521/pexels-photo-5076521.jpeg',
        tags: ['React', 'Redux', 'TailwindCSS'],
        category: 'frontend',
        demoUrl: 'https://example.com',
        codeUrl: 'https://github.com',
    },
    {
        id: 3,
        title: 'Task Management App',
        description: 'A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.',
        image: 'https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg',
        tags: ['TypeScript', 'React', 'Firebase'],
        category: 'fullstack',
        demoUrl: 'https://example.com',
        codeUrl: 'https://github.com',
    },
    {
        id: 5,
        title: 'Blog Platform',
        description: 'A full-featured blog platform with markdown support, comments, and user authentication.',
        image: 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg',
        tags: ['React', 'Node.js', 'MongoDB'],
        category: 'fullstack',
        demoUrl: 'https://example.com',
        codeUrl: 'https://github.com',
    },
    {
        id: 6,
        title: 'Music Player UI',
        description: 'A sleek music player interface with album art display, playlist management, and audio visualization.',
        image: 'https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg',
        tags: ['React', 'CSS Animation', 'API'],
        category: 'ui',
        demoUrl: 'https://example.com',
        codeUrl: 'https://github.com',
    },
];

export const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'UI Design', value: 'ui' },
];