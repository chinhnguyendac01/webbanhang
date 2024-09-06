import React, { useState } from 'react';
import Input from '../common/input/Input';

const QnAForm = () => {
    const [qnaPairs, setQnaPairs] = useState([{ question: '', answer: '' }]);

    const handleAddPair = () => {
        setQnaPairs([...qnaPairs, { question: '', answer: '' }]);
    };

    const handleInputChange = (index, type, value) => {
        const updatedPairs = [...qnaPairs];
        updatedPairs[index][type] = value;
        setQnaPairs(updatedPairs);
    };

    return (
        <div>
            <div>
                <label> Group + icon</label>
                <input className='custom_input'></input>
            </div>

            <div>
                Question & Answer
                {qnaPairs.map((pair, index) => (
                    <div key={index}>
                        <div>
                            <label> Question</label>
                            <input
                                className='custom_input'
                                value={pair.question}
                                onChange={(e) => handleInputChange(index, 'question', e.target.value)}
                            />
                        </div>
                        <div>
                            <label> Answer</label>
                            <input
                                className='custom_input'
                                value={pair.answer}
                                onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={handleAddPair}>
                Add more Question - Answer
            </button>
        </div>
    );
};

export default QnAForm;
