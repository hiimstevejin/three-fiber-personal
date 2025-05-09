import { Float, useGLTF } from '@react-three/drei'


const ReactLogo = (props) =>  {
  const { nodes, materials } = useGLTF(import.meta.env.BASE_URL + 'models/react.glb')
  return (
    <Float floatIntensity={1}>
      <group position={[8,8,0]}scale={0.3} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.07935, 0.18102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39,0.39,0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload(import.meta.env.BASE_URL + 'models/react.glb')
export default ReactLogo