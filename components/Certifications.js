'use client'

import { motion } from 'framer-motion'
import { Award, ShieldCheck, Zap, Server } from 'lucide-react'
import styles from './Certifications.module.css'

const certs = [
    {
        title: "AI Vector Search Fundamentals",
        issuer: "Oracle Learn",
        icon: <Server size={30} />,
        color: "#ff0000"
    },
    {
        title: "Google Project Management",
        issuer: "Coursera",
        icon: <ShieldCheck size={30} />,
        color: "#4285F4"
    },
    {
        title: "Gen AI Exchange",
        issuer: "Google Cloud",
        icon: <Zap size={30} />,
        color: "#34A853"
    },
    {
        title: "AWS ML Foundations",
        issuer: "AWS Educate",
        icon: <Award size={30} />,
        color: "#FF9900"
    }
]

export default function Certifications() {
    return (
        <section id="certifications" className={styles.section}>
            <h2 className="gradient-text" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Certifications</h2>
            <div className={styles.grid}>
                {certs.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className={styles.card + " glass"}
                    >
                        <div className={styles.icon} style={{ color: cert.color }}>
                            {cert.icon}
                        </div>
                        <h3>{cert.title}</h3>
                        <p>{cert.issuer}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
