import { useEffect, useRef, useState } from "react";
import styles from './ParticleBackground.module.css';
import { motion } from "framer-motion";

export default function ParticleBackground({
    particleCount = 20,
    particleSize = 4,
    particleColor1 = "#FFFFFF",
    particleColor2 = "#CCCCCC",
    particleColor3 = "#999999",
    speed = 1,
    opacity = 0.8,
    blur = false,
}) {

    const animationRef = useRef();
    const [particles, setParticles] = useState([]);

    // Initialize particles (position as % of container)
    useEffect(() => {
        const colors = [particleColor1, particleColor2, particleColor3];
        const newParticles = [];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100, // percentage
                y: Math.random() * 100, // percentage
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                size: particleSize + Math.random() * particleSize * 0.5,
                opacity: opacity * (0.5 + Math.random() * 0.5),
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        setParticles(newParticles);
    }, [particleCount, particleSize, particleColor1, particleColor2, particleColor3, speed, opacity]);

    // Animation loop (works in % space)
    useEffect(() => {
        if (particles.length === 0) return;

        const animate = () => {
            setParticles((prevParticles) =>
                prevParticles.map((p) => {
                    let newX = p.x + p.vx * speed;
                    let newY = p.y + p.vy * speed;
                    let newVx = p.vx;
                    let newVy = p.vy;

                    // Bounce off edges (0–100%)
                    if (newX <= 0 || newX >= 100) newVx = -newVx;
                    if (newY <= 0 || newY >= 100) newVy = -newVy;

                    // Add slight random drift
                    newVx += (Math.random() - 0.5) * 0.002;
                    newVy += (Math.random() - 0.5) * 0.002;


                    // Limit velocity 
                    const maxVel = 0.1 * speed;
                    newVx = Math.max(-maxVel, Math.min(maxVel, newVx));
                    newVy = Math.max(-maxVel, Math.min(maxVel, newVy));


                    return {
                        ...p,
                        x: newX,
                        y: newY,
                        vx: newVx,
                        vy: newVy
                    };
                })
            );

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationRef.current);
    }, [particles.length, speed]);

    return (
        <div
            className={styles.background}
        >
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    style={{
                        position: "absolute",
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        borderRadius: "50%",
                        opacity: p.opacity,
                        filter: blur ? "blur(1px)" : "none",
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [p.opacity, p.opacity * 0.7, p.opacity],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
