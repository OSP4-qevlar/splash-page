import { React, useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  Mesh,
  Shape,
  Vector3,
  BufferGeometry,
  ExtrudeGeometry,
  LineSegments,
  WireframeGeometry,
  LineBasicMaterial,
} from "three";
import * as THREE from "three";
import { Wireframe } from "@react-three/drei";
import { WireframeMaterial } from "@react-three/drei/materials/WireframeMaterial";

const HexagonGeometry = () => {
  //declare size variable, initialize to 10
  const size = 10;

  //we're utilizing use memo to optimize time between re-renders
  const shape = useMemo(() => {
    //create new shape
    const shape = new THREE.Shape();

    //
    const sides = 6;
    let Xcenter = 0;
    let Ycenter = 0;

    /*here are we setting the starting point of the shape
  we are setting the initial position of drawing position 
  to the first vertex of the hexagon 

  Math.cos- calculates the cosine of an angle. Determine x-coordinate
  of vertex based on the angle around the center 

  Math.sin - calculates the sine of an angle. In hexagon creation
  its used to determine the y-coordinate of each vertex based on the angle
  around the center
  
  Xcenter + size * Math.cos(0)- calculates the first x-coordinate
  of vertex based on the center('Xcenter') and the size of hexagon

  YCenter + size * Math.sin(0)- calculates the first y-coordinate
  of vertex bassed on the center('Ycenter') and size of hexagon
  
  */
    shape.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

    for (let i = 1; i <= sides; i++) {
      //here we are connecting the starting point to other vertices
      shape.lineTo(
        Xcenter + size * Math.cos((i * 2 * Math.PI) / sides),

        Ycenter + size * Math.sin((i * 2 * Math.PI) / sides)
      );
    }
    return shape;
  }, [size]);
  const settings = useMemo(
    () => ({
      // wireframe: true,
      steps: 2,
      // autoRotate: true,
      depth: 10,
      bevelEnabled: true,
      bevelThickness: -0.2,
      bevelSize: 0.5,
      bevelOffset: 0,
      bevelSegments: 18,
    }),
    []
  );

  const geometry = new ExtrudeGeometry(shape, settings);

  const hexRef = useRef();

  useFrame(() => {
    hexRef.current.rotation.y += 0.0002;
  });

  return (
    <>
      <mesh ref={hexRef} geometry={geometry} rotation={[0, 0, 0]}>
        <meshBasicMaterial
          color={"#FFFFFF"}
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </>
  );
};

export default HexagonGeometry;
