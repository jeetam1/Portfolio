import React from 'react';

function Contact() {
  const linkedinUrl = 'https://www.linkedin.com/in/jeetamsinghyadav';
  const githubUrl = 'https://github.com/jeetam1';
  const email = 'jjeetamsinghyadav12@gmail.com';
  const phone = '+91 94253 61458';

  const handleLetsChat = () => {
    // Opens LinkedIn messaging with a default message
    const message = encodeURIComponent(
      "Hi Jeetam! I came across your portfolio and would love to connect. Let's chat!"
    );
    window.open(
      `https://www.linkedin.com/messaging/compose/?to=jeetamsinghyadav&body=${message}`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="content-wrapper">
        <div className="contact-layout">
          {/* Left Side */}
          <div className="contact-left">
            <div className="contact-tag-line">
              <span className="contact-tag-dash"></span>
              <span className="contact-tag-text">GET IN TOUCH</span>
            </div>

            <h2 className="contact-heading">
              Let's build<br />
              something <span className="contact-heading-accent">great.</span>
            </h2>

            <p className="contact-description">
              Want to talk tech, explore ideas, or collaborate on
              something meaningful? I'm always open to new
              opportunities and interesting conversations. Hit me up!
            </p>

            <button
              className="contact-chat-btn"
              onClick={handleLetsChat}
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Let's Chat
            </button>
          </div>

          {/* Right Side */}
          <div className="contact-right">
            {/* Email Card */}
            <a
              href={`mailto:${email}`}
              className="contact-info-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-info-card-icon email-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="contact-info-card-content">
                <span className="contact-info-card-label">EMAIL</span>
                <span className="contact-info-card-value">{email}</span>
              </div>
              <div className="contact-info-card-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="contact-info-card"
            >
              <div className="contact-info-card-icon phone-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-info-card-content">
                <span className="contact-info-card-label">PHONE</span>
                <span className="contact-info-card-value">{phone}</span>
              </div>
              <div className="contact-info-card-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </a>

            {/* Follow & Connect */}
            <div className="contact-follow-section">
              <span className="contact-follow-label">FOLLOW & CONNECT</span>
              <div className="contact-follow-links">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-follow-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-follow-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={`mailto:${email}`}
                  className="contact-follow-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email
                </a>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="contact-status-indicator">
              <span className="contact-status-dot"></span>
              <span className="contact-status-text">Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
