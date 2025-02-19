import React, { useState } from 'react';
import 'ace-builds/src-noconflict/theme-textmate';

function GenerateUserStoryToTestcase() {
  const [userStory, setUserStory] = useState('');
  const [acceptanceCriteria, setAcceptanceCriteria] = useState('');
  const [testCases, setTestCases] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Generate Test Cases
  async function handleGenerateTests() {
    if (!userStory.trim()) {
      alert('Please enter a user story.');
      return;
    }
    if (!acceptanceCriteria.trim()) {
      alert('Please enter Acceptance Criteria.');
      return;
    }
    setIsLoading(true);
    try {
      const requestBody = { userStoryDetails: userStory, acceptanceCriteriaDetails: acceptanceCriteria };
      const response = await fetch('http://localhost:8080/api/generateTestCases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        let errMsg = await response.text();
        alert('Generate Tests failed: ' + errMsg);
        return;
      }
      const generatedTestCases = await response.text();
      setTestCases(generatedTestCases);
    } catch (err) {
      console.error(err);
      alert('Error generating tests: ' + err);
    } finally {
      setIsLoading(false);
    }
  }

  // Download Test Cases as CSV
  function handleDownloadCSV() {
    if (!testCases.trim()) {
      alert('No test cases available to download.');
      return;
    }
    const csvContent = 'data:text/csv;charset=utf-8,' + encodeURIComponent(testCases.replace(/\n/g, '\r\n'));
    const link = document.createElement('a');
    link.setAttribute('href', csvContent);
    link.setAttribute('download', 'test_cases.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="main-content" style={{ padding: '20px' }}>
      <h2>Generate Test Cases For User Story</h2>
      
      <div className="section">
        <h4>User Story</h4>
        <textarea
          rows="5"
          style={{ width: '90%', fontSize: '16px', padding: '10px' }}
          value={userStory}
          onChange={(e) => setUserStory(e.target.value)}
          placeholder="Enter user story here..."
        />
      </div>

      <div className="section">
        <h4>Acceptance Criteria</h4>
        <textarea
          rows="5"
          style={{ width: '90%', fontSize: '16px', padding: '10px' }}
          value={acceptanceCriteria}
          onChange={(e) => setAcceptanceCriteria(e.target.value)}
          placeholder="Enter Acceptance Criteria here..."
        />
      </div>
      
      <button onClick={handleGenerateTests} disabled={isLoading} style={{ marginTop: '10px', padding: '10px 20px' }}>
        {isLoading ? 'Generating...' : 'Generate Test Cases'}
      </button>
      
      <div className="section" style={{ marginTop: '20px' }}>
        <h4>Generated Test Cases</h4>
        <textarea
          rows="15"
          style={{ width: '90%', fontSize: '16px', padding: '10px' }}
          value={testCases}
          readOnly
          placeholder="Generated test cases will appear here..."
        />
      </div>
      
      <button onClick={handleDownloadCSV} style={{ marginTop: '10px', padding: '10px 20px' }}>
        Download CSV
      </button>
    </div>
  );
}

export default GenerateUserStoryToTestcase;