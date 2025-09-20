import React, { useState } from 'react';

const ResumeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [optimizationResult, setOptimizationResult] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setOptimizationResult(null); // Clear previous results
  };

  const handleOptimizeResume = () => {
    if (selectedFile) {
      // Simulate AI optimization process
      setOptimizationResult({
        status: 'optimizing',
        message: 'Analyzing your resume for optimization...',
      });

      setTimeout(() => {
        setOptimizationResult({
          status: 'complete',
          suggestions: [
            'Use strong action verbs (e.g., "Managed," "Developed," "Implemented").',
            'Quantify your achievements with numbers and data (e.g., "Increased sales by 15%").',
            'Tailor your resume to each job description by using relevant keywords.',
            'Ensure consistent formatting and easy readability.',
            'Keep your resume concise, ideally one page for every 10 years of experience.',
          ],
        });
      }, 2000);
    } else {
      alert('Please select a resume file to upload.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Resume Upload & Optimization</h1>
      <div className="card mx-auto" style={{ maxWidth: '700px' }}>
        <div className="card-body">
          <p className="card-text">Upload your resume (PDF, DOCX) and let our AI (simulated) provide optimization suggestions.</p>
          <div className="mb-3">
            <label htmlFor="resumeFile" className="form-label">Upload Resume</label>
            <input 
              className="form-control" 
              type="file" 
              id="resumeFile" 
              accept=".pdf,.doc,.docx" 
              onChange={handleFileChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleOptimizeResume} disabled={!selectedFile}>
            Optimize Resume
          </button>

          {optimizationResult && optimizationResult.status === 'optimizing' && (
            <div className="alert alert-info mt-3">
              {optimizationResult.message}
            </div>
          )}

          {optimizationResult && optimizationResult.status === 'complete' && (
            <div className="mt-3">
              <h5>Optimization Suggestions:</h5>
              <ul className="list-group list-group-flush">
                {optimizationResult.suggestions.map((suggestion, index) => (
                  <li key={index} className="list-group-item">{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
