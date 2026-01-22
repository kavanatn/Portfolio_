'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Settings, Cloud, Layers, Rocket } from 'lucide-react'
import styles from './Skills.module.css'

const skillGroups = [
    {
        title: "AI/ML & Generative AI",
        icon: <Brain size={24} />,
        skills: ["TensorFlow", "PyTorch", "Keras", "LLMs", "CNN", "Generative AI", "scikit-learn"]
    },
    {
        title: "Programming Languages",
        icon: <Code size={24} />,
        skills: ["Python", "Java", "C", "JavaScript", "SQL"]
    },
    {
        title: "Layered Development",
        icon: <Layers size={24} />,
        skills: ["React", "Next.js", "Flask", "FastAPI", "RESTful APIs", "Streamlit"]
    },
    {
        title: "Cloud & Infrastructure",
        icon: <Cloud size={24} />,
        skills: ["AWS", "IBM Cloud", "Docker", "Kubernetes", "Git", "Linux"]
    },
    {
        title: "Tools & Platforms",
        icon: <Settings size={24} />,
        skills: ["MongoDB", "Postman", "VS Code", "Jupyter Notebooks"]
    },
    {
        title: "Builder Mindset",
        icon: <Rocket size={24} />,
        skills: ["Prototyping", "Adaptability", "Collaboration", "Problem-Solving", "SDLC (Agile)"]
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
                        <div className={styles.cardHeader}>
                            {group.icon}
                            <h3>{group.title}</h3>
                        </div>
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
