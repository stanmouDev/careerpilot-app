import React from 'react';

const careerTips = [
  {
    title: "Networking Essentials",
    content: "Networking is crucial for career growth. Attend industry events, connect on LinkedIn, and nurture professional relationships. Remember, it's about building genuine connections, not just collecting contacts."
  },
  {
    title: "Mastering Your LinkedIn Profile",
    content: "Your LinkedIn profile is your professional brand online. Ensure it's up-to-date, highlights your achievements with metrics, and includes a professional headshot. Engage with relevant content and thought leaders."
  },
  {
    title: "Effective Communication in the Workplace",
    content: "Clear and concise communication is vital. Practice active listening, be mindful of your tone (both verbal and written), and always strive for clarity in your messages. This builds trust and efficiency."
  },
  {
    title: "Continuous Learning and Skill Development",
    content: "The job market is constantly evolving. Dedicate time to continuous learning, whether through online courses, certifications, or reading industry publications. Staying relevant is key to long-term career success."
  },
  {
    title: "Salary Negotiation Strategies",
    content: "Don't shy away from negotiating your salary. Research industry averages, highlight your value, and be confident in your worth. Always aim for a win-win outcome and consider the entire compensation package."
  }
];

const CareerTips = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Career Tips</h1>
      <div className="accordion mx-auto" id="careerTipsAccordion" style={{ maxWidth: '800px' }}>
        {careerTips.map((tip, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button 
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {tip.title}
              </button>
            </h2>
            <div 
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#careerTipsAccordion"
            >
              <div className="accordion-body">
                {tip.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerTips;
