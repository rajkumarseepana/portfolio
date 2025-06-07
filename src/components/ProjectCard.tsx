import React, { useState } from 'react'
import { useInView } from 'hooks/useInView';
import type { ProjectCardProps } from './data/Types';
import { ExternalLink, Eye, Github } from 'lucide-react';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            style={{ transitionDelay: '150ms' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden h-60">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <div className="p-4 w-full flex justify-between items-center">
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                            aria-label={`View ${project.title} demo`}
                        >
                            <Eye size={20} />
                        </a>
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                            aria-label={`View ${project.title} code`}
                        >
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center transition-colors font-medium"
                    >
                        Live Demo
                        <ExternalLink size={16} className="ml-1" />
                    </a>
                    <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center transition-colors font-medium"
                    >
                        View Code
                        <Github size={16} className="ml-1" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard
