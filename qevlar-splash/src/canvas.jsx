import { Canvas, extend, useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import{Text} from '@react-three/drei'
import HexagonGeometry from './Hexagon'

import CameraController from './CameraController'




const BigPicture = () =>{
    const hexRef = useRef();


    
    return(
        <Canvas style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>

  
            <mesh rotation={[-Math.PI/2, 0, 0]} ref={hexRef}>
            <ambientLight intensity={1.05} />
            <directionalLight color='black' position={[10, 20, 5]} />

                <CameraController />
                <HexagonGeometry args={[5, 5, 64, 64]}/>
                
                {/* <sphereGeometry /> */}
                <meshStandardMaterial wireframe />
                {/* <meshLambertMaterial color={'#C4B7CB'} /> */}
                
                
            </mesh>

        </Canvas>
    )
}

export default BigPicture; 