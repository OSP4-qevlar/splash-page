import { Canvas, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import{Text} from '@react-three/drei'

import CameraController from './CameraController'


const BigPicture = () =>{
    
    return(
        <Canvas style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <mesh>
            <ambientLight intensity={1.05} />
            <directionalLight color='black' position={[10, 20, 5]} />

                {/* <CameraController /> */}
                < />
                <meshStandardMaterial wireframe />
                
                
            </mesh>

        </Canvas>
    )
}

export default BigPicture; 