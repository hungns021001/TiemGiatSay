'use client';

import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function WasherMachine() {
  return (
    <group rotation={[0.2, 0.8, 0]}>
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshStandardMaterial color="#101c2a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.05]}>
        <cylinderGeometry args={[1.2, 1.2, 1.6, 32]} />
        <meshStandardMaterial color="#0f1f2d" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.7, 1.3]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.12, 16, 60]} />
        <meshStandardMaterial color="#7dbbf9" emissive="#7dbbf9" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, -0.15, 1.32]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.7, 32]} />
        <meshStandardMaterial color="#bfe7ff" emissive="#3b82f6" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function Bubble({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.12, 24, 24]} />
      <meshStandardMaterial color="#cfe8ff" emissive="#73d6ff" emissiveIntensity={0.4} transparent opacity={0.9} />
    </mesh>
  );
}

function LaundryScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 5, 5]} intensity={1.6} />
      <pointLight position={[-3, -1, 2]} intensity={1.2} color="#7dd3fc" />

      <Float speed={2} rotationIntensity={0.35} floatIntensity={1.5}>
        <WasherMachine />
      </Float>

      {[-1.8, -1.1, -0.4, 0.5, 1.4].map((x, index) => (
        <Bubble key={x} position={[x, index * 0.5 - 0.8, 2.5 + (index % 2) * 0.6]} />
      ))}
    </Canvas>
  );
}

export default function ThreeLaundryScene() {
  return <LaundryScene />;
}
