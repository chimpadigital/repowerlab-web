"use client"

import React from 'react'
import { Canvas } from '@react-three/fiber'
import WindMill from './WindMill'

export default function ThreeContainer() {
  return (
    <div id="canvas-container" className=''> 
        <Canvas>
            <WindMill />
        </Canvas>
    </div>
  )
}
