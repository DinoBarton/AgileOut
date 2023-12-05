import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Problem {
    id: number;
    description: string;
  }
  const ProblemList: React.FC = () => {
    const [problems, setProblems] = useState<Problem[]>([]);
    useEffect(() => {
      const fetchProblems = async () => {
        try {
          const response = await axios.get('/api/problems');
          setProblems(response.data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchProblems();
    }, []);
    return (
      <div>
        {problems.map(problem => (
          <div key={problem.id}>
            <h2>Problem {problem.id}</h2>
            <p>{problem.description}</p>
          </div>
        ))}
      </div>
    );
  };
  export default ProblemList;