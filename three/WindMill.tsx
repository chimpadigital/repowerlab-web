"use client"
import { useLoader, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function WindMill() {

    const model = useLoader(GLTFLoader, './molinoviento2.glb')
    console.log(model.nodes.Palas)
    // Reference to the Palas geometry
    const palasRef = useRef<any>();

    // Animate the Palas rotation
    useFrame(() => {
        if (palasRef.current) {
             palasRef.current.rotation.x += 0.002; // Adjust the rotation speed here
        }
    });

    return (
        <>
            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <primitive
                object={model.scene}
                scale={0.25}
                rotation={[1.5, 0, -2]}
                position={[-2, -.2, -6]}
                // Aseguramos que las palas estén referenciadas y se puedan animar
                ref={(ref: any) => {
                    if (ref) {
                        palasRef.current = ref.getObjectByName('Palas'); // Buscar el nodo por nombre
                    }
                }}
            />
        </>
    )
}
