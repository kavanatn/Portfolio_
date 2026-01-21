'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Layers } from 'lucide-react'
import styles from './Projects.module.css'

const projects = [
    {
        title: "AI-Powered Video Transcription",
        desc: "Production-ready end-to-end AI pipeline for processing long-form audio/video into structured text with modular Flask APIs.",
        tech: ["Python", "Flask", "Whisper", "LLaMA", "NLP"],
        link: "#",
        github: "https://github.com/kavanatn"
    },
    {
        title: "EchoVerse – Audiobook Generator",
        desc: "Generative AI prototype using IBM Watsonx Granite models for intelligent text rewriting and multi-voice TTS.",
        tech: ["Python", "Streamlit", "Watsonx", "Gen AI"],
        link: "https://echoverse-app.streamlit.app/",
        github: "https://github.com/kavanatn"
    },
    {
        title: "HealthPal AI – Health System",
        desc: "Full-stack healthcare platform with Mistral AI integration for contextual lifestyle recommendations via chatbot.",
        tech: ["Python", "Flask", "Mistral AI", "REST API"],
        link: "https://healthpal-ai.onrender.com",
        github: "https://github.com/kavanatn"
    }
]

export default function Projects() {
    return (
        <section id="projects" className={styles.projectsSection}>
            <div className={styles.header}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="gradient-text"
                >
                    Featured Projects
                </motion.h2>
                <p>Selected works demonstrating my expertise in AI orchestration and full-stack engineering.</p>
            </div>

            <div className={styles.list}>
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className={styles.projectItem + " glass"}
                    >
                        <div className={styles.projectInfo}>
                            <div className={styles.iconBox}><Layers size={24} /></div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className={styles.techStack}>
                                {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                            </div>
                            <div className={styles.links}>
                                {project.link !== "#" && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                                        Live Demo <ExternalLink size={16} />
                                    </a>
                                )}
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                        <div className={styles.decoration}></div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
