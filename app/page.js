import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero />

        <section id="about" className="glass" style={{ margin: '40px auto', padding: '50px', maxWidth: '1000px' }}>
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '25px' }}>About Me</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }}>
            I am a results-driven Computer Science student with a deep interest in Artificial Intelligence and Cloud Computing.
            My journey involves building complex systems that leverage LLMs, Computer Vision, and modular Backend Architectures.
            I thrive in Agile environments and love turning theoretical concepts into functional prototypes.
          </p>
        </section>

        <Skills />
        <Projects />
        <Experience />
        <Certifications />

        <section id="contact" className="glass" style={{ margin: '80px auto', padding: '60px', textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>Get In Touch</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: 'var(--text-muted)' }}>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <a href="mailto:kavanatn41@gmail.com" className="gradient-text" style={{ fontSize: '1.8rem', fontWeight: '700', textDecoration: 'underline' }}>
            kavanatn41@gmail.com
          </a>
          <p style={{ marginTop: '30px', color: 'var(--text-muted)' }}>Davanagere, Karnataka | +91 9606283147</p>
        </section>

        <footer style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid var(--card-border)' }}>
          © {new Date().getFullYear()} Kavana T N. Built with Next.js & Framer Motion.
        </footer>
      </main>
    </>
  )
}
