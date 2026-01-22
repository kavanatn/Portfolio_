'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>KTN</a>
                <div className={styles.links}>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#certifications">Certifications</a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeLink}>Resume</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}
