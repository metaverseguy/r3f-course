import { useRef } from "react";
import { TransformControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Box(props) {
  const ref = useRef();
  let number = 0;
  useFrame((_, delta) => {
    // console.log(number);
    number += 1 * delta;
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 1 * delta;
  });
  return (
    <>
      <mesh position={props.position} receiveShadow castShadow ref={ref}>
        <boxGeometry />
        <meshStandardMaterial color={props.color} />
      </mesh>
      <TransformControls object={ref} />
    </>
  );
}
