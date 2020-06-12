import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)


  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props }
      ref={mesh}
      scale={active ? [2, 2, 2] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'red' : 'orange'} />
    </mesh>
  )
}

ReactDOM.render(
  <Canvas colorManagement>
    <ambientLight />
    <pointLight position={[0, 0, 5]} />
    <Box position={[-1.5, 0, 0]} />
    <Box position={[1.5, 0, 0]} />
    <Box position={[0, 1.5, 0]} />
  </Canvas>,
  document.getElementById('root')
)
