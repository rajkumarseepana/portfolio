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