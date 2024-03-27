import { useRef } from "react";
import { TransformControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Sphere(props) {
  const ref = useRef();
  useFrame((_, delta) => {
    // console.log(number);
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 1 * delta;
  });
  return (
    <>
      <mesh position={props.position} receiveShadow castShadow ref={ref}>
        <sphereGeometry />
        <meshStandardMaterial color={props.color} />
      </mesh>
      <TransformControls object={ref} />
    </>
  );
}
