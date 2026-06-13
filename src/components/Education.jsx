
const focusAreas = [
  'AI',
  'ML',
  'Python Programming',
  'DSA',
  'Web Development',
  'Software Engineering',
  'DBMS',
];

const shortTermGoals = [
  'Secure a valuable internship opportunity',
  'Strengthen expertise in AI and Machine Learning',
  'Improve problem-solving through consistent practice',
  'Participate in hackathons and collaborative projects',
];

const longTermGoals = [
  'Become an AI Engineer',
  'Build impactful AI-driven products',
  'Contribute to technological advancements that benefit society',
  'Continue learning and evolving as a technology professional',
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="content-wrapper">
        <span className="section-tag">My Academic Journey</span>
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="edu-card glass-card">
            <div className="edu-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <h3 className="edu-degree">Bachelor of Technology (B.Tech)</h3>
            <p className="edu-field">Computer Science Engineering (AI / ML)</p>
            <p className="edu-university">Poornima University</p>
            <span className="edu-status">Undergraduate Student (Ongoing)</span>
            <div className="edu-focus-areas">
              {focusAreas.map((area) => (
                <span key={area} className="focus-tag">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="goals-container">
            <div className="goals-card glass-card">
              <h3 className="goals-title">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Short-Term Goals
              </h3>
              <ul className="goals-list">
                {shortTermGoals.map((goal) => (
                  <li key={goal} className="goal-item">
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            <div className="goals-card glass-card">
              <h3 className="goals-title">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Long-Term Goals
              </h3>
              <ul className="goals-list">
                {longTermGoals.map((goal) => (
                  <li key={goal} className="goal-item">
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
