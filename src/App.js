import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ResumeUpload from './components/ResumeUpload';
import JobMatching from './components/JobMatching';
import CareerTips from './components/CareerTips';
import InterviewPrep from './components/InterviewPrep';
import ResumeRewriter from './components/ResumeRewriter';
import './App.css';

function App() {
  const [page, setPage] = useState('dashboard');

  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard setPage={setPage} />;
      case 'resume':
        return <ResumeUpload />;
      case 'jobs':
        return <JobMatching />;
      case 'tips':
        return <CareerTips />;
      case 'interview':
        return <InterviewPrep />;
      case 'rewriter':
        return <ResumeRewriter />;
      default:
        return <Dashboard setPage={setPage} />;
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;
