"use client"

import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import WindMill from './WindMill'

export default function ThreeContainer() {
  useEffect(()=>{})
  return (
    <div id="canvas-container" className=''> 
        <Canvas>
            <WindMill />
        </Canvas>
    </div>
  )
}
