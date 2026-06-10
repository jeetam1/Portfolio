import React from 'react';

export default function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      tagColor: 'lang-tag',
      skills: ['Python', 'JavaScript', 'C', 'PHP', 'HTML / CSS'],
    },
    {
      title: 'Frameworks and Tools',
      tagColor: 'tool-tag',
      skills: [
        'Django',
        'React',
        'WordPress',
        'WooCommerce',
        'Git and GitHub',
        'Tailwind CSS',
        'Vite',
      ],
    },
    {
      title: 'AI and Data Science',
      tagColor: 'ai-tag',
      skills: [
        'Machine Learning',
        'Computer Vision',
        'Speech Recognition',
        'NLP',
        'MySQL',
        'SQLite',
        'REST APIs',
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="content-wrapper">
        <span className="section-tag">What I Know</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          My technical toolbox spanning languages, frameworks, and AI technologies.
        </p>

        <div className="skills-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="skills-card glass-card">
              <h3 className="skills-category-title">
                {cat.title}
              </h3>
              <div className="skills-pill-group">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={`skill-pill ${cat.tagColor}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
