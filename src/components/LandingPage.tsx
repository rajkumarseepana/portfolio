import React, { useEffect, useState } from 'react';
import { Github as GitHub, Linkedin, Code, Layout, Palette, Smartphone, Monitor, Sparkles, Instagram, ArrowUp } from 'lucide-react';

const LandingPage = () => {
    const [showScrollArrow, setShowScrollArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollArrow(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950 dark:to-indigo-950 z-0">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,rgba(99,102,241,0.1),transparent)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                </div>
            </div>

            {/* Animated shapes */}
            <div className="absolute top-20 right-[10%] w-72 h-72 bg-violet-400/20 dark:bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700" />
            <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />

            <div className="max-w-7xl mx-auto z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left column */}
                    <div className="lg:pr-8">
                        <div className="relative inline-block mb-10">
                            <span className="inline-block text-sm font-semibold text-violet-600 dark:text-violet-400 mb-2 tracking-wider animate-slide-up">
                                HELLO, I'M
                            </span>
                            <div className="absolute -left-8 -top-8 w-16 h-16 border-t-2 border-l-2 border-violet-500 dark:border-violet-400 opacity-20" />
                            <div className="absolute -right-8 -bottom-8 w-16 h-16 border-b-2 border-r-2 border-violet-500 dark:border-violet-400 opacity-20" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-800 dark:text-white leading-tight animate-slide-up">
                            Raj Kumar Seepana
                        </h1>

                        <div className="relative">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 animate-slide-up delay-200">
                                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 text-transparent bg-clip-text">
                                    Frontend Developer
                                </span>
                                {" & "}
                                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
                                    UI Designer
                                </span>
                            </h2>
                            <div className="absolute -right-4 top-0 w-8 h-8 bg-violet-500/20 dark:bg-violet-400/20 rounded-full blur-lg animate-ping" />
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg text-base leading-relaxed animate-slide-up delay-300">
                            I craft beautiful, responsive, and user-friendly web interfaces. Passionate about creating seamless user experiences with modern web technologies.
                        </p>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4 mb-8 animate-slide-up delay-300">
                            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-lg transform hover:scale-105 transition-all duration-300">
                                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400">
                                    <Layout size={20} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">5+</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Projects</p>
                            </div>

                            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-lg transform hover:scale-105 transition-all duration-300">
                                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                                    <Monitor size={20} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">100%</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Responsive</p>
                            </div>

                            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-lg transform hover:scale-105 transition-all duration-300">
                                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                                    <Sparkles size={20} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">99%</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Satisfaction</p>
                            </div>
                        </div>

                        <div className='flex flex-wrap items-start'>
                            {/* Action buttons */}
                            <div className="flex flex-wrap gap-4 mb-8 animate-slide-up delay-400 mr-auto">
                                <a
                                    href="#contact"
                                    className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 dark:from-violet-500 dark:to-indigo-500 dark:hover:from-violet-600 dark:hover:to-indigo-600 text-white rounded-lg transition-all duration-300 shadow-lg shadow-violet-500/20 font-medium transform hover:scale-105"
                                >
                                    Contact Me
                                </a>
                                <a
                                    href="#projects"
                                    className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-violet-500 dark:hover:border-violet-400 rounded-lg text-slate-700 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 font-medium backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 transform hover:scale-105"
                                >
                                    View Projects
                                </a>
                            </div>

                            {/* Social links */}
                            <div className="flex space-x-4 animate-slide-up delay-500 mt-3">
                                <a
                                    href="https://github.com/rajkumarseepana"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 hover:bg-violet-100 dark:hover:bg-violet-900 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                                    aria-label="GitHub"
                                >
                                    <GitHub size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/raj-kumar-seepana/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 hover:bg-violet-100 dark:hover:bg-violet-900 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="https://www.instagram.com/_end.eavour?igsh=MXJkbHhpOWh5ZTNwMQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 hover:bg-violet-100 dark:hover:bg-violet-900 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                                    aria-label="Twitter"
                                >
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Frontend Visual */}
                    <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 dark:from-violet-400/10 dark:to-indigo-400/10 rounded-3xl blur-2xl animate-pulse" />
                        <div className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
                            {/* Browser Frame */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="h-4 w-4 rounded-full bg-green-500/20" />
                                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">portfolio.dev</div>
                                </div>
                            </div>

                            {/* Code Preview */}
                            <div className="space-y-4 font-mono text-sm">
                                <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4">
                                    <div className="text-violet-600 dark:text-violet-400">
                                        <span className="text-slate-500 dark:text-slate-400">const</span> Endeavour <span className="text-slate-500 dark:text-slate-400">=</span> () <span className="text-slate-500 dark:text-slate-400">=</span> {'{'}
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-slate-500 dark:text-slate-400">return</span> (
                                        <div className="ml-4 text-indigo-600 dark:text-indigo-400">
                                            &lt;div className="life"&gt;
                                            <div className="ml-4 text-purple-600 dark:text-purple-400">
                                                &lt;Learn /&gt;
                                                <br />
                                                &lt;Practice /&gt;
                                                <br />
                                                &lt;Achieve /&gt;
                                            </div>
                                            &lt;/div&gt;
                                        </div>
                                        );
                                    </div>
                                    {'}'}
                                </div>

                                {/* Component Preview */}
                                <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Component Preview</span>
                                        <div className="flex space-x-2">
                                            <div className="w-8 h-4 rounded-full bg-violet-200 dark:bg-violet-800" />
                                            <div className="w-8 h-4 rounded-full bg-indigo-200 dark:bg-indigo-800" />
                                        </div>
                                    </div>
                                    <div className="mt-2 space-y-2">
                                        <div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-700 rounded" />
                                        <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-700 rounded" />
                                        <div className="h-2 w-2/3 bg-slate-200 dark:bg-slate-700 rounded" />
                                    </div>
                                </div>

                                {/* Status Bar */}
                                <div className="flex items-center justify-between text-xs mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                                    <span className="text-green-600 dark:text-green-400">Build Successful</span>
                                    <span className="text-slate-500 dark:text-slate-400">React • TypeScript • Tailwind</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showScrollArrow && (
                <a
                    href="#home"
                    className="fixed right-8 bottom-8 flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 animate-bounce z-50"
                    aria-label="Scroll to top"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <ArrowUp size={20} />
                    <span className="text-sm mt-2">Scroll up</span>
                </a>
            )}
        </section>
    );
}

export default LandingPage
