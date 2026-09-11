import { useState, useEffect, useRef } from 'react';

const projectsData = [
  {
    title: 'Clausify – T&C Summarizer',
    category: 'AI / ML',
    subcategories: ['AI / ML', 'NLP', 'Web Scraping', 'REST API'],
    date: 'Jun 2026 - Jul 2026',
    description:
      'NLP application that extracts and summarizes website Terms & Conditions, highlighting key risks and obligations to reduce review time.',
    tags: ['Python', 'Django', 'NLP', 'REST API'],
    features: [
      'URL text extraction & legal clause summarization',
      'Django REST API for automated preprocessing',
    ],
    githubUrl: 'https://github.com/jeetam1/clausify',
    liveUrl: 'https://clausify1.vercel.app/',
    gradient: 'linear-gradient(135deg, #065f46, #0d9488)',
  },
  {
    title: 'PrivacyShield AI',
    category: 'AI / ML',
    subcategories: ['AI / ML', 'NLP', 'FastAPI', 'React'],
    date: 'Mar 2026 - May 2026',
    description:
      'AI privacy platform that automatically detects and masks Personally Identifiable Information (PII) before data is processed or stored.',
    tags: ['Python', 'FastAPI', 'React', 'NLP'],
    features: [
      'Real-time PII masking (names, emails, Aadhaar)',
      'FastAPI backend with NLP pipelines & React UI',
    ],
    githubUrl: 'https://github.com/jeetam1/PrivacyShield-AI',
    liveUrl: 'https://privacyshield-ai.vercel.app/',
    gradient: 'linear-gradient(135deg, #1e3a5f, #3b82f6)',
  },
  {
    title: 'ML Prediction Models',
    category: 'AI / ML',
    subcategories: ['AI / ML', 'Machine Learning', 'Data Science'],
    date: 'Sep 2025 - Dec 2025',
    description:
      'End-to-end ML models for Disease Prediction (classification) and House Price Prediction (regression) with complete preprocessing.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    features: [
      'Benchmarked Logistic Regression, Random Forest & SVM',
      'Full feature engineering & cross-validation metrics',
    ],
    githubUrl: 'https://github.com/jeetam1/ML_PORTFOLIO',
    liveUrl: 'https://jeetam.vercel.app/projects/',
    gradient: 'linear-gradient(135deg, #78350f, #d97706)',
  },
  {
    title: 'Web Agency Studio',
    category: 'Frontend',
    subcategories: ['Frontend', 'Web Dev', 'Freelance', 'React'],
    date: 'Frontend Project',
    description:
      'Modern web design website for local businesses built with React, featuring responsive layout, service showcases, and smooth UI animations.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'CSS3'],
    features: [
      'Conversion-focused landing page & service showcases',
      'Fast, mobile-optimized responsive architecture',
    ],
    githubUrl: 'https://github.com/jeetam1/Web_Agency',
    liveUrl: 'https://web-agency-henna-nine.vercel.app/',
    gradient: 'linear-gradient(135deg, #0d9488, #0284c7)',
  },
  {
    title: 'Vintage Cars Showcase',
    category: 'Freelance',
    subcategories: ['Freelance', 'Web Dev', 'Frontend', 'React'],
    date: 'Freelance Showcase',
    description:
      'A modern vintage car showcase website built with React and Vite, featuring responsive multi-device design and vehicle filters.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS3'],
    features: [
      'Interactive car catalog with vehicle specifications',
      'Responsive design with smooth CSS micro-interactions',
    ],
    githubUrl: 'https://github.com/jeetam1/Vintage-Cars',
    liveUrl: 'https://vintagecars.vercel.app/',
    gradient: 'linear-gradient(135deg, #831843, #be185d)',
  },
  {
    title: 'Shorya Mahanot Portfolio',
    category: 'Freelance',
    subcategories: ['Freelance', 'Web Dev', 'Frontend', 'Client'],
    date: 'May 2026 - Jun 2026',
    description:
      'Client portfolio website designed for child prodigy artist Shorya Mahanot, showcasing artwork galleries, exhibitions, and media coverage.',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Custom art gallery with interactive artwork viewer',
      'High-fidelity responsive layout on custom domain',
    ],
    githubUrl: 'https://github.com/jeetam1/Shorya_Art',
    liveUrl: 'https://shoryamahanot.com',
    gradient: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
  },
  {
    title: 'ActiveHand Platform',
    category: 'Freelance',
    subcategories: ['Freelance', 'Web Dev', 'Frontend'],
    date: 'Freelance Project',
    description:
      'An engaging, responsive web platform designed with clean component architecture, intuitive interaction, and cross-device compatibility.',
    tags: ['React', 'JavaScript', 'HTML5', 'Vite'],
    features: [
      'Interactive UI with smooth state management',
      'Modern glassmorphic aesthetic & performance tuning',
    ],
    githubUrl: 'https://github.com/jeetam1/ActiveHand',
    liveUrl: 'https://active-hand.vercel.app/',
    gradient: 'linear-gradient(135deg, #065f46, #059669)',
  },
  {
    title: 'Digital Art Gallery',
    category: 'Freelance',
    subcategories: ['Freelance', 'Web Dev', 'Frontend'],
    date: 'Freelance Project',
    description:
      'Curated digital art exhibition website showcasing fine arts collections with high-resolution imagery and interactive preview features.',
    tags: ['React', 'JavaScript', 'CSS3', 'Web Design'],
    features: [
      'Categorized exhibition grid with modal previews',
      'Clean minimalist aesthetic for visual fine arts',
    ],
    githubUrl: 'https://github.com/jeetam1/Art-Gallery',
    liveUrl: 'https://artgallery12.vercel.app/',
    gradient: 'linear-gradient(135deg, #1e1b4b, #4338ca)',
  },
];

const filterCategories = ['All', 'AI / ML', 'Freelance', 'Frontend', 'NLP'];

function ProjectCard({ project, isHorizontal = false }) {
  return (
    <div
      className={`project-card glass-card${
        isHorizontal ? ' project-card-horizontal' : ''
      }`}
    >
      <div
        className="project-header"
        style={{ background: project.gradient }}
      >
        <div className="project-header-meta">
          <span className="project-category-badge">{project.category}</span>
          {project.date && (
            <span className="project-date-badge">{project.date}</span>
          )}
        </div>
        <h3 className="project-card-title">{project.title}</h3>
      </div>

      <div className="project-card-body">
        <p className="project-card-desc">{project.description}</p>

        <div className="project-features">
          <h4 className="features-title">Highlights</h4>
          <ul className="features-list">
            {project.features.map((f, idx) => (
              <li key={idx} className="feature-item">
                → {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-card-actions">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-secondary"
              aria-label={`${project.title} GitHub repository`}
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
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-primary"
              aria-label={`${project.title} Live Site`}
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
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isPaused, setIsPaused] = useState(false);
  const marqueeWrapperRef = useRef(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.category === activeFilter ||
            project.tags.includes(activeFilter) ||
            project.subcategories?.includes(activeFilter)
        );

  const repeatCount = filteredProjects.length <= 3 ? 4 : 2;
  const marqueeItems = Array.from({ length: repeatCount }, () => filteredProjects).flat();

  // Ensure scroll is at 0 whenever filter changes
  useEffect(() => {
    if (marqueeWrapperRef.current) {
      marqueeWrapperRef.current.scrollLeft = 0;
    }
  }, [activeFilter]);

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleManualMove = (direction) => {
    setIsPaused(true);
    if (marqueeWrapperRef.current) {
      const scrollOffset = direction === 'left' ? -320 : 320;
      marqueeWrapperRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleResetToStart = () => {
    setIsPaused(true);
    if (marqueeWrapperRef.current) {
      marqueeWrapperRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const isAllTab = activeFilter === 'All';

  return (
    <section id="projects" className="projects-section">
      <div className="content-wrapper">
        <span className="section-tag">My Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          {isAllTab
            ? 'Real-world applications, client projects, and intelligent systems built from the ground up.'
            : `Showing ${filteredProjects.length} projects in ${activeFilter}.`}
        </p>

        <div className="projects-top-bar">
          <div className="projects-filter">
            {filterCategories.map((category) => (
              <button
                key={category}
                className={`filter-btn${
                  activeFilter === category ? ' active' : ''
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-controls">
            {isAllTab ? (
              <>
                <span className="projects-hint-badge">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  Hover to pause
                </span>

                {/* Reset to Start / Project #1 */}
                <button
                  className="projects-nav-btn"
                  onClick={handleResetToStart}
                  title="Go to First Project"
                  aria-label="Go to First Project"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="19 20 9 12 19 4 19 20" />
                    <line x1="5" y1="19" x2="5" y2="5" />
                  </svg>
                </button>

                {/* Move Left Button */}
                <button
                  className="projects-nav-btn"
                  onClick={() => handleManualMove('left')}
                  title="Move Left"
                  aria-label="Move Left"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                {/* Play / Pause Toggle Button */}
                <button
                  className="projects-nav-btn"
                  onClick={handleTogglePause}
                  title={isPaused ? 'Resume animation' : 'Pause animation'}
                  aria-label={isPaused ? 'Resume animation' : 'Pause animation'}
                >
                  {isPaused ? (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  ) : (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  )}
                </button>

                {/* Move Right Button */}
                <button
                  className="projects-nav-btn"
                  onClick={() => handleManualMove('right')}
                  title="Move Right"
                  aria-label="Move Right"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            ) : (
              <span className="projects-hint-badge">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
              </span>
            )}
          </div>
        </div>

        {/* Vertical Grid View when specific category tab is selected */}
        {!isAllTab && (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} isHorizontal={false} />
            ))}
          </div>
        )}
      </div>

      {/* Horizontal Left-to-Right Animated Marquee View for "All" */}
      {isAllTab && (
        <div ref={marqueeWrapperRef} className="projects-marquee-wrapper">
          <div
            className={`projects-marquee-track${
              isPaused ? ' is-paused' : ''
            }`}
          >
            {marqueeItems.map((project, idx) => (
              <ProjectCard
                key={`${project.title}-${idx}`}
                project={project}
                isHorizontal={true}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
