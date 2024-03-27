import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Ground from "./components/Ground";
import { Stats, OrbitControls } from "@react-three/drei";
import Box from "./components/Box";
import Sphere from "./components/Sphere";
import TorusKnot from "./components/TorusKnot";

function App() {
  return (
    <Canvas
      camera={{
        fov: 70,
        near: 0.1,
        far: 100,
        position: [0, 4, 10],
      }}
      shadows
    >
      <ambientLight intensity={1} />
      {/* <directionalLight color="white" position={[0, 0, 5]} /> */}
      <spotLight
        intensity={500}
        distance={94}
        angle={0.45}
        penumbra={1}
        decay={2}
        focus={1}
        position={[0, 5, 10]}
        castShadow
      />
      <Box position={[-5, 0, 0]} color={0xdeeb34} />
      <Sphere position={[0, 0, 0]} color={0x347deb} />
      <TorusKnot position={[5, 0, 0]} color={0xdc34eb} />

      <mesh position={[0, -2, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry attach="geometry" args={[20, 20]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>

      <Ground />
      <Stats showPanel={0} />
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
