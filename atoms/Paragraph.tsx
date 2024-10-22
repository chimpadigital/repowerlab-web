import React from 'react';

const Paragraph = ({ text, className, textAccent }: { text: string, className?: string, textAccent?: string }) => {
    // Function to parse the text and format it
    const parseText = (text: string) => {
        // Split the text by spaces to handle each word/phrase
        const parts = text.split(/(\*\*.*?\*\*|__.*?__)/g);

        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                // Remove the ** and wrap in strong tag
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('__') && part.endsWith('__')) {
                // Remove the __ and wrap in span tag
                return <span key={index} className={textAccent}>{part.slice(2, -2)}</span>;
            }
            return part; // Return the text as is
        });
    };

    return <p className={className}>{parseText(text)}</p>;
};

export default Paragraph;