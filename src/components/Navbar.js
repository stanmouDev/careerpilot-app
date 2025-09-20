import React from 'react';

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => setPage('dashboard')}><i className="bi bi-rocket-takeoff-fill"></i> CareerPilot</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setPage('dashboard')}><i className="bi bi-house-door-fill"></i> Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setPage('resume')}><i className="bi bi-file-earmark-person-fill"></i> Resume & Optimization</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setPage('rewriter')}><i className="bi bi-pencil-square"></i> Resume Rewriter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setPage('jobs')}><i className="bi bi-briefcase-fill"></i> Job Matching</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setPage('tips')}><i className="bi bi-lightbulb-fill"></i> Career Tips</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setPage('interview')}><i className="bi bi-chat-left-text-fill"></i> Interview Prep</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
