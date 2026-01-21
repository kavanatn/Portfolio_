'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={styles.badge}
                    >
                        Available for new opportunities
                    </motion.span>

                    <h1 className="gradient-text">
                        Kavana T N
                    </h1>

                    <p className={styles.subtitle}>
                        Final-year Computer Science student specializing in <span>AI/ML</span> and <span>Full-Stack Development</span>.
                        Building the future of intelligent cloud solutions.
                    </p>

                    <div className={styles.actions}>
                        <a href="#projects" className={styles.primaryBtn}>
                            View My Work <ArrowRight size={18} />
                        </a>
                        <div className={styles.socials}>
                            <a href="https://github.com/kavanatn" target="_blank" rel="noopener noreferrer"><Github /></a>
                            <a href="https://linkedin.com/in/kavana-tn" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                            <a href="mailto:kavanatn41@gmail.com"><Mail /></a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className={styles.visual}
                >
                    <div className={styles.blob}></div>
                    <div className={styles.glassCard + " glass"}>
                        <pre className={styles.codeSnippet}>
                            <code>{`class AI_Developer {
  constructor() {
    this.name = "Kavana";
    this.skills = ["LLMs", "NLP", "Cloud"];
    this.goal = "Build Impactful AI";
  }
}`}</code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
