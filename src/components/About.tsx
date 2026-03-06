'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

import { Variants } from 'framer-motion';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
};

export default function About() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #e63946 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                {/* Section Header */}
                <motion.div
                    custom={0}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-16"
                >
                    <span className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3 block">About Me</span>
                    <h2 className="section-title gradient-text">WHO AM I</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Visual ID Card */}
                    <motion.div
                        custom={1}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="relative flex justify-center py-6"
                    >
                        {/* 3D ID Card wrapper */}
                        <div className="relative w-72">
                            {/* Lanyard/Hanger */}
                            <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-12 h-16 border-x-[3px] border-t-[3px] border-[#333] rounded-t-2xl z-0" />
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-5 bg-gradient-to-br from-red-600 to-red-800 rounded-sm z-20 shadow-lg border border-red-500/30" />
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/40 rounded-full z-30" />

                            {/* ID Card */}
                            <motion.div
                                className="relative z-10 w-full bg-[#0a0a0a] rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(230,57,70,0.15)] overflow-hidden glass hover:border-red-500/30 transition-colors duration-500"
                                animate={{ rotate: [-2, 2, -2], y: [-5, 5, -5] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                style={{ transformOrigin: 'top center' }}
                            >
                                {/* Top Red Bar */}
                                <div className="h-3 bg-gradient-to-r from-red-600 to-red-800 w-full" />

                                <div className="p-5">
                                    {/* Company/Role Header */}
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="text-[10px] text-gray-400 tracking-widest font-bold uppercase">Staff ID</div>
                                        <div className="w-6 h-6 rounded-md bg-red-600/20 flex items-center justify-center border border-red-500/30">
                                            <span className="text-red-400 font-black text-xs" style={{ fontFamily: 'Orbitron, sans-serif' }}>R</span>
                                        </div>
                                    </div>

                                    {/* Photo */}
                                    <div className="w-full aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-[#111] mb-5 relative shadow-inner group flex items-center justify-center">
                                        <img src="/images/profile.jpg" alt="Riyan Perdhana Putra" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none" />
                                    </div>

                                    {/* ID Info */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-white mb-0.5 tracking-wide" style={{ fontFamily: 'Orbitron, sans-serif' }}>Riyan P. P.</h3>
                                        <p className="text-red-400 text-[11px] font-semibold uppercase tracking-widest mb-4">Dev / AI Engineer</p>

                                        {/* Info grid */}
                                        <div className="grid grid-cols-2 gap-2 text-left mb-4 bg-white/5 rounded-lg p-2.5 border border-white/5">
                                            <div className="flex flex-col">
                                                <span className="text-[9px] text-gray-500 uppercase font-semibold mb-1">Status</span>
                                                <div className="flex items-center gap-1.5"><Calendar size={10} className="text-red-400" /> <span className="text-[10px] text-gray-300">Sem 4</span></div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] text-gray-500 uppercase font-semibold mb-1">Education</span>
                                                <div className="flex items-center gap-1.5"><GraduationCap size={10} className="text-red-400" /> <span className="text-[10px] text-gray-300">Polkam</span></div>
                                            </div>
                                        </div>

                                        {/* Barcode / ID number */}
                                        <div className="w-full h-8 bg-white/5 rounded flex flex-col items-center justify-center mb-2 px-2 overflow-hidden border border-white/5">
                                            <div className="w-full h-full opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px, transparent 4px, transparent 5px, white 5px, white 8px, transparent 8px, transparent 11px, white 11px, white 12px)', filter: 'blur(0.2px)' }} />
                                        </div>
                                        <p className="text-[10px] text-gray-500 font-mono tracking-widest">ID: 2024-0070-A037</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Text content */}
                    <div className="space-y-6">
                        <motion.div custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Halo! Saya <span className="text-white font-semibold">Riyan Perdhana Putra</span>, seorang developer muda yang passionate dalam membangun pengalaman digital yang luar biasa.
                            </p>
                        </motion.div>

                        <motion.div custom={3} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                            <p className="text-gray-400 leading-relaxed">
                                Saat ini menempuh pendidikan di <span className="text-red-400 font-semibold">Politeknik Kampar</span> semester 4 dan telah menyelesaikan bootcamp intensif di <span className="text-red-400 font-semibold">Maxy Academy</span> selama 6 bulan dengan konversi 21 SKS.
                            </p>
                        </motion.div>

                        <motion.div custom={4} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                            <p className="text-gray-400 leading-relaxed">
                                Keahlian saya mencakup pengembangan web fullstack modern, desain UI/UX yang memikat, dan integrasi kecerdasan buatan. Saya percaya bahwa teknologi adalah kunci untuk menciptakan solusi yang <span className="text-white">berdampak nyata</span> bagi masyarakat.
                            </p>
                        </motion.div>

                        {/* Tech tags */}
                        <motion.div custom={5} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {['Next.js', 'React', 'TypeScript', 'Python', 'AI/ML', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Git', 'Figma'].map((tech, i) => (
                                    <span key={i} className="text-xs px-3 py-1.5 glass border border-red-500/20 rounded-full text-gray-300 hover:border-red-500/50 hover:text-white transition-all cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
