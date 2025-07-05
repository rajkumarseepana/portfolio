export interface ThemeToggleProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export interface SkillBarProps {
    name: string;
    level: number;
}

export interface UseInViewOptions {
    threshold?: number;
    rootMargin?: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    demoUrl: string;
    codeUrl: string;
}

export interface ProjectCardProps {
    project: Project;
}

export interface ExperienceItemProps {
    item: {
        title: string;
        company: string;
        period: string;
        description: string;
        technologies: string[];
    };
    index: number;
}