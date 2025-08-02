import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, Github, Linkedin, Instagram } from 'lucide-react';

const contactInfo = [
    {
        icon: <Mail size={24} className="text-blue-500" />,
        title: 'Email',
        content: 'rajkumarseepana895@gmail.com',
        link: 'mailto:rajkumarseepana895@gmail.com',
    },
    {
        icon: <Phone size={24} className="text-green-500" />,
        title: 'Phone',
        content: '+91 97054-22531',
        link: 'tel:+91 97054 22531',
    },
    {
        icon: <MapPin size={24} className="text-red-500" />,
        title: 'Location',
        content: 'Andhra Pradesh, India',
        link: 'https://maps.google.com',
    },
];

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="relative py-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
            </div>

            <div className="container relative mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4 mx-auto">
                            <Mail size={32} className="text-blue-500 dark:text-blue-400" />
                        </div>
                        <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
                            Get in <span className="text-blue-500">Touch</span>
                        </h2>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                        Let's create something amazing together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm text-slate-800 dark:text-white placeholder-slate-400"
                                        placeholder="Raj Kumar Seepana"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm text-slate-800 dark:text-white placeholder-slate-400"
                                        placeholder="seepana@gmail.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm text-slate-800 dark:text-white placeholder-slate-400"
                                    placeholder="Project Discussion"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm text-slate-800 dark:text-white placeholder-slate-400 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-medium flex items-center justify-center transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'transform hover:scale-[1.02]'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending Message...
                                    </span>
                                ) : (
                                    <span className="flex items-center">
                                        <Send size={20} className="mr-2" />
                                        Send Message
                                    </span>
                                )}
                            </button>

                            {submitSuccess && (
                                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {submitError && (
                                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    Failed to send message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]"
                            >
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                                            {info.icon}
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">
                                            {info.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors flex items-center">
                                            {info.content}
                                            <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}

                        {/* Social Links Card */}
                        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                                Connect with Me
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                <a
                                    href="https://github.com/rajkumarseepana"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center p-4 rounded-2xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors group"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/raj-kumar-seepana/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center p-4 rounded-2xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors group"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="https://www.instagram.com/_end.eavour?igsh=MXJkbHhpOWh5ZTNwMQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center p-4 rounded-2xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors group"
                                >
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection
