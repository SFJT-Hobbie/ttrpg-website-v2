import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count }) => {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { viewport } = useThree();

  // Initialize particles with random positions spread across the entire screen for immediate full coverage
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const position = new THREE.Vector3(
        Math.random() * viewport.width - viewport.width / 2, // Spread across full width, including middle and left
        Math.random() * viewport.height - viewport.height / 2, // Spread across full height
        Math.random() * 20 - 10 // Slight depth variation
      );
      const speedX = 0.05 + Math.random() * 0.01; // Horizontal drift speed (leftward)
      const speedY = 0.02 + Math.random() * 0.01; // Downward fall speed (slower for gentle drift)
      const phase = Math.random() * Math.PI * 2; // Phase for oscillation
      const factor = 0.5 + Math.random(); // Factor for wobble frequency
      const size = 0.3 + Math.random() * 0.2; // Varying particle size
      temp.push({ position, speedX, speedY, phase, factor, size });
    }
    return temp;
  }, [count, viewport]);

  // Animate particles with drift, fall, and reset logic for continuous looping
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    particles.forEach((particle, i) => {
      const { position, speedX, speedY, phase, factor, size } = particle;

      // Apply horizontal drift (leftward) and downward fall
      position.x -= speedX;
      position.y -= speedY;

      // Add subtle oscillations for realistic wobble (wind effect)
      position.x -= Math.sin(time * factor + phase) * 0.02; // Slight left-right wobble, biased left
      position.y += Math.cos(time * factor + phase) * 0.01; // Up-down wobble

      // Reset if particle exits left edge (recycle to right with random offset for seamless flow)
      if (position.x < -viewport.width / 2) {
        position.x = viewport.width / 2 + Math.random() * (viewport.width / 2);
        position.y = Math.random() * viewport.height - viewport.height / 2; // Randomize y on reset to maintain density
      }

      // Reset if particle exits bottom edge (recycle to top with random offset)
      if (position.y < -viewport.height / 2) {
        position.y = viewport.height / 2 + Math.random() * (viewport.height / 2);
        position.x = Math.random() * viewport.width - viewport.width / 2; // Randomize x on reset to maintain density
      }

      // Update dummy object for instanced rendering
      dummy.position.copy(position);
      dummy.scale.set(size, size, size);
      dummy.rotation.set(time * factor, time * factor, time * factor); // Gentle rotation for realism
      dummy.updateMatrix();

      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <planeGeometry args={[1, 1]} /> {/* Simple plane for ash/snow flakes */}
      <meshBasicMaterial color="#aaaaaa" transparent opacity={0.6} depthWrite={false} side={THREE.DoubleSide} /> {/* Grayish, semi-transparent for ash */}
    </instancedMesh>
  );
};

export default Particles;