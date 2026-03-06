'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Code2, Cpu, Palette, ExternalLink } from 'lucide-react';

const roles = ['Fullstack Developer', 'UI/UX Designer', 'AI Engineer', 'Web3 Builder'];

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    // Typing effect
    useEffect(() => {
        const current = roles[roleIndex];
        let timeout: NodeJS.Timeout;

        if (!deleting && charIdx < current.length) {
            timeout = setTimeout(() => setCharIdx((c) => c + 1), 80);
        } else if (!deleting && charIdx === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && charIdx > 0) {
            timeout = setTimeout(() => setCharIdx((c) => c - 1), 40);
        } else if (deleting && charIdx === 0) {
            setDeleting(false);
            setRoleIndex((r) => (r + 1) % roles.length);
        }

        setDisplayed(current.slice(0, charIdx));
        return () => clearTimeout(timeout);
    }, [charIdx, deleting, roleIndex]);

    const floatingIcons = [
        { icon: Code2, x: '10%', y: '20%', delay: 0 },
        { icon: Cpu, x: '85%', y: '15%', delay: 0.5 },
        { icon: Palette, x: '8%', y: '75%', delay: 1 },
        { icon: ExternalLink, x: '88%', y: '70%', delay: 1.5 },
    ];

    return (
        <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background layers */}
            <div className="absolute inset-0 z-0">
                {/* Radial gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(230,57,70,0.12)_0%,_transparent_70%)]" />

                {/* Grid lines */}
                <div className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(230,57,70,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(230,57,70,0.08) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Animated orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(230,57,70,0.1) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(230,57,70,0.08) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                />
            </div>

            {/* Floating decorative icons */}
            {floatingIcons.map(({ icon: Icon, x, y: iconY, delay }, i) => (
                <motion.div
                    key={i}
                    className="absolute z-10 w-12 h-12 glass glass-red rounded-xl flex items-center justify-center"
                    style={{ left: x, top: iconY }}
                    animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Icon size={20} className="text-red-400" />
                </motion.div>
            ))}

            {/* Main content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
            >
                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="section-title mb-4"
                    style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
                >
                    RIYAN{' '}
                    <span className="gradient-text-red">PERDHANA</span>
                    <br />
                    PUTRA
                </motion.h1>

                {/* Typing role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-gray-400 font-light mb-6 h-10"
                >
                    <span className="text-white font-semibold">{displayed}</span>
                    <span className="cursor-blink font-light">|</span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
                >
                    Mahasiswa Politeknik Kampar Semester 4 & Alumni Bootcamp Maxy Academy (6 bulan, 21 SKS).
                    Passionate dalam membangun <span className="text-red-400 font-semibold">solusi digital</span> yang inovatif dan berdampak.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <motion.a
                        href="#projects"
                        onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="btn-red inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Code2 size={18} />
                        Lihat Karya Saya
                    </motion.a>
                    <motion.a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="btn-outline inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ExternalLink size={18} />
                        Hubungi Saya
                    </motion.a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
                >
                    {[
                        { num: '9+', label: 'Projects' },
                        { num: '6mo', label: 'Bootcamp' },
                        { num: '4th', label: 'Semester' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl md:text-3xl font-black gradient-text-red" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                {stat.num}
                            </div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
                <ArrowDown size={16} className="text-red-500" />
            </motion.div>
        </section>
    );
}
