import React, { useState } from 'react';
import { useInView } from 'hooks/useInView';
import ProjectCard from './ProjectCard';
import { filters, projects } from 'components/data/constantsData';
import { ExternalLink, Code, Eye } from 'lucide-react';

const ProjectsSection = () => {
    const { ref, inView } = useInView({ threshold: 0.1 });
    // const [activeFilter, setActiveFilter] = useState('all');

    // const filteredProjects = activeFilter === 'all'
    //     ? projects
    //     : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My <span className="text-blue-600 dark:text-blue-400">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Here's a selection of my recent work that showcases my frontend development skills
                        and attention to detail.
                    </p>
                </div>

                {/* <div className="flex justify-center flex-wrap gap-4 mb-12" ref={ref}>
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${activeFilter === filter.value
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div> */}
                <div ref={ref}> {/* remove if filter needed */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <a
                        href="https://github.com/rajkumarseepana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-colors"
                    >
                        <Code size={20} className="mr-2" />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection
