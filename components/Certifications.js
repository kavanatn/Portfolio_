'use client'

import { motion } from 'framer-motion'
import { Award, ShieldCheck, Zap, Server, Database, Search, FileCheck } from 'lucide-react'
import styles from './Certifications.module.css'

const certs = [
    {
        title: "AI Vector Search Fundamentals",
        issuer: "Oracle Learn",
        icon: <Server size={30} />,
        color: "#ff0000",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DEB9B3DC5605F6EF89E31C139427BCE1BAD7510CF33F3B592E97754BFD965402"
    },
    {
        title: "Gen AI Exchange",
        issuer: "Google Cloud",
        icon: <Zap size={30} />,
        color: "#34A853",
        link: "https://certificate.hack2skill.com/user/genai6/2025H2S04GENAI-A600144"
    },
    {
        title: "AWS Machine Learning Foundations",
        issuer: "AWS Educate",
        icon: <Award size={30} />,
        color: "#FF9900",
        link: "https://www.credly.com/badges/1425a134-a0e9-4c2c-8262-eca2c5704175/public_url"
    },
    {
        title: "MongoDB Python Developer",
        issuer: "MongoDB University",
        icon: <Database size={30} />,
        color: "#47A248",
        link: "https://learn.mongodb.com/c/ayNIJlAOSBWVPDO6PJfffA"
    },
    {
        title: "Google Project Management",
        issuer: "Coursera",
        icon: <ShieldCheck size={30} />,
        color: "#4285F4",
        link: "https://www.credly.com/badges/6cc686a9-64b7-46f9-a2be-58bcd55769e1/public_url"
    },
    {
        title: "Introduction to Generative AI",
        issuer: "IBM SkillsBuild",
        icon: <Search size={30} />,
        color: "#054ADA",
        link: "https://skills.yourlearning.ibm.com/certificate/share/f256172c34ewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICI1MDE3MzMwUkVHIiwKICAib2JqZWN0SWQiIDogIk1ETC0zODgiCn08e8b4691b3-10"
    },
    {
        title: "Google Data Analytics Professional",
        issuer: "Coursera",
        icon: <FileCheck size={30} />,
        color: "#DB4437",
        link: "https://www.credly.com/badges/34882b04-8eaf-485b-93f6-fcafdf5fde67/public_url"
    }
]

export default function Certifications() {
    return (
        <section id="certifications" className={styles.section}>
            <h2 className="gradient-text" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Certifications</h2>
            <div className={styles.grid}>
                {certs.map((cert, idx) => (
                    <motion.a
                        key={idx}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className={styles.card + " glass"}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div className={styles.icon} style={{ color: cert.color }}>
                            {cert.icon}
                        </div>
                        <h3>{cert.title}</h3>
                        <p>{cert.issuer}</p>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}
