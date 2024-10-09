"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import "./word.css"

export default function WordAnimated({ text }: { text: string }) {
    const element = useRef(null)
    const [words, setWords] = useState<any>(null)

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start .85', 'start .35']
    })
    useEffect(() => {
        if (text) setWords(text.split(" "))
    }, [])

    return (
        <p
            ref={element}
            className='paragraph font-light'>
            {
                words && words.map((word: any, i: any) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length)
                    return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                })
            }
        </p>
    )
}

function Word({ children, range, progress }: any) {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <span className='word font-light'>
            <span className="shadow font-light">{children}</span>
            <motion.span
                style={{ opacity }} >
                {children}
            </motion.span>
        </span>
    )
}