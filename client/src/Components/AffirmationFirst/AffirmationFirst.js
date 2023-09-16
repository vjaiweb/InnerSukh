import React, { useEffect, useState } from 'react';
import "./AffirmationFirst.css"

const AffirmationFirst = () => {
    const [text, setText] = useState('');
    const affirmationText = "Empower Your Day with Affirmations";

    useEffect(() => {
        const type = async () => {
            for (let i = 0; i < affirmationText.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust typing speed
                setText(affirmationText.slice(0, i + 1));
            }
        };
        type();
    }, []);

    return (
        <div className="typing-animation-container">
            <div className="typing-animation">
                <p className="cursive-text">" {affirmationText} "</p>
            </div>
        </div>
    );
}

export default AffirmationFirst
