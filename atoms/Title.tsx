import React from 'react'

export default function Title({ title, className, h1 = false }: { title: string, className: string, h1?: boolean }) {
    return (
        <>
            {
                h1 ?
                    <h1 className={className}>
                        {title.split("\\n").map((line, index) => (
                            <React.Fragment key={index}>
                                {line.trim()}
                                {index < title.split("\\n").length - 1 && <br />}
                            </React.Fragment>
                        ))}

                    </h1>
                    :
                    <h2 className={className}>
                        {title.split("\\n").map((line, index) => (
                            <React.Fragment key={index}>
                                {line.trim()}
                                {index < title.split("\\n").length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </h2>
            }
        </>
    )
}
