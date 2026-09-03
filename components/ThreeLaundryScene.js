'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';

function WasherMachine() {
  const machineRef = useRef();
  const drumRef = useRef();

  useFrame((_, delta) => {
    machineRef.current.rotation.y += delta * 0.55;
    machineRef.current.rotation.x = 0.16 + Math.sin(performance.now() / 1800) * 0.04;
    if (drumRef.current) drumRef.current.rotation.z += delta * 1.2; // lồng giặt tự xoay independent
  });

  return (
    <group ref={machineRef} rotation={[0.2, 0.8, 0]}>
      {/* Thân máy - hình hộp chữ nhật, không vuông đều */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.2, 2.4, 2]} />
        <meshStandardMaterial color="#f4f6f8" metalness={0.2} roughness={0.4} />
      </mesh>

      {/* Vòng viền cửa (torus) - giữ nguyên, đây đúng rồi */}
      <mesh position={[0, 0.1, 1.05]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.85, 0.15, 16, 60]} />
        <meshStandardMaterial color="#4b9f95" metalness={0.5} roughness={0.25} />
      </mesh>

      {/* Kính cửa tròn - xoay để mặt hướng thẳng ra camera */}
      <mesh position={[0, 0.1, 1.1]} rotation={[0, 0, 0]}>
        <circleGeometry args={[0.7, 32]} />
        <meshStandardMaterial color="#dff5ef" emissive="#7ccfba" emissiveIntensity={0.3} transparent opacity={0.85} />
      </mesh>

      {/* Lồng giặt bên trong - cylinder XOAY 90° quanh trục X để hướng ra camera, tự quay riêng */}
      <mesh ref={drumRef} position={[0, 0.1, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.3, 24]} />
        <meshStandardMaterial color="#b7ddd4" metalness={0.4} roughness={0.35} />
      </mesh>

      {/* Bảng điều khiển phía trên */}
      <mesh position={[0, 1.3, 0.5]}>
        <boxGeometry args={[2, 0.3, 0.6]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* Chân đế nhỏ 4 góc */}
      {[[-0.9, -1.25, 0.8], [0.9, -1.25, 0.8], [-0.9, -1.25, -0.8], [0.9, -1.25, -0.8]].map((pos, i) => (
        <mesh key={i} position={pos}>
          <cylinderGeometry args={[0.08, 0.08, 0.15, 12]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>
      ))}
    </group>
  );
}

function Bubble({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.12, 24, 24]} />
      <meshStandardMaterial color="#ffffff" emissive="#80d5bf" emissiveIntensity={0.3} transparent opacity={0.9} />
    </mesh>
  );
}

function LaundryScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 5, 5]} intensity={1.6} />
      <pointLight position={[-3, -1, 2]} intensity={1.2} color="#9ad8c7" />

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
