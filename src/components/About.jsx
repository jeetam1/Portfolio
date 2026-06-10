import React from 'react';

const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Full-Stack Web Development',
  'Django Development',
  'Data Structures & Algorithms',
  'Problem Solving',
];

const stats = [
  { number: '4+', label: 'Projects Built' },
  { number: '7+', label: 'Technologies' },
  { number: '2028', label: 'B.Tech Graduation' },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="content-wrapper">
        <span className="section-tag">Get To Know Me</span>
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I'm Jeetam Singh Yadav, currently pursuing a Bachelor of
              Technology (B.Tech) in Computer Science Engineering with
              specialization in Artificial Intelligence and Machine Learning at
              Poornima University.
            </p>
            <p>
              From developing intelligent systems to designing modern websites, I
              enjoy exploring how technology can improve people's lives. My
              journey in technology began with curiosity and has evolved into a
              strong commitment toward building practical solutions using AI and
              software development.
            </p>
            <p>
              My long-term goal is to become an AI Engineer working on products
              that create meaningful social impact while continuously expanding
              my technical expertise.
            </p>
            <div className="about-interests">
              {interests.map((interest) => (
                <span key={interest} className="interest-tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div className="about-sidebar">
            <div className="about-stats glass-card">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="about-philosophy glass-card">
              <p className="philosophy-quote">
                "Technology becomes meaningful when it is used to solve real
                problems and improve lives."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
