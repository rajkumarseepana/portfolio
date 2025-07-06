import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../contexts/ThemeToggle';
import type { ThemeToggleProps } from './data/Types';
import { navLinks } from './data/constantsData';

const Header: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const headerClasses = `fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white dark:bg-gray-900 shadow-md py-3'
        : 'bg-transparent py-6'
        }`;

    return (
        <header className={headerClasses}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a
                    href="#hero"
                    className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors"
                >
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex items-center md:hidden space-x-4">
                    <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                    <button
                        onClick={handleMenuToggle}
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header
