import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
// import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const x = useControls("HackerRoom", {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    scale: {
      value: 1,
      min: 0.1,
      max: 10,
    },
  });
  const targetControls = useControls("Target", {
    targetX: { value: 1, min: -10, max: 10 },
    targetY: { value: 1, min: -10, max: 10 },
    targetZ: { value: 1, min: -10, max: 10 },
  });
  // const isMobile = useMediaQuery({maxWidth: 768})

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Steve<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient ">
          Studying Front-End Development
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full mt-10">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              position={[0, -3, -8]}
              rotation={[0.4, -0.7, 0]}
              scale={1}
            />
            <group>
              <Target position={[-8.0, -6.0, 3.0]} />
              <ReactLogo position={[10,4,-5]}/>
            </group>
            <ambientLight color="purple" intensity={1} />
            <directionalLight
              color="beige"
              position={[-10, 7, 7]}
              intensity={6}
              castShadow
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
