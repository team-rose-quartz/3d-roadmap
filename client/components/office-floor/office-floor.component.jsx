/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { HTML } from 'drei';
import './office-floor.style.css';

export default function Model(props) {
  const { floor } = props;
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, './components/office-floor/office-floor.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['Light Grey']} geometry={nodes.Walls.geometry} />
      <mesh material={materials.Windows} geometry={nodes.Windows.geometry} />
      <HTML><div class="floorName">{floor.name}</div></HTML>
    </group>
  )
}
