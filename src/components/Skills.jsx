import { useEffect, useState, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const categories = [
    {
      title: 'Programming Languages',
      icon: (
        <svg className="skills-category-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      skills: [
        { name: 'Python', percentage: 90 },
        { name: 'C', percentage: 70 },
        { name: 'JavaScript', percentage: 78 },
        { name: 'PHP', percentage: 65 },
        { name: 'HTML & CSS', percentage: 88 },
      ],
    },
    {
      title: 'Frameworks & Tools',
      icon: (
        <svg className="skills-category-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      skills: [
        { name: 'Django', percentage: 82 },
        { name: 'WordPress / WooCommerce', percentage: 75 },
        { name: 'Git & GitHub', percentage: 80 },
        { name: 'Tailwind CSS / Vite', percentage: 72 },
        { name: 'React Native (Basic)', percentage: 45 },
      ],
    },
    {
      title: 'AI & Data',
      icon: (
        <svg className="skills-category-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
          <line x1="9" y1="22" x2="9" y2="16" />
          <line x1="15" y1="22" x2="15" y2="16" />
        </svg>
      ),
      skills: [
        { name: 'Machine Learning', percentage: 72 },
        { name: 'Computer Vision', percentage: 55 },
        { name: 'Speech Recognition', percentage: 65 },
        { name: 'MySQL / SQLite', percentage: 75 },
        { name: 'REST APIs', percentage: 78 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="content-wrapper">
        <span className="section-tag">What I Know</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          My technical toolbox spanning languages, frameworks, and AI technologies.
        </p>

        <div className="skills-container">
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-card">
              <h3 className="skills-category-title">
                {cat.icon}
                {cat.title}
              </h3>
              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
