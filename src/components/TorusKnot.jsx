import { TransformControls } from "@react-three/drei";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
export default function TorusKnot(props) {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 1 * delta;
  });
  return (
    <>
      <mesh position={props.position} ref={ref}>
        <torusKnotGeometry />
        <meshStandardMaterial color={props.color} />
      </mesh>
      <TransformControls object={ref} />
    </>
  );
}
