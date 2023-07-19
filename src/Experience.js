import React, { useRef, useEffect, Suspense } from "react";
import { useGLTF , useTexture, useAnimations, Environment, Box, Sphere} from "@react-three/drei";
import { OrbitControls,   Html, useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import Title from "./Title/Title.js"
import { FirstMaterial, SecondMaterial, ThirdMaterial, FourthMaterial } from "./materials/materials";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";

import gsap from "gsap";


export default function Experience(props) {


  let matOptions = ['first', 'second', 'third', 'fourth']

  let positions = []
 

  useFrame(() => {

    if(positions[0].matRef.current){
      positions.map( (x) => {
        x.matRef.current.uniforms.uTime.value += 0.01;
      })
    }

      
    });



  var numRows = 5;
var rowHeight = 1.0; // Spacing between rows
var cubeSize = 1; // Size of each cube

// Loop to create and position cubes
for (var row = 0; row < numRows; row++) {
  var numCubes = numRows - row;
  var offset = (numCubes - 1) * cubeSize * 0.5; // Offset for centering the row

  for (var i = 0; i < numCubes; i++) {
    for (var j = 0; j < numCubes; j++) {
    

    positions.push({
      x:i * cubeSize - offset,
      y: row * rowHeight,
      z: (j * cubeSize - offset) +(j*.01),
      ref: useRef(),
      matRef: useRef(),
      material: matOptions[Math.floor(Math.random() * matOptions.length)]

    }) 
  }

}


}


  

  return (
    <>
        <OrbitControls makeDefault enableZoom={true} maxPolarAngle={Math.PI * .5}/>

        
    <Title />


    <Suspense>
        <Physics debug>

          {positions.map((x, index) => {
            return(
              <RigidBody colliders={"hull"} restitution={0} position={[x.x, x.y, x.z]} key={index} ref={x.ref} onPointerDown={ (e) =>{
                // console.log(e)
                x.ref.current.applyImpulse({ x: e.ray.direction.x*20, y: e.ray.direction.y*20, z: e.ray.direction.z*20 }, true)
                gsap.to(x.matRef.current.uniforms.u_progress, { duration: 3.5, value: x.matRef.current.uniforms.u_progress.value +(4 * Math.PI), delay: 0 })
                }}
                onPointerOver={ ()=>  document.body.style.cursor = 'pointer'}
onPointerLeave={ ()=>  document.body.style.cursor = 'auto'}>
            <Box  args={[1, 1, 1, 3, 3, 3]}   >
           {x.material == "first" && <firstMaterial side={THREE.DoubleSide} ref={x.matRef} />}
           {x.material == "second" && <secondMaterial side={THREE.DoubleSide} ref={x.matRef} />}
           {x.material == "third" && <thirdMaterial side={THREE.DoubleSide} ref={x.matRef} />}
           {x.material == "fourth" && <fourthMaterial side={THREE.DoubleSide} ref={x.matRef} />}
            </Box>
          </RigidBody>


            )
          })}
          
          <CuboidCollider position={[0, -1, 0]} args={[20, 0.5, 20]} />
        </Physics>
      </Suspense>
    

    
    </>
  );
}

