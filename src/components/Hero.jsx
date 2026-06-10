import SkillOrbit from './SkillOrbit';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="glow-green" style={{ top: '-20%', left: '-15%' }}></div>
      <div className="glow-amber" style={{ bottom: '10%', right: '-10%' }}></div>

      <div className="hero-grid content-wrapper">
        <div className="hero-content">
          {/* Tags */}
          <div className="hero-tags">
            <span className="hero-tag green">Open to Internships</span>
            <span className="hero-tag amber">AI & ML Student</span>
          </div>

          {/* Name */}
          <h1 className="hero-name">
            <span className="first-name">Jeetam</span>
            <span className="last-name">Singh Yadav.</span>
          </h1>

          {/* Title */}
          <p className="hero-title">AI & Machine Learning Student · Full-Stack Developer</p>

          {/* Description */}
          <p className="hero-desc">
            Turning ideas into intelligent solutions. I build innovative projects that solve real-world problems through technology — from AI-powered safety systems to immersive web platforms.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
              Let's Connect
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a href="https://github.com/jeetam1" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jeetamsinghyadav" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="hero-social-link" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Interactive Skill Orbit Visual */}
        <div className="hero-visual">
          <SkillOrbit />
        </div>
      </div>
    </section>
  );
}
