'use client'

import { motion } from 'framer-motion'
import styles from './Skills.module.css'

const skillGroups = [
    {
        title: "AI/ML & Generative AI",
        skills: ["LLMs", "TensorFlow", "PyTorch", "Whisper", "LLaMA", "CNNs", "scikit-learn"]
    },
    {
        title: "Backend & APIs",
        skills: ["Python", "Java", "Flask", "FastAPI", "RESTful APIs", "SQL"]
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS", "Docker", "Kubernetes", "Git", "Linux", "IBM Cloud"]
    },
    {
        title: "Frontend Development",
        skills: ["Next.js", "React", "JavaScript", "HTML/CSS", "Streamlit"]
    }
]

export default function Skills() {
    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={styles.header}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="gradient-text"
                >
                    Technical Expertise
                </motion.h2>
                <p>A comprehensive toolkit for building intelligent, scalable applications.</p>
            </div>

            <div className={styles.grid}>
                {skillGroups.map((group, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={styles.skillCard + " glass"}
                    >
                        <h3>{group.title}</h3>
                        <div className={styles.skillList}>
                            {group.skills.map((skill, i) => (
                                <span key={i} className={styles.skillItem}>{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
