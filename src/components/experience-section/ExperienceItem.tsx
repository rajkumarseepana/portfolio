import { useInView } from 'hooks/useInView';
import type { ExperienceItemProps } from 'components/data/Types';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceItem = ({ item, index }: ExperienceItemProps) => {
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`transition-all duration-500 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="absolute -left-11 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.title}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                    {item.company}
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceItem
