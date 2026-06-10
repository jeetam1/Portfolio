import { useState } from 'react';

const projectsData = [
  {
    title: 'SAFE-WATCH',
    category: 'AI / ML',
    description:
      'An intelligent safety application designed to enhance women\'s security through AI-powered emergency detection. The system monitors voice inputs to identify distress situations and automatically sends alerts, initiates emergency calls, and shares live location details with trusted contacts.',
    tags: ['Python', 'Django', 'Speech Recognition', 'REST APIs'],
    features: [
      'Voice-based distress detection',
      'Automatic emergency alerts & calls',
      'Live location sharing with trusted contacts',
      'Quick assistance during critical situations',
    ],
    gradient: 'linear-gradient(135deg, #065f46, #0d9488)',
  },
  {
    title: 'Astravelle Jewels',
    category: 'Web Dev',
    description:
      'A unique dropshipping jewelry platform that combines luxury products with immersive anime-inspired storytelling. Each jewelry piece is presented with its own narrative, creating an engaging shopping experience with modern e-commerce functionalities.',
    tags: ['WordPress', 'WooCommerce', 'Elementor', 'CSS', 'JavaScript'],
    features: [
      'Story-driven product presentation',
      'Luxury e-commerce design',
      'Anime-inspired narratives per product',
      'Modern shopping experience',
    ],
    gradient: 'linear-gradient(135deg, #92400e, #d97706)',
  },
  {
    title: 'University Canteen System',
    category: 'Web Dev',
    description:
      'A web-based food ordering platform developed to simplify the ordering process within a university campus. Students can browse available menu items, place orders conveniently, and reduce waiting times at the canteen.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'XAMPP'],
    features: [
      'Menu browsing & item availability',
      'Convenient order placement',
      'Reduced canteen waiting times',
      'User-friendly campus interface',
    ],
    gradient: 'linear-gradient(135deg, #1e3a5f, #3b82f6)',
  },
  {
    title: 'Shorya Mahanot Website',
    category: 'Frontend',
    description:
      'A front-end development project focused on recreating an existing professional portfolio website with high visual accuracy. The project emphasizes responsive design, smooth animations, and precise implementation of layouts and interactive elements.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Pixel-perfect website recreation',
      'Responsive design implementation',
      'Smooth CSS animations',
      'Interactive element precision',
    ],
    gradient: 'linear-gradient(135deg, #581c87, #a855f7)',
  },
  {
    title: 'T&C AI Summarizer',
    category: 'AI / ML',
    description:
      'An AI-powered concept designed to simplify lengthy terms and conditions by extracting key information and presenting it in an easy-to-understand format. Helps users make informed decisions without reading complex legal documents.',
    tags: ['Python', 'NLP', 'AI Concepts'],
    features: [
      'Automated legal text extraction',
      'Key point summarization',
      'Easy-to-understand output format',
      'Informed decision-making support',
    ],
    gradient: 'linear-gradient(135deg, #0e4429, #10b981)',
  },
];

const filterCategories = ['All', 'AI / ML', 'Web Dev', 'Frontend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="content-wrapper">
        <span className="section-tag">My Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some projects I've built to solve real-world problems through technology.
        </p>
        <div className="projects-filter">
          {filterCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn${activeFilter === category ? ' active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.title} className="project-card glass-card">
              <div
                className="project-header"
                style={{ background: project.gradient }}
              >
                <span className="project-category-badge">
                  {project.category}
                </span>
                <h3 className="project-card-title">{project.title}</h3>
              </div>
              <div className="project-card-body">
                <p className="project-card-desc">{project.description}</p>
                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    {project.features.map((f) => (
                      <li key={f} className="feature-item">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
