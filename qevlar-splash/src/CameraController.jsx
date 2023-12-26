import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

const CameraController = () => {
  //extract camera and webGL renderer from use three
    const { camera, gl } = useThree();
    const camera1 = camera; 
    camera1.position.z = -5; 
    camera1.position.x = -5; 
    camera1.position.y = 11; 
    camera1.lookAt(2, 0, 1); 
  };
  export default CameraController