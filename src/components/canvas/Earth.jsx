import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import Loader from '../Loader'
const Earth=()=>{
  const earth=useGLTF('./planet/scene.gltf')
  return(
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      position-x={0}
      />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      camera={{
        fov:45,
        near:0.1,
        far:200,
        position:[-4,3,6],
      }}
      shadows
      gl={{preserveDrawingBuffer:true}}
      frameloop='demand'
    >
      <Suspense fallback={<Loader/>}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={10}
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Earth />
      </Suspense>

    </Canvas>
  )
}

export default EarthCanvas;