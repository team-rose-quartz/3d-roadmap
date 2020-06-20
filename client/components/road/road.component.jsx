import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import model from './road.gltf'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, model)
  return (
    <group ref={group} {...props} dispose={null}>
      {/* <mesh receiveShadow material={materials.Black} geometry={nodes.Asphalt.geometry} /> */}
      <mesh material={materials.White} geometry={nodes.Stripes.geometry} position={[0,0.01,0]} />

    </group>
  )
}
