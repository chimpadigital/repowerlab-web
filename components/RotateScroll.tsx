"use client"

import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'



export default function RotateScroll({ children, rotateNumber = 360 }: any) {
    const ref = useRef<any>()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start .85', 'start .35']
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [0, rotateNumber])

    useEffect(() => {
        rotate.on('change', (e) => {
            console.log(e)
        })
        scrollYProgress.on('change', (e) => {
            console.log(e)
        })
    }, [])
    return (
        <motion.div ref={ref} style={{ rotate }}>{children}</motion.div>
    )
}
