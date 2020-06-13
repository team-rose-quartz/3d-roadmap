import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree  } from 'react-three-fiber'
import GetSpecialistArray from './Data/dataLoader.js'


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

function Text(props) {
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

function BoxContainer(props) {
  const baseLeftPosition = 1.5;
  let parentBoxes = GetSpecialistArray().map((item, index) => {      
        return <Box position={[baseLeftPosition * (index - 1), 0, 0]} />
  });
  return (
        <>
            { parentBoxes }
        </>
    );
}

function Camera(props) {
    const ref = useRef()
    const { setDefaultCamera } = useThree()
    // Make the camera known to the system
    useEffect(() => setDefaultCamera(ref.current), [])
    // Update it every frame
    useFrame(() => ref.current.updateMatrixWorld())
    return <perspectiveCamera ref={ref} {...props} />
  }


ReactDOM.render(
  <Canvas colorManagement>
    <Camera position={[0, 0, 10]} />
    <ambientLight />
    <pointLight position={[0, 0, 5]} />
    <BoxContainer />
  </Canvas>,
  document.getElementById('root')
)
