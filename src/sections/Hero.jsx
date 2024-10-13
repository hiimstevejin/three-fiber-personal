import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import { useMediaQuery } from "react-responsive";
import Button from "../components/Button";
// import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={[0, -3, -8]}
                rotation={[0.4, -0.7, 0]}
                scale={1}
              />
              <group>
                <Target position={[-10.0, -6.0, 3.0]} />
                <ReactLogo position={[11.0, 4.0, 1.0]} />
                <Cube position={[11.0, -5.0, 1.0]} />
                <Rings position={[-20.0, 6.0, 3.0]} />
              </group>
            </HeroCamera>

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
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
    <Button name="Ready to Work" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  );
}
