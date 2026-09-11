import { useState, useEffect } from 'react';

const certificatesData = [
  {
    id: 'supervised-ml',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford Online',
    platform: 'Coursera',
    instructor: 'Andrew Ng',
    issueDate: 'April 2025',
    image: '/certificates/supervised_machine_learning.png',
    pdfUrl: '/certificates/Supervised_Machine_Learning.pdf',
    verifyUrl: 'https://coursera.org/verify/PSKDOSB04N44',
    badge: 'Stanford Online · DeepLearning.AI',
    skills: [
      'Supervised Learning',
      'Linear Regression',
      'Logistic Regression',
      'Gradient Descent',
      'Scikit-learn',
    ],
    gradient: 'linear-gradient(135deg, #065f46, #0d9488)',
  },
  {
    id: 'advanced-learning',
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI & Stanford Online',
    platform: 'Coursera',
    instructor: 'Andrew Ng',
    issueDate: 'May 2026',
    image: '/certificates/advanced_learning_algorithms.png',
    pdfUrl: '/certificates/Advanced_Learning_Algorithms.pdf',
    verifyUrl: 'https://coursera.org/verify/5GLIIGBUYOJB',
    badge: 'Stanford Online · DeepLearning.AI',
    skills: [
      'Neural Networks',
      'Decision Trees',
      'Random Forests',
      'TensorFlow',
      'Model Evaluation',
    ],
    gradient: 'linear-gradient(135deg, #1e3a5f, #3b82f6)',
  },
  {
    id: 'sas-ml',
    title: 'SAS Certified Specialist: Machine Learning Using SAS Viya',
    issuer: 'SAS Global Certification Program',
    platform: 'SAS',
    issueDate: 'August 2026',
    expiryDate: 'August 2031',
    certNumber: 'c4301a46f57446248530afe0629d0520',
    image: '/certificates/sas_machine_learning.png',
    pdfUrl: '/certificates/SAS_Machine_Learning.pdf',
    verifyUrl: 'https://cp.certmetrics.com/SAS/en/public/verify/credential',
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7490626264270233601/',
    badge: 'SAS Certified Specialist',
    skills: [
      'SAS Viya',
      'Machine Learning Pipelines',
      'Model Assessment',
      'Feature Engineering',
    ],
    gradient: 'linear-gradient(135deg, #78350f, #d97706)',
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isSlidingDown, setIsSlidingDown] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#certifications') {
        const el = document.getElementById('certifications');
        if (el) {
          setTimeout(() => {
            const navbarHeight = 72;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });

            setIsSlidingDown(true);
            setTimeout(() => setIsSlidingDown(false), 2500);
          }, 100);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section
      id="certifications"
      className={`certificates-section ${isSlidingDown ? 'certificates-slide-down' : ''}`}
    >
      <div className="content-wrapper">
        <span className="section-tag">Verified Achievements</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications in Machine Learning, Deep Learning, and AI from Stanford Online, DeepLearning.AI, and SAS.
        </p>

        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="cert-card glass-card">
              {/* Certificate Image Thumbnail */}
              <div
                className="cert-img-container"
                onClick={() => setSelectedCert(cert)}
                title="Click to view full certificate"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-img"
                  loading="lazy"
                />
                <div className="cert-overlay">
                  <span className="cert-zoom-btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                    Preview
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="cert-body">
                <div className="cert-meta">
                  <span className="cert-badge">{cert.badge}</span>
                  <span className="cert-date">{cert.issueDate}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>

                <p className="cert-issuer">
                  {cert.instructor ? `Instructor: ${cert.instructor} · ` : ''}
                  {cert.issuer}
                </p>

                {cert.certNumber && (
                  <p className="cert-id-text">
                    ID: <code>{cert.certNumber}</code>
                  </p>
                )}

                {/* Skills Tags */}
                <div className="cert-skills">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="cert-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="cert-actions">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn cert-btn-primary"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Verify</span>
                  </a>

                  {cert.linkedInUrl && (
                    <a
                      href={cert.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-btn cert-btn-linkedin"
                      title="View Post on LinkedIn"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="cert-btn cert-btn-secondary"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>PDF</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full Certificate View */}
      {selectedCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="cert-modal-content glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-modal-header">
              <h3 className="cert-modal-title">{selectedCert.title}</h3>
              <button
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="cert-modal-img-wrap">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="cert-modal-img"
              />
            </div>
            <div className="cert-modal-footer">
              <span className="cert-modal-issuer">
                {selectedCert.issuer} ({selectedCert.issueDate})
              </span>
              <div className="cert-modal-actions">
                {selectedCert.linkedInUrl && (
                  <a
                    href={selectedCert.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn cert-btn-linkedin"
                  >
                    View on LinkedIn
                  </a>
                )}
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn cert-btn-primary"
                >
                  Verify on {selectedCert.platform}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
