'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const skillCategories = [
    {
        id: 'uiux',
        title: 'UI/UX Design',
        icon: '🎨',
        color: '#ff6b6b',
        description: 'Merancang pengalaman visual yang intuitif dan memikat',
        skills: [
            { name: 'Figma', level: 85, icon: '🖌️' },
            { name: 'Design System', level: 80, icon: '📐' },
            { name: 'Prototyping', level: 82, icon: '⚡' },
            { name: 'User Research', level: 75, icon: '🔍' },
            { name: 'Responsive Design', level: 90, icon: '📱' },
            { name: 'Animation Design', level: 78, icon: '✨' },
        ],
    },
    {
        id: 'fullstack',
        title: 'Fullstack Dev',
        icon: '💻',
        color: '#e63946',
        description: 'Membangun aplikasi web end-to-end yang powerful',
        skills: [
            { name: 'Next.js / React', level: 88, icon: '⚛️' },
            { name: 'TypeScript', level: 82, icon: '📘' },
            { name: 'Node.js', level: 80, icon: '🟢' },
            { name: 'PostgreSQL', level: 75, icon: '🐘' },
            { name: 'REST API', level: 85, icon: '🔌' },
            { name: 'Docker', level: 65, icon: '🐳' },
        ],
    },
    {
        id: 'ai',
        title: 'AI Engineer',
        icon: '🤖',
        color: '#c1121f',
        description: 'Mengintegrasikan kecerdasan buatan ke dalam aplikasi',
        skills: [
            { name: 'Python', level: 82, icon: '🐍' },
            { name: 'Machine Learning', level: 72, icon: '🧠' },
            { name: 'LLM Integration', level: 80, icon: '🤖' },
            { name: 'Data Analysis', level: 75, icon: '📊' },
            { name: 'TensorFlow', level: 65, icon: '🔥' },
            { name: 'Prompt Engineering', level: 88, icon: '💬' },
        ],
    },
];

function SkillBar({ name, level, icon, delay }: { name: string; level: number; icon: string; delay: number }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay, duration: 0.5 }}
            className="group"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{icon}</span>
                    <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{name}</span>
                </div>
                <span className="text-xs text-red-400 font-mono font-bold">{level}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full skill-fill"
                    initial={{ width: '0%' }}
                    animate={inView ? { width: `${level}%` } : { width: '0%' }}
                    transition={{ delay: delay + 0.2, duration: 1, ease: 'easeOut' }}
                />
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const [activeTab, setActiveTab] = useState('fullstack');
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const active = skillCategories.find((c) => c.id === activeTab)!;

    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            {/* BG decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 rounded-full"
                style={{ background: 'radial-gradient(circle, #e63946 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3 block">My Arsenal</span>
                    <h2 className="section-title gradient-text">SKILLS & EXPERTISE</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded" />
                </motion.div>

                {/* Category tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-wrap gap-3 justify-center mb-12"
                >
                    {skillCategories.map((cat) => (
                        <motion.button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === cat.id
                                    ? 'bg-gradient-to-r from-red-600 to-red-800 text-white glow-red'
                                    : 'glass text-gray-400 hover:text-white border border-white/5 hover:border-red-500/30'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-xl">{cat.icon}</span>
                            {cat.title}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills display */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-12 items-start"
                >
                    {/* Left: description + hexagons */}
                    <div>
                        <div className="glass rounded-2xl p-8 glow-border mb-8">
                            <div className="text-5xl mb-4">{active.icon}</div>
                            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>{active.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{active.description}</p>

                            {/* Circular progress decorations */}
                            <div className="grid grid-cols-3 gap-4 mt-8">
                                {active.skills.slice(0, 3).map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 + 0.3 }}
                                        className="flex flex-col items-center gap-2"
                                    >
                                        <div className="relative w-16 h-16">
                                            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 56 56">
                                                <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                                                <motion.circle
                                                    cx="28" cy="28" r="22" fill="none"
                                                    stroke="#e63946"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeDasharray={`${2 * Math.PI * 22}`}
                                                    initial={{ strokeDashoffset: 2 * Math.PI * 22 }}
                                                    animate={{ strokeDashoffset: 2 * Math.PI * 22 * (1 - skill.level / 100) }}
                                                    transition={{ delay: i * 0.1 + 0.5, duration: 1, ease: 'easeOut' }}
                                                />
                                            </svg>
                                            <span className="absolute inset-0 flex items-center justify-center text-lg">{skill.icon}</span>
                                        </div>
                                        <span className="text-xs text-gray-400 text-center">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: skill bars */}
                    <div className="glass rounded-2xl p-8 space-y-5">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">Proficiency Level</h4>
                        {active.skills.map((skill, i) => (
                            <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
                        ))}
                    </div>
                </motion.div>

                {/* Bottom floating stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
                >
                    {[
                        { icon: '💻', label: 'Fullstack Projects', value: '9+' },
                        { icon: '🎨', label: 'UI Designs', value: '15+' },
                        { icon: '🤖', label: 'AI Integrations', value: '5+' },
                        { icon: '⭐', label: 'Satisfaction Rate', value: '98%' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="glass card rounded-xl p-5 text-center group"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-black gradient-text-red" style={{ fontFamily: 'Orbitron, sans-serif' }}>{stat.value}</div>
                            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
