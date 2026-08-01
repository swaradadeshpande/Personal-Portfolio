'use client'

import { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function RotatingGlobe() {
  const meshRef = useRef<THREE.Group>(null)
  const { mouse } = useThree()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0003
      meshRef.current.rotation.x = mouse.y * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      {/* Wireframe sphere */}
      <mesh>
        <icosahedronGeometry args={[2, 4]} />
        <meshPhongMaterial
          wireframe
          color="#22d3ee"
          opacity={0.3}
          transparent
          emissive="#22d3ee"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Solid inner sphere */}
      <mesh scale={0.95}>
        <icosahedronGeometry args={[2, 4]} />
        <meshPhongMaterial
          color="#0a0e14"
          opacity={0.8}
          transparent
          wireframe={false}
        />
      </mesh>

      {/* Grid lines */}
      <gridHelper args={[4, 8]} position={[0, 0, 0]} />

      {/* Orbiting nodes */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2
        const x = Math.cos(angle) * 3
        const z = Math.sin(angle) * 3
        return (
          <mesh key={i} position={[x, Math.sin(i * 0.5) * 1.5, z]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial
              color="#ff9933"
              emissive="#ff9933"
              emissiveIntensity={0.8}
            />
          </mesh>
        )
      })}
    </group>
  )
}

export default function Globe3D() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden glass-card">
      <Suspense fallback={<div className="w-full h-full bg-glass-card" />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.8} color="#22d3ee" />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ff9933" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />

          <RotatingGlobe />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={2}
            dampingFactor={0.05}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
