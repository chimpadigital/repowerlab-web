import React from 'react'

export default function Title({ title, className }: { title: string, className: string }) {
    return (
        <h4 className={className}>
            {title.split("\\n").map((line, index) => (
                <React.Fragment key={index}>
                    {line.trim()}
                    {index < title.split("\\n").length - 1 && <br />}
                </React.Fragment>
            ))}
        </h4>
    )
}
