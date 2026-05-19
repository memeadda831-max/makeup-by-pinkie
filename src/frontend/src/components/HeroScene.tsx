import {
  Float,
  MeshDistortMaterial,
  Sphere,
  Stars,
  Trail,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Floating distorted sphere with shimmer
function FloatingSphere({
  position,
  color,
  scale,
  speed,
  distort,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
  distort: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08 * speed;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12 * speed;
    // Gentle bob
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.25;
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere
        ref={meshRef}
        args={[1, 64, 64]}
        position={position}
        scale={scale}
      >
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={1.5}
          roughness={0.05}
          metalness={0.5}
          transparent
          opacity={0.65}
        />
      </Sphere>
    </Float>
  );
}

// Rose petal — thin plane with pink/gold color, drifting down
function RosePetal({
  position,
  rotationOffset,
  idx,
}: {
  position: [number, number, number];
  rotationOffset: number;
  idx: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const speed = 0.12 + (idx % 5) * 0.02;
  const amplitude = 1.2 + (idx % 3) * 0.4;
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed + rotationOffset;
    // Drift downward, loop back to top
    const yBase = position[1] - ((state.clock.elapsedTime * 0.4 * speed) % 14);
    meshRef.current.position.set(
      position[0] + Math.sin(t) * amplitude,
      yBase,
      position[2] + Math.cos(t * 0.7) * 0.5,
    );
    meshRef.current.rotation.x = t * 0.8;
    meshRef.current.rotation.z = t * 0.5;
  });
  const color =
    idx % 3 === 0 ? "#e8b4a0" : idx % 3 === 1 ? "#d4a76e" : "#f0d0b8";
  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[0.22, 0.32, 1, 1]} />
      <meshStandardMaterial
        color={color}
        roughness={0.4}
        metalness={0.2}
        transparent
        opacity={0.75}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Makeup brush cylinder — golden, rotating elegantly
function MakeupBrush({
  position,
  speed,
  idx,
}: {
  position: [number, number, number];
  speed: number;
  idx: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * speed;
    groupRef.current.rotation.z = t * 0.4;
    groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.3;
    groupRef.current.position.y = position[1] + Math.sin(t * 0.6 + idx) * 0.5;
    groupRef.current.position.x = position[0] + Math.cos(t * 0.4 + idx) * 0.3;
  });
  return (
    <group ref={groupRef} position={position}>
      {/* Brush handle */}
      <mesh rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.03, 0.05, 0.8, 12]} />
        <meshStandardMaterial
          color="#c8a64e"
          metalness={0.85}
          roughness={0.1}
          emissive="#7a5e20"
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Brush head */}
      <mesh position={[0, 0.48, 0]} rotation={[0, 0, Math.PI / 6]}>
        <coneGeometry args={[0.06, 0.2, 12]} />
        <meshStandardMaterial
          color="#e8c87a"
          metalness={0.6}
          roughness={0.3}
          emissive="#a07828"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
}

// Elegant floating torus / ring — bronze color
function FloatingTorus({
  position,
  speed,
  scale,
  idx,
}: {
  position: [number, number, number];
  speed: number;
  scale: number;
  idx: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = t * 0.5 + idx;
    meshRef.current.rotation.y = t * 0.3;
    meshRef.current.position.y =
      position[1] + Math.sin(t * 0.7 + idx * 1.2) * 0.4;
    meshRef.current.position.x =
      position[0] + Math.cos(t * 0.4 + idx * 0.8) * 0.25;
  });
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[0.5, 0.06, 16, 64]} />
      <meshStandardMaterial
        color="#b87333"
        metalness={0.9}
        roughness={0.08}
        emissive="#6b3e1a"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

// Orbiting sparkle particles around center
function SparkleOrbit() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 120;
  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 3 + Math.random() * 3.5;
      const layer = Math.floor(i / 30);
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5 + layer * 0.5;
      pos[i * 3 + 2] = Math.sin(angle) * r * 0.6;
      sz[i] = 3 + Math.random() * 8;
    }
    return { positions: pos, sizes: sz };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.05) * 0.15;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        </bufferGeometry>
        <pointsMaterial
          color="#e8c87a"
          size={0.06}
          sizeAttenuation
          transparent
          opacity={0.85}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

// Ambient gold dust — scattered fine particles
function GoldDust() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 300;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    pointsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#d4a840"
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}

// Orbiting ring of tiny spheres
function RingParticles() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 60;
  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 5.5 + Math.random() * 1.5;
      arr.push([
        Math.cos(angle) * r,
        (Math.random() - 0.5) * 2.5,
        Math.sin(angle) * r,
      ]);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.07;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.03) * 0.12;
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: particle positions are static
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshStandardMaterial
            color="#c8a46e"
            emissive="#c8a46e"
            emissiveIntensity={0.8}
            metalness={0.6}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

// Trailing sparkle comet
function CometTrail() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * 0.3;
    meshRef.current.position.x = Math.cos(t) * 4.5;
    meshRef.current.position.y = Math.sin(t * 1.3) * 2.5;
    meshRef.current.position.z = Math.sin(t * 0.7) * 2;
  });
  return (
    <Trail width={0.8} length={6} color="#e8c87a" attenuation={(t) => t * t}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#f5e0a0"
          emissiveIntensity={2}
        />
      </mesh>
    </Trail>
  );
}

export default function HeroScene() {
  // Petal start positions spread across scene
  const petalData = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        position: [
          (Math.random() - 0.5) * 14,
          4 + Math.random() * 8,
          (Math.random() - 0.5) * 4 - 2,
        ] as [number, number, number],
        rotationOffset: i * 0.7,
        idx: i,
      })),
    [],
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Lighting: warm golden ambient */}
      <ambientLight intensity={0.7} color="#f5e6d3" />
      <pointLight position={[6, 6, 5]} intensity={1.5} color="#d4a76a" />
      <pointLight position={[-6, -4, 3]} intensity={0.9} color="#8b5e3c" />
      <pointLight position={[0, 0, 7]} intensity={0.6} color="#fdf0e0" />
      <pointLight position={[4, -5, 2]} intensity={0.7} color="#c8906a" />

      {/* Star field — soft, warm */}
      <Stars
        radius={70}
        depth={35}
        count={500}
        factor={1.5}
        saturation={0}
        fade
        speed={0.3}
      />

      {/* Distorted floating spheres */}
      <FloatingSphere
        position={[-4, 1.2, -1.5]}
        color="#c8a46e"
        scale={1.3}
        speed={0.75}
        distort={0.45}
      />
      <FloatingSphere
        position={[4.2, -0.8, -2.5]}
        color="#8b5e3c"
        scale={1.0}
        speed={1.1}
        distort={0.55}
      />
      <FloatingSphere
        position={[0.5, 3, -3.5]}
        color="#e8d5b7"
        scale={0.65}
        speed={1.4}
        distort={0.35}
      />
      <FloatingSphere
        position={[-1.8, -2.5, -2]}
        color="#d4956a"
        scale={0.8}
        speed={0.85}
        distort={0.5}
      />
      <FloatingSphere
        position={[2.5, 2.5, -1.2]}
        color="#f0dcc0"
        scale={0.55}
        speed={1.7}
        distort={0.4}
      />
      <FloatingSphere
        position={[-3, -1, -3]}
        color="#b87333"
        scale={0.45}
        speed={2.0}
        distort={0.6}
      />

      {/* Rose petals drifting */}
      {petalData.map((p) => (
        <RosePetal key={p.idx} {...p} />
      ))}

      {/* Makeup brush cylinders */}
      <MakeupBrush position={[-5, 1.5, -1]} speed={0.5} idx={0} />
      <MakeupBrush position={[5, -1, -2]} speed={0.7} idx={1} />
      <MakeupBrush position={[-2.5, 3, -2.5]} speed={0.4} idx={2} />
      <MakeupBrush position={[3, 2.5, -1.5]} speed={0.6} idx={3} />

      {/* Floating tori / rings */}
      <FloatingTorus
        position={[-4.5, -2, -2]}
        speed={0.6}
        scale={1.2}
        idx={0}
      />
      <FloatingTorus position={[4, 2, -3]} speed={0.8} scale={0.9} idx={1} />
      <FloatingTorus position={[0, -3, -1.5]} speed={0.5} scale={0.7} idx={2} />
      <FloatingTorus position={[-2, 2.5, -4]} speed={1.0} scale={1.5} idx={3} />

      {/* Orbiting sparkle ring */}
      <SparkleOrbit />

      {/* Ambient gold dust */}
      <GoldDust />

      {/* Orbiting ring particles */}
      <RingParticles />

      {/* Comet trail */}
      <CometTrail />
    </Canvas>
  );
}
