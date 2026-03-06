'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const timeline = [
    {
        year: '2024',
        type: 'bootcamp',
        icon: Award,
        title: 'Bootcamp / Magang',
        organization: 'Maxy Academy',
        duration: '6 Bulan • 21 SKS',
        description: 'Menyelesaikan program intensif fullstack web development selama 6 bulan di Maxy Academy. Konversi 21 SKS ke perguruan tinggi. Mempelajari React, Node.js, database management, dan deployment modern.',
        skills: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
        color: '#e63946',
        badge: '🏆 Alumni',
    },
    {
        year: '2024–Now',
        type: 'education',
        icon: GraduationCap,
        title: 'Mahasiswa Aktif',
        organization: 'Politeknik Kampar',
        duration: 'Semester 4 • Aktif',
        description: 'Menempuh pendidikan di Politeknik Kampar jurusan Teknologi Informasi. Aktif dalam berbagai proyek kampus dan pengembangan diri di bidang teknologi.',
        skills: ['Web Development', 'Database', 'Networking', 'Pemrograman'],
        color: '#ff6b6b',
        badge: '🎓 Aktif',
    },
    {
        year: '2023–Now',
        type: 'freelance',
        icon: Briefcase,
        title: 'Fullstack Developer',
        organization: 'Freelance & Projects',
        duration: 'Self-Employed',
        description: 'Mengembangkan berbagai aplikasi web profesional secara mandiri, mulai dari platform Web3, FinTech, HealthTech, hingga media platform dengan teknologi terkini.',
        skills: ['Next.js', 'TypeScript', 'UI/UX', 'API Integration'],
        color: '#c1121f',
        badge: '💻 Active',
    },
];

export default function Experience() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-96 h-96 opacity-10 -translate-y-1/2"
                style={{ background: 'radial-gradient(circle, #e63946 0%, transparent 70%)', transform: 'translate(30%, -50%)' }} />

            <div className="max-w-5xl mx-auto px-6" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3 block">Journey</span>
                    <h2 className="section-title gradient-text">PENGALAMAN</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-600/60 via-red-600/20 to-transparent transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {timeline.map((item, i) => {
                            const Icon = item.icon;
                            const isLeft = i % 2 === 0;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: i * 0.2, duration: 0.6 }}
                                    className={`relative flex items-start md:items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                        } pl-16 md:pl-0`}
                                >
                                    {/* Content box */}
                                    <div className="flex-1">
                                        <motion.div
                                            className="glass card rounded-2xl p-6 group"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {/* Top row */}
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <span className="text-xs text-red-400 font-mono font-bold uppercase tracking-widest">{item.year}</span>
                                                    <h3 className="text-lg font-bold mt-1 group-hover:text-red-400 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.95rem' }}>
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-300 font-semibold text-sm">{item.organization}</p>
                                                </div>
                                                <span className="text-xs glass-red text-red-300 px-2 py-1 rounded-full border border-red-500/20 whitespace-nowrap">
                                                    {item.badge}
                                                </span>
                                            </div>

                                            {/* Duration */}
                                            <div className="flex items-center gap-2 mb-3">
                                                <Calendar size={12} className="text-gray-500" />
                                                <span className="text-xs text-gray-500">{item.duration}</span>
                                            </div>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

                                            {/* Skills */}
                                            <div className="flex flex-wrap gap-2">
                                                {item.skills.map((skill) => (
                                                    <span key={skill} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400 border border-white/5">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Center icon */}
                                    <motion.div
                                        className="absolute left-0 md:relative md:left-auto flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center z-10"
                                        style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}99)` }}
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        animate={{ boxShadow: [`0 0 15px ${item.color}50`, `0 0 30px ${item.color}80`, `0 0 15px ${item.color}50`] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        <Icon size={20} className="text-white" />
                                    </motion.div>

                                    {/* Spacer for opposite side */}
                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
