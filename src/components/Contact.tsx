'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageCircle, Send, Instagram, Linkedin, Globe } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
    {
        icon: Instagram,
        label: 'Instagram',
        handle: '@ryntg01',
        url: 'https://www.instagram.com/ryntg01?igsh=Z3M0aWNyMTVpNmxl',
        color: '#E1306C',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        handle: 'Riyan Perdhana Putra',
        url: 'https://www.linkedin.com/in/riyan-perdhana-putra-0070a037b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        color: '#0077B5',
    },
    {
        icon: Globe,
        label: 'Website',
        handle: 'mahasi.tech',
        url: 'https://mahasi.tech',
        color: '#e63946',
    },
];

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate send
        setTimeout(() => setSent(true), 500);
    };

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(230,57,70,0.08)_0%,_transparent_70%)]" />

            <div className="max-w-6xl mx-auto px-6" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3 block">Get In Touch</span>
                    <h2 className="section-title gradient-text">HUBUNGI SAYA</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded" />
                    <p className="text-gray-400 mt-4 max-w-lg mx-auto">
                        Tertarik berkolaborasi? Saya selalu terbuka untuk diskusi, proyek baru, dan peluang menarik.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Info + Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Contact info */}
                        <div className="glass rounded-2xl p-6 glow-border">
                            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.9rem' }}>
                                MARI BERKOLABORASI
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Saya siap membantu mewujudkan ide-ide brilian Anda menjadi produk digital yang nyata.
                                Baik itu web app, AI integration, atau desain UI/UX yang memukau.
                            </p>

                            <div className="space-y-3">
                                {[
                                    { icon: Mail, label: 'Email', value: 'perdhanariyan@gmail.com' },
                                    { icon: Globe, label: 'Website', value: 'mahasi.tech' },
                                    { icon: MessageCircle, label: 'WhatsApp', value: '+6285378963269' },
                                ].map(({ icon: Icon, label, value }) => (
                                    <div key={label} className="flex items-center gap-3 p-3 bg-white/3 rounded-xl">
                                        <div className="w-8 h-8 glass-red rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon size={14} className="text-red-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">{label}</div>
                                            <div className="text-sm text-gray-200 font-medium">{value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="space-y-3">
                            {socialLinks.map(({ icon: Icon, label, handle, url, color }, i) => (
                                <motion.a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-center gap-4 p-4 glass card rounded-xl group"
                                    whileHover={{ x: 8 }}
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                                        style={{ background: `${color}22`, border: `1px solid ${color}44` }}
                                    >
                                        <Icon size={18} style={{ color }} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-white">{label}</div>
                                        <div className="text-xs text-gray-400">{handle}</div>
                                    </div>
                                    <div className="ml-auto text-gray-600 group-hover:text-red-400 transition-colors">→</div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="glass rounded-2xl p-8 glow-border h-full">
                            {sent ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center h-full text-center py-12"
                                >
                                    <div className="text-6xl mb-4">🚀</div>
                                    <h3 className="text-xl font-bold mb-2 gradient-text-red" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                        Pesan Terkirim!
                                    </h3>
                                    <p className="text-gray-400 text-sm">Terima kasih! Saya akan segera menghubungi Anda.</p>
                                    <button
                                        onClick={() => setSent(false)}
                                        className="mt-6 btn-outline text-sm px-6 py-2"
                                    >
                                        Kirim lagi
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="text-base font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                        KIRIM PESAN
                                    </h3>

                                    {[
                                        { id: 'name', label: 'Nama Lengkap', type: 'text', placeholder: 'John Doe' },
                                        { id: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com' },
                                    ].map((field) => (
                                        <div key={field.id}>
                                            <label className="block text-xs text-gray-400 mb-2 uppercase tracking-widest">{field.label}</label>
                                            <input
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                value={formData[field.id as keyof typeof formData]}
                                                onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                                            />
                                        </div>
                                    ))}

                                    <div>
                                        <label className="block text-xs text-gray-400 mb-2 uppercase tracking-widest">Pesan</label>
                                        <textarea
                                            placeholder="Ceritakan proyek atau ide Anda..."
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="w-full btn-red flex items-center justify-center gap-2 py-4"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Send size={16} />
                                        Kirim Pesan
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
