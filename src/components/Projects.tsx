'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ExternalLink, Globe, Star } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Mahasi Tech',
        url: 'https://mahasi.tech',
        type: 'Domain',
        category: 'main',
        tag: 'Main Domain',
        description: 'Main domain — portal teknologi inovatif dengan berbagai solusi digital modern.',
        icon: '🌐',
        tech: ['Next.js', 'TypeScript', 'Tailwind'],
        featured: true,
    },
    {
        id: 2,
        title: 'Web3 Careers Hub',
        url: 'https://web3-careers-hub-2d3fcc26.base44.app/',
        type: 'App',
        category: 'web3',
        tag: 'Web3',
        description: 'Platform karir berbasis Web3 yang menghubungkan talenta dengan peluang blockchain.',
        icon: '⛓️',
        tech: ['Web3', 'React', 'Blockchain'],
        featured: true,
    },
    {
        id: 3,
        title: 'Quantum Miner',
        url: 'https://quantum-miner-d44a1ac9.base44.app/',
        type: 'App',
        category: 'web3',
        tag: 'Web3 / DeFi',
        description: 'Aplikasi mining kripto berbasis kuantum dengan interface modern.',
        icon: '⚡',
        tech: ['DeFi', 'Web3', 'React'],
        featured: false,
    },
    {
        id: 4,
        title: 'Job2Job',
        url: 'https://job2-job-0a95bc9b.base44.app',
        type: 'App',
        category: 'platform',
        tag: 'Job Platform',
        description: 'Platform matching kerja berbasis AI dengan sistem rekomendasi cerdas.',
        icon: '💼',
        tech: ['AI', 'React', 'Node.js'],
        featured: false,
    },
    {
        id: 5,
        title: 'Sawit Nusa',
        url: 'https://sawitnusa.base44.app/',
        type: 'App',
        category: 'industry',
        tag: 'AgriTech',
        description: 'Platform manajemen perkebunan kelapa sawit cerdas berbasis data.',
        icon: '🌴',
        tech: ['React', 'IoT', 'Data'],
        featured: true,
    },
    {
        id: 6,
        title: 'Masiha',
        url: 'https://masiha.base44.app/',
        type: 'App',
        category: 'health',
        tag: 'HealthTech',
        description: 'Aplikasi layanan kesehatan digital yang mudah diakses masyarakat.',
        icon: '❤️',
        tech: ['React', 'Health API', 'UI/UX'],
        featured: false,
    },
    {
        id: 7,
        title: 'Mahasi News',
        url: 'https://staging-mahasi-news-platform-yfui.frontend.encr.app/',
        type: 'App',
        category: 'media',
        tag: 'Media Platform',
        description: 'Platform berita modern dengan sistem CMS dan AI-powered recommendations.',
        icon: '📰',
        tech: ['Next.js', 'CMS', 'AI'],
        featured: true,
    },
    {
        id: 8,
        title: 'JB Trade',
        url: 'https://jbtrade-f6588914.base44.app/',
        type: 'App',
        category: 'fintech',
        tag: 'FinTech',
        description: 'Platform trading finansial dengan analitik real-time dan charting canggih.',
        icon: '📈',
        tech: ['FinTech', 'React', 'Charts'],
        featured: false,
    },
    {
        id: 9,
        title: 'Instagram',
        url: 'https://www.instagram.com/ryntg01?igsh=Z3M0aWNyMTVpNmxl',
        type: 'Social',
        category: 'social',
        tag: 'Social Media',
        description: 'Konten kreatif digital & dokumentasi perjalanan sebagai developer.',
        icon: '📸',
        tech: ['Content', 'Design', 'Creative'],
        featured: false,
    },
    {
        id: 10,
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/riyan-perdhana-putra-0070a037b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        type: 'Social',
        category: 'social',
        tag: 'Professional',
        description: 'Profil profesional LinkedIn dengan jaringan dan pengalaman kerja.',
        icon: '🔗',
        tech: ['Networking', 'Professional'],
        featured: false,
    },
];

const filters = ['All', 'Featured', 'Web3', 'Platform', 'FinTech', 'Social'];

export default function Projects() {
    const [filter, setFilter] = useState('All');
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    const filtered = projects.filter((p) => {
        if (filter === 'All') return true;
        if (filter === 'Featured') return p.featured;
        return p.tag.toLowerCase().includes(filter.toLowerCase()) || p.category.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            {/* BG decoration */}
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, #e63946 0%, transparent 50%), radial-gradient(circle at 80% 50%, #c1121f 0%, transparent 50%)'
                }} />

            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3 block">Portfolio</span>
                    <h2 className="section-title gradient-text">KARYA SAYA</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded" />
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Koleksi proyek nyata yang telah dibangun — dari web3 hingga AI, dari platform karir hingga media digital.
                    </p>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 justify-center mb-10"
                >
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${filter === f
                                    ? 'bg-gradient-to-r from-red-600 to-red-800 text-white'
                                    : 'glass text-gray-400 hover:text-white border border-white/5'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            layout
                        >
                            <motion.div
                                className="card group relative overflow-hidden rounded-2xl h-full"
                                onHoverStart={() => setHoveredId(project.id)}
                                onHoverEnd={() => setHoveredId(null)}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Hover glow background */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent transition-opacity duration-500 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                                    }`} />

                                {/* Animated border */}
                                <div className={`absolute inset-0 rounded-2xl border transition-all duration-500 ${hoveredId === project.id ? 'border-red-500/50 glow-red' : 'border-white/5'
                                    }`} />

                                {/* Featured badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="flex items-center gap-1 bg-red-600/90 text-white text-xs px-2 py-1 rounded-full">
                                            <Star size={10} fill="white" /> Featured
                                        </span>
                                    </div>
                                )}

                                <div className="relative z-10 p-6 flex flex-col h-full">
                                    {/* Icon & Type */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 glass rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                            {project.icon}
                                        </div>
                                        <span className="text-xs glass-red text-red-300 px-2 py-1 rounded-full border border-red-500/20">
                                            {project.tag}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-400 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem' }}>
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs px-2 py-0.5 bg-white/5 rounded text-gray-400">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-white transition-colors group/link"
                                    >
                                        <Globe size={14} />
                                        <span className="animated-underline">Kunjungi →</span>
                                        <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
