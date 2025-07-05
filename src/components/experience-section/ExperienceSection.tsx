import { Award, ExternalLink, GraduationCap } from 'lucide-react';
import ExperienceItem from './ExperienceItem';
import { experienceItems } from 'components/data/constantsData';
import { Dialog, DialogContent, DialogTrigger } from 'components/ui/Dialog';

const ExperienceSection = () => {

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        My journey as a frontend developer, showcasing my professional growth and the
                        companies I've had the pleasure to work with.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-8 ml-4 space-y-12">
                        {experienceItems.map((item, index) => (
                            <ExperienceItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md max-w-md">
                        <div className="flex items-center mb-4">
                            <GraduationCap size={24} className="text-blue-600 dark:text-blue-400 mr-2" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Graduation in Computer Science & Engineering</h4>
                                <p className="text-gray-600 dark:text-gray-300">Aditya Institute of Technology And Management</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2020 - 2023</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Diploma in Computer Engineering</h4>
                                <p className="text-gray-600 dark:text-gray-300">Govt. Polytechnic, Srikakulam</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2017 - 2020</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md max-w-md">
                        <div className="flex items-center mb-4">
                            <Award size={24} className="text-purple-600 dark:text-purple-400 mr-2" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Meta Front-End Developer</h4>
                                <p className="text-gray-600 dark:text-gray-300">React Training</p>
                                <div className='flex justify-between'>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Jan 2025</p>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button
                                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center transition-colors text-sm"
                                            >
                                                View
                                                <ExternalLink size={16} className="ml-1" />
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className='max-w-fit'>
                                            <img
                                                src="./fd.png"
                                                alt="Certificate"
                                                className='w-[900px] h-auto rounded'
                                            />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">TCS iON Career Edge</h4>
                                <p className="text-gray-600 dark:text-gray-300">Young Profissional Course</p>
                                <div className='flex justify-between'>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Aug 2023</p>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button
                                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center transition-colors text-sm"
                                            >
                                                View
                                                <ExternalLink size={16} className="ml-1" />
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-fit">
                                            <img
                                                src="./tcs.png"
                                                alt="Certificate"
                                                className="w-[900px] h-auto rounded"
                                            />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection
