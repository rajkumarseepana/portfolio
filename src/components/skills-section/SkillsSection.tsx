import { Code, Layers, Palette, Gauge, LayoutGrid, Play, Lightbulb } from 'lucide-react';
import SkillBar from './SkillBar';
import { frontendSkills, toolsSkills } from '../data/constantsData';

const SkillsSection = () => {
    const skillCards = [
        {
            title: 'Frontend Development',
            description: 'Building responsive and interactive user interfaces with modern frameworks and libraries.',
            icon: <Code size={36} className="text-blue-600 dark:text-blue-400" />,
        },
        {
            title: 'UI/UX Design',
            description: 'Creating intuitive and aesthetically pleasing user experiences with attention to detail.',
            icon: <Palette size={36} className="text-purple-600 dark:text-purple-400" />,
        },
        {
            title: 'Performance Optimization',
            description: 'Ensuring fast load times and smooth user experiences through code optimization.',
            icon: <Gauge size={36} className="text-teal-600 dark:text-teal-400" />,
        },
        {
            title: 'Responsive Design',
            description: 'Developing layouts that work flawlessly across all devices and screen sizes.',
            icon: <LayoutGrid size={36} className="text-orange-600 dark:text-orange-400" />,
        },
        {
            title: 'Animation & Interaction',
            description: 'Adding life to interfaces with subtle animations and interactive elements.',
            icon: <Play size={36} className="text-green-600 dark:text-green-400" />,
        },
        {
            title: 'Problem Solving',
            description: 'Finding elegant solutions to complex frontend challenges.',
            icon: <Lightbulb size={36} className="text-yellow-600 dark:text-yellow-400" />,
        },
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My <span className="text-blue-600 dark:text-blue-400">Skills</span> & Expertise
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        I've honed my skills in various frontend technologies and design tools over the years,
                        allowing me to create seamless and engaging user experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skillCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="mb-4">{card.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Code size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
                            Frontend Technologies
                        </h3>
                        <div className="space-y-6">
                            {frontendSkills.map((skill) => (
                                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Layers size={24} className="mr-2 text-purple-600 dark:text-purple-400" />
                            Tools & Methods
                        </h3>
                        <div className="space-y-6">
                            {toolsSkills.map((skill) => (
                                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection
