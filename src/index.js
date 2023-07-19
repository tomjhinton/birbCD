import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Html, useProgress } from '@react-three/drei'
// import { Perf } from 'r3f-perf'


const root = ReactDOM.createRoot(document.querySelector('#root'))



function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

root.render(
  <>
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 100,
            position: [ 0, 0, 20 ]
        } }
    >
        
        <Experience />
    </Canvas>
   
</>
    
)