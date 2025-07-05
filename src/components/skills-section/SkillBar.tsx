import React, { useEffect, useState } from 'react';
import type { SkillBarProps } from './data/Types';
import { useInView } from 'hooks/useInView';

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
    const [width, setWidth] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            setWidth(level);
        }
    }, [inView, level]);

    return (
        <div ref={ref}>
            <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;