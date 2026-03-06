'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ScrollStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const services = [
        {
            num: '01',
            title: 'UI/UX Design',
            desc: 'Menciptakan antarmuka yang indah, intuitif, dan berpusat pada pengguna menggunakan Figma dan design system modern.',
            icon: '🎨',
            tags: ['Figma', 'Design System', 'Prototyping'],
        },
        {
            num: '02',
            title: 'Fullstack Development',
            desc: 'Membangun aplikasi web end-to-end dengan Next.js, TypeScript, dan database modern yang scalable.',
            icon: '💻',
            tags: ['Next.js', 'Node.js', 'PostgreSQL'],
        },
        {
            num: '03',
            title: 'AI Engineering',
            desc: 'Mengintegrasikan kecerdasan buatan dan machine learning ke dalam produk digital Anda untuk automation cerdas.',
            icon: '🤖',
            tags: ['Python', 'LLM', 'ML Models'],
        },
        {
            num: '04',
            title: 'Web3 Development',
            desc: 'Membangun aplikasi terdesentralisasi dengan blockchain technology, smart contracts, dan DeFi solutions.',
            icon: '⛓️',
            tags: ['Web3', 'Blockchain', 'DeFi'],
        },
    ];

    return (
        <section className="section-padding relative" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <span className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3 block">What I Do</span>
                    <h2 className="section-title">
                        <span className="gradient-text">LAYANAN</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded" />
                </motion.div>

                {/* Sticky scroll stack cards */}
                <div ref={containerRef} className="relative">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="mb-6"
                            style={{
                                position: 'sticky',
                                top: `${80 + i * 20}px`,
                                zIndex: i + 1,
                            }}
                        >
                            <div
                                className={`glass card rounded-2xl p-8 border transition-all duration-300 hover:border-red-500/40`}
                                style={{
                                    background: `rgba(${13 + i * 5}, ${13 + i * 5}, ${13 + i * 5}, 0.95)`,
                                }}
                            >
                                <div className="flex items-start gap-6">
                                    {/* Number */}
                                    <div className="flex-shrink-0">
                                        <span
                                            className="font-black text-5xl"
                                            style={{
                                                fontFamily: 'Orbitron, sans-serif',
                                                WebkitTextStroke: '1px rgba(230,57,70,0.3)',
                                                color: 'transparent',
                                            }}
                                        >
                                            {service.num}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem' }}>
                                                {service.title}
                                            </h3>
                                            <span className="text-3xl ml-4">{service.icon}</span>
                                        </div>
                                        <p className="text-gray-400 mb-4 leading-relaxed text-sm">{service.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag) => (
                                                <span key={tag} className="text-xs px-3 py-1 glass-red rounded-full text-red-300 border border-red-500/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Spacer */}
                    <div className="h-32" />
                </div>
            </div>
        </section>
    );
}
