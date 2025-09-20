import React from 'react';

const Dashboard = ({ setPage }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">CareerPilot Dashboard</h1>
      <p className="text-center">Your AI-powered guide to career success.</p>
      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card text-center" onClick={() => setPage('resume')}> 
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-file-earmark-person-fill"></i> Resume Optimization</h5>
              <p className="card-text">Upload and enhance your resume.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center" onClick={() => setPage('jobs')}>
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-briefcase-fill"></i> Job Matching</h5>
              <p className="card-text">Find jobs based on your skills.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center" onClick={() => setPage('tips')}>
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-lightbulb-fill"></i> Career Tips</h5>
              <p className="card-text">Expert advice for your career journey.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center" onClick={() => setPage('interview')}>
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-chat-left-text-fill"></i> Interview Prep</h5>
              <p className="card-text">Prepare for your next big interview.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
