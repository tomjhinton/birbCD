
import { extend, useLoader } from "@react-three/fiber";
import { shaderMaterial, useTexture } from "@react-three/drei";
import * as THREE from 'three'

import fragmentShaderFirst from './shaders/first/fragment.js'


import fragmentShaderSecond from './shaders/second/fragment.js'

import fragmentShaderThird from './shaders/third/fragment.js'

import fragmentShaderFourth from './shaders/fourth/fragment.js'

import vertexShader from './shaders/shared/vertex.js'



const FirstMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: Math.PI * .5,
      uTexture: null
      
    },
    vertexShader,
    fragmentShaderFirst
  );
  
  extend({ FirstMaterial });

  export { FirstMaterial}


  const SecondMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: Math.PI * .5,
      uTexture: null

   
      
    },
    vertexShader,
    fragmentShaderSecond
  );
  
  extend({ SecondMaterial });

  export { SecondMaterial}



  const ThirdMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: Math.PI * .5,
      uTexture: null

   
      
    },
    vertexShader,
    fragmentShaderThird
  );
  
  extend({ ThirdMaterial });

  export { ThirdMaterial}




  const FourthMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: Math.PI * .5,
      uTexture: null

   
      
    },
    vertexShader,
    fragmentShaderFourth
  );
  
  extend({ FourthMaterial });

  export { FourthMaterial}

