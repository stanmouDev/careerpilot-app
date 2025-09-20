import React, { useState } from 'react';

const JobMatching = () => {
  const [skills, setSkills] = useState('');
  const [jobMatches, setJobMatches] = useState([]);

  const handleFindJobs = () => {
    // Simulate job matching based on skills
    const skillList = skills.toLowerCase().split(',').map(s => s.trim());
    const simulatedJobs = [
      { id: 1, title: 'Software Engineer', company: 'Tech Solutions Inc.', description: 'Develop and maintain web applications.', skillsRequired: ['react', 'javascript', 'node.js'], applyLink: '#' },
      { id: 2, title: 'Data Analyst', company: 'Data Insights Co.', description: 'Analyze large datasets and create reports.', skillsRequired: ['python', 'sql', 'excel'], applyLink: '#' },
      { id: 3, title: 'UX Designer', company: 'Creative Minds', description: 'Design user-friendly interfaces.', skillsRequired: ['figma', 'ui/ux', 'prototyping'], applyLink: '#' },
      { id: 4, title: 'Project Manager', company: 'Global Projects', description: 'Lead cross-functional teams.', skillsRequired: ['agile', 'scrum', 'leadership'], applyLink: '#' },
    ];

    const matches = simulatedJobs.filter(job => 
      skillList.some(skill => job.skillsRequired.includes(skill))
    );
    setJobMatches(matches);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Skill-Based Job Matching</h1>
      <div className="card mx-auto" style={{ maxWidth: '800px' }}>
        <div className="card-body">
          <p className="card-text">Enter your skills (comma-separated) to find job matches based on capabilities, not just keywords.</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="e.g., React, JavaScript, Python, SQL"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
            <button className="btn btn-primary" type="button" onClick={handleFindJobs}>Find Jobs</button>
          </div>

          {jobMatches.length > 0 && (
            <div className="mt-4">
              <h5>Matching Jobs:</h5>
              <div className="list-group">
                {jobMatches.map(job => (
                  <div key={job.id} className="list-group-item mb-2">
                    <h6 className="mb-1">{job.title} at {job.company}</h6>
                    <p className="mb-1">{job.description}</p>
                    <small className="text-muted">Skills: {job.skillsRequired.join(', ')}</small><br/>
                    <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary mt-2">Direct Apply</a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {jobMatches.length === 0 && skills.length > 0 && (
            <div className="alert alert-info mt-4">
              No jobs found matching your skills. Try different skills!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobMatching;
