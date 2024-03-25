import { useThree } from '@react-three/fiber';

const CameraController = () => {
  //extract camera and webGL renderer from use three
  const { camera } = useThree();
  const camera1 = camera;
  camera1.position.z = -5;
  camera1.position.x = -5;
  camera1.position.y = 11;
  camera1.lookAt(2, 0, 1);
};
export default CameraController;
