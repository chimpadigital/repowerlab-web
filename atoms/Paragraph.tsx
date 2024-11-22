import React from 'react';

const Paragraph = ({
    text,
    className,
    textAccent,
    strongClass,
}: {
    text: string;
    strongClass?: string;
    className?: string;
    textAccent?: string;
}) => {
    // Function to parse the text and format it
    const parseText = (text: string) => {
        // Split the text by newlines first, then handle each part
        return text.split('\n').map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
                {line.split(/(\*\*.*?\*\*|__.*?__)/g).map((part, index) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        // Remove the ** and wrap in strong tag
                        return (
                            <strong
                                className={`font-bold ${strongClass}`}
                                key={index}
                            >
                                {part.slice(2, -2)}
                            </strong>
                        );
                    }
                    if (part.startsWith('__') && part.endsWith('__')) {
                        // Remove the __ and wrap in span tag
                        return (
                            <span key={index} className={textAccent}>
                                {part.slice(2, -2)}
                            </span>
                        );
                    }
                    return part; // Return the text as is
                })}
                {/* Add a <br /> for each newline, except the last line */}
                {lineIndex < text.split('\n').length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return <p className={className}>{parseText(text)}</p>;
};

export default Paragraph;