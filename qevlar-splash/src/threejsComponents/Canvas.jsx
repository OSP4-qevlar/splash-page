import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import HexagonGeometry from './Hexagon';

import CameraController from './CameraController';

const ThreeD = () => {
  const hexRef = useRef();

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    >
      <mesh rotation={[-Math.PI / 2, 0, 0]} ref={hexRef}>
        <ambientLight intensity={1.05} />
        <directionalLight color='black' position={[10, 20, 5]} />

        <CameraController />
        <HexagonGeometry args={[5, 5, 64, 64]} />

        <meshStandardMaterial wireframe />
      </mesh>
    </Canvas>
  );
};

export default ThreeD;
