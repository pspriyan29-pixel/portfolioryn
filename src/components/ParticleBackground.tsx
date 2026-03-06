'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            alpha: number;
            color: string;
            life: number;
            maxLife: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5 - 0.2;
                this.size = Math.random() * 2.5 + 0.5;
                this.alpha = Math.random() * 0.6 + 0.1;
                this.maxLife = Math.random() * 300 + 200;
                this.life = Math.random() * this.maxLife;
                const r = Math.random();
                if (r < 0.3) this.color = '#e63946';
                else if (r < 0.5) this.color = '#ff6b6b';
                else this.color = '#ffffff';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life++;
                if (this.life > this.maxLife) {
                    this.x = Math.random() * canvas!.width;
                    this.y = canvas!.height + 10;
                    this.life = 0;
                }
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
            }

            draw() {
                const fadeProgress = this.life / this.maxLife;
                const alpha = Math.sin(fadeProgress * Math.PI) * this.alpha;
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx!.fillStyle = this.color.replace(')', `, ${alpha})`).replace('rgb', 'rgba').replace('#', '');
                // Use fillStyle with alpha parsing differently:
                ctx!.globalAlpha = alpha;
                ctx!.fillStyle = this.color;
                ctx!.fill();
                ctx!.globalAlpha = 1;
            }
        }

        // Create initial particles
        for (let i = 0; i < 120; i++) {
            particles.push(new Particle());
        }

        // Draw connecting lines
        const drawLines = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        const alpha = (1 - dist / 120) * 0.15;
                        ctx!.beginPath();
                        ctx!.moveTo(particles[i].x, particles[i].y);
                        ctx!.lineTo(particles[j].x, particles[j].y);
                        ctx!.strokeStyle = `rgba(230, 57, 70, ${alpha})`;
                        ctx!.lineWidth = 0.5;
                        ctx!.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            drawLines();
            animId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <motion.canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        />
    );
}
