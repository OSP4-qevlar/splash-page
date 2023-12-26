import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text3D } from '@react-three/drei/core/Text3D';
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls


const DosAttackVisualization = () => {
    const groupRef = useRef();
  
    console.log('t3d', Text3D)
    return (
        <Canvas>
        <group ref={groupRef}>
            <mesh position={[0, 0, 0]}>
              
           <boxGeometry />
          </mesh>
        </group>
      </Canvas>
  
    );
  };
  
  export default DosAttackVisualization;