// React
import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const SubmitProblem: React.FC = () => {
    const [problem, setProblem] = useState<string>('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            await axios.post('/api/problems', { description: problem });
            setProblem('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Problem:
                <input type="text" value={problem} onChange={e => setProblem(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default SubmitProblem;
