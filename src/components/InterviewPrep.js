import React from 'react';

const interviewPrepContent = [
  {
    title: "Common Interview Questions",
    content: "\n      <p>Prepare answers for common questions like:</p>\n      <ul>\n        <li>Tell me about yourself.</li>\n        <li>Why are you interested in this position?</li>\n        <li>What are your strengths and weaknesses?</li>\n        <li>Where do you see yourself in five years?</li>\n        <li>Why do you want to work for this company?</li>\n      </ul>\n      <p>Practice articulating your responses clearly and concisely.</p>\n    "
  },
  {
    title: "The STAR Method for Behavioral Questions",
    content: "\n      <p>Use the STAR method (Situation, Task, Action, Result) to answer behavioral questions effectively:</p>\n      <ul>\n        <li><b>Situation:</b> Describe the context or background.</li>\n        <li><b>Task:</b> Explain your role and what you needed to accomplish.</li>\n        <li><b>Action:</b> Detail the specific steps you took.</li>\n        <li><b>Result:</b> Share the positive outcome of your actions, ideally with quantifiable results.</li>\n      </ul>\n      <p>This method helps you provide structured and compelling answers.</p>\n    "
  },
  {
    title: "Researching the Company and Role",
    content: "\n      <p>Thorough research is key. Understand the company's mission, values, recent news, and the specific requirements of the role. This shows genuine interest and helps you tailor your answers.</p>\n    "
  },
  {
    title: "Questions to Ask the Interviewer",
    content: "\n      <p>Always prepare questions to ask at the end of the interview. This demonstrates engagement and helps you gather more information. Examples:</p>\n      <ul>\n        <li>What does a typical day look like in this role?</li>\n        <li>What are the biggest challenges someone in this position might face?</li>\n        <li>How does the team collaborate?</li>\n        <li>What opportunities are there for growth and development?</li>\n      </ul>\n    "
  }
];

const InterviewPrep = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Interview Preparation</h1>
      <div className="accordion mx-auto" id="interviewPrepAccordion" style={{ maxWidth: '800px' }}>
        {interviewPrepContent.map((item, index) => (
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
                {item.title}
              </button>
            </h2>
            <div 
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#interviewPrepAccordion"
            >
              <div className="accordion-body">
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewPrep;
