import React from 'react'
import { Github, Linkedin, Heart, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { navLinks } from 'components/data/constantsData';

const contactInfo = [
    { icon: <Mail size={16} />, text: 'rajkumarseepana895@gmail.com' },
    { icon: <Phone size={16} />, text: '+91 97054 22531' },
    { icon: <MapPin size={16} />, text: 'Andhra Pradesh, India' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-900 text-white pt-8 pb-4 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-7 ml-[120px]">
                    {/* Brand Section */}
                    <div>
                        <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text inline-block mb-4">
                            Raj Kumar's <span>Portfolio</span>
                        </a>
                        <p className="text-slate-400 mb-6">
                            Crafting beautiful web experiences with modern technologies and creative design solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/rajkumarseepana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/raj-kumar-seepana/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/_end.eavour?igsh=MXJkbHhpOWh5ZTNwMQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                                aria-label="Twitter"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors inline-block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            {contactInfo.map((info, index) => (
                                <li key={index} className="flex items-center text-slate-400">
                                    <span className="mr-2">{info.icon}</span>
                                    {info.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    {/* <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-slate-400 mb-4">
                            Subscribe to my newsletter for the latest updates and insights.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-slate-800/50 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-500"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-r-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div> */}
                </div>

                {/* Bottom Bar */}
                <div className="pt-4 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-400 text-sm mb-4 md:mb-0">
                        © {currentYear} Raj Kumar's Portfolio. All rights reserved.
                    </p>
                    <div className="flex items-center text-slate-400 text-sm">
                        <span>Made with</span>
                        <Heart size={16} className="mx-1 text-red-500 animate-pulse" />
                        <span>using React & Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
