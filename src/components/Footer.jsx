export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="content-wrapper">
        {/* Footer Top Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={handleScrollToTop}>
              JS<span className="footer-logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Building intelligent solutions through code, creativity, and continuous learning.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/jeetam1" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jeetamsinghyadav" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="mailto:jjeetamsinghyadav12@gmail.com" className="footer-social-link" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="footer-link" onClick={(e) => scrollTo(e, link.id)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Get In Touch</h4>
            <ul className="footer-link-list">
              <li><span className="footer-info-item">📍 India</span></li>
              <li><a href="mailto:jjeetamsinghyadav12@gmail.com" className="footer-info-item text-link" style={{ color: 'inherit', textDecoration: 'none' }}>📧 jjeetamsinghyadav12@gmail.com</a></li>
              <li><span className="footer-info-item">🎓 Poornima University</span></li>
              <li><span className="footer-info-item">💼 Open for opportunities</span></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Jeetam Singh Yadav. All rights reserved.
          </p>
          <p className="footer-built-with">
            Designed & built with <span style={{ color: 'var(--accent-primary)' }}>React</span> + <span style={{ color: 'var(--accent-secondary)' }}>Vite</span>
          </p>
          <button className="back-to-top" onClick={handleScrollToTop}>
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
