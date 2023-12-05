import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubmitProblem from './SubmitProblem';

interface Problem {
  id: number;
  description: string;
}

const App: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const response = await axios.get('/api/problems');
      console.log('Response data:', response.data); // Add this line
      setProblems(response.data);
      console.log('Problems state:', problems); // Add this line
    } catch (err) {
      console.error(err);
    }
  };

  const addProblem = async (description: string) => {
    try {
      await axios.post('/api/problems', { description });
      fetchProblems();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <h1>Problem Submission</h1>
      <SubmitProblem addProblem={addProblem} />
      <h2>Problems</h2>
      {problems.map(problem => (
        <div key={problem.id}>
          <h3>Problem {problem.id}</h3>
          <p>{problem.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;