import React, { useState } from 'react';

const ResumeRewriter = () => {
  const [originalResume, setOriginalResume] = useState('');
  const [rewrittenResume, setRewrittenResume] = useState('');
  const [companyKeywords, setCompanyKeywords] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [optimizationStatus, setOptimizationStatus] = useState(null); // Added this state

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setOptimizationStatus(null); // Clear previous status

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setOriginalResume(e.target.result);
      };
      reader.readAsText(file);
    } else {
      setOriginalResume('');
    }
  };

  const rewriteResume = () => {
    setOptimizationStatus('optimizing'); // Set status to optimizing
    setRewrittenResume(''); // Clear previous rewritten resume

    let contentToRewrite = originalResume;
    if (selectedFile && originalResume) {
      contentToRewrite = originalResume; // Use content from file if uploaded
    } else if (!originalResume) {
      alert('Please paste your resume content or upload a file first.');
      setOptimizationStatus(null);
      return;
    }

    // Simple simulation of AI rewriting based on keywords
    let rewritten = contentToRewrite;
    const keywords = companyKeywords.toLowerCase().split(',').map(k => k.trim());

    const replacements = {
      "managed": ["led", "oversaw", "directed"],
      "developed": ["engineered", "designed", "created"],
      "implemented": ["executed", "deployed", "launched"],
      "assisted": ["collaborated with", "supported"],
      "responsible for": ["spearheaded", "drove", "orchestrated"],
    };

    // Apply general improvements
    for (const genericTerm in replacements) {
      const regex = new RegExp(`\\b${genericTerm}\\b`, 'gi');
      rewritten = rewritten.replace(regex, (match) => {
        const options = replacements[genericTerm];
        return options[Math.floor(Math.random() * options.length)];
      });
    }

    // Incorporate company-specific keywords
    if (keywords.length > 0 && keywords[0] !== '') {
      keywords.forEach(keyword => {
        if (!rewritten.toLowerCase().includes(keyword)) {
          // Simple insertion if keyword not present
          const sentences = rewritten.split('. ');
          if (sentences.length > 1) {
            rewritten = sentences[0] + '. ' + `(Incorporated ${keyword} skill). ` + sentences.slice(1).join('. ');
          } else {
            rewritten += ` (Incorporated ${keyword} skill).`;
          }
        }
      });
    }

    setTimeout(() => {
      setRewrittenResume(rewritten);
      setOptimizationStatus('complete');
    }, 1500); // Simulate processing time
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">AI Resume Rewriter</h1>
      <div className="card mx-auto" style={{ maxWidth: '900px' }}>
        <div className="card-body">
          <p className="card-text">Upload your resume (TXT, PDF, DOCX) or paste its content below. Optionally, add company-specific keywords to tailor your resume.</p>
          
          <div className="mb-3">
            <label htmlFor="resumeFile" className="form-label">Upload Resume File</label>
            <input 
              className="form-control" 
              type="file" 
              id="resumeFile" 
              accept=".txt,.pdf,.doc,.docx" 
              onChange={handleFileChange}
            />
            <small className="text-muted">Note: For PDF/DOCX, content extraction is simulated. For best results, paste text directly.</small>
          </div>

          <div className="mb-3">
            <label htmlFor="originalResume" className="form-label">Or Paste Your Resume Content Here</label>
            <textarea
              className="form-control"
              id="originalResume"
              rows="10"
              value={originalResume}
              onChange={(e) => setOriginalResume(e.target.value)}
              placeholder="Paste your resume text here..."
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="companyKeywords" className="form-label">Company/Job Keywords (comma-separated, optional)</label>
            <input
              type="text"
              className="form-control"
              id="companyKeywords"
              value={companyKeywords}
              onChange={(e) => setCompanyKeywords(e.target.value)}
              placeholder="e.g., Agile, Cloud Computing, Data Analysis"
            />
          </div>

          <button className="btn btn-primary mb-3" onClick={rewriteResume}>
            Rewrite Resume
          </button>

          {optimizationStatus === 'optimizing' && (
            <div className="alert alert-info mt-3">
              Analyzing and rewriting your resume...
            </div>
          )}

          {optimizationStatus === 'complete' && rewrittenResume && (
            <div className="mt-4">
              <h5>Rewritten Resume:</h5>
              <textarea
                className="form-control"
                rows="10"
                value={rewrittenResume}
                readOnly
              ></textarea>
              <small className="text-muted">This is a simulated rewrite. Always review and refine the output.</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeRewriter;
