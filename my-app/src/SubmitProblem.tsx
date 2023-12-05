import React, { useState, FormEvent } from 'react';

interface Props {
    addProblem: (description: string) => Promise<void>;
}

const SubmitProblem: React.FC<Props> = ({ addProblem }) => {
    const [problem, setProblem] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await addProblem(problem);
            setProblem('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Problem Description:
                <textarea value={problem} onChange={e => setProblem(e.target.value)} required />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default SubmitProblem;