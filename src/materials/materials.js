
import { extend, useLoader } from "@react-three/fiber";
import { shaderMaterial, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import vertexShaderFirst from './shaders/first/vertex.js'
import fragmentShaderFirst from './shaders/first/fragment.js'


import vertexShaderSecond from './shaders/second/vertex.js'
import fragmentShaderSecond from './shaders/second/fragment.js'

import vertexShaderThird from './shaders/third/vertex.js'
import fragmentShaderThird from './shaders/third/fragment.js'

import vertexShaderFourth from './shaders/fourth/vertex.js'
import fragmentShaderFourth from './shaders/fourth/fragment.js'





const FirstMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: Math.PI * .5,
      uTexture: null
      
    },
    vertexShaderFirst,
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
    vertexShaderSecond,
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
    vertexShaderThird,
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
    vertexShaderFourth,
    fragmentShaderFourth
  );
  
  extend({ FourthMaterial });

  export { FourthMaterial}

