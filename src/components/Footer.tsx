'use client';

import { motion } from 'framer-motion';
import { Globe, Heart } from 'lucide-react';

const quickLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollTo = (id: string) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="relative border-t border-white/5 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#070707]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                                <span className="text-white font-black" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem' }}>R</span>
                            </div>
                            <span className="font-bold text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                RIYAN<span className="text-red-500">.</span>DEV
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            Fullstack Developer & AI Engineer dari Riau, Indonesia. Membangun solusi digital masa depan hari ini.
                        </p>
                        <div className="flex items-center gap-2">
                            {/* Removed status badge */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {quickLinks.map((link) => (
                                <button
                                    key={link}
                                    onClick={() => scrollTo(link)}
                                    className="text-left text-sm text-gray-500 hover:text-red-400 transition-colors py-1 animated-underline"
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects spotlight */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Top Projects</h4>
                        <div className="space-y-2">
                            {[
                                { name: 'Mahasi Tech', url: 'https://mahasi.tech' },
                                { name: 'Sawit Nusa', url: 'https://sawitnusa.base44.app/' },
                                { name: 'Mahasi News', url: 'https://staging-mahasi-news-platform-yfui.frontend.encr.app/' },
                                { name: 'Web3 Careers Hub', url: 'https://web3-careers-hub-2d3fcc26.base44.app/' },
                            ].map((p) => (
                                <a
                                    key={p.name}
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-400 transition-colors py-1"
                                >
                                    <Globe size={12} />
                                    {p.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-sm flex items-center gap-1.5">
                        © {year} Riyan Perdhana Putra.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <span>Politeknik Kampar • Maxy Academy Alumni</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
