'use client'

import { motion } from 'framer-motion'
import styles from './Experience.module.css'

const experiences = [
    {
        role: "AI/ML Developer Intern",
        company: "Infosys Springboard",
        period: "Oct 2025 – Dec 2025",
        points: [
            "Designed and developed end-to-end AI/ML prototypes including PlantDocBot using TensorFlow and PyTorch.",
            "Implemented multimodal data processing pipeline handling 28K+ images achieving 85%+ accuracy.",
            "Deployed via Docker/Streamlit for scalable cloud-like inference and collaborated in Agile environments."
        ]
    }
]

const education = [
    {
        degree: "B.E in Computer Science and Engineering",
        school: "Bapuji Institute of Engineering and Technology",
        period: "2022 – 2026",
        info: "CGPA: 8.67 | Davanagere, Karnataka"
    },
    {
        degree: "Pre-University (PCMCs)",
        school: "Sir MV PU College",
        period: "2020 – 2022",
        info: "Percentage: 96.8% | Davanagere, Karnataka"
    }
]

export default function Experience() {
    return (
        <section id="experience" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.expCol}>
                    <h2 className="gradient-text">Experience</h2>
                    <div className={styles.timeline}>
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={styles.item}
                            >
                                <span className={styles.date}>{exp.period}</span>
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <ul>
                                    {exp.points.map((p, i) => <li key={i}>{p}</li>)}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className={styles.eduCol}>
                    <h2 className="gradient-text">Education</h2>
                    <div className={styles.timeline}>
                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={styles.item}
                            >
                                <span className={styles.date}>{edu.period}</span>
                                <h3>{edu.degree}</h3>
                                <h4>{edu.school}</h4>
                                <p>{edu.info}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
