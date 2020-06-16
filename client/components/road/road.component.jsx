import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, './components/road/road.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials.Black} geometry={nodes.Asphalt.geometry} />
      <mesh material={materials.White} geometry={nodes.Stripes.geometry} />
    </group>
  )
}
