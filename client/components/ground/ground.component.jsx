import React, { useRef } from 'react'
import { Canvas, useThree, useFrame } from 'react-three-fiber';


const Ground = () => {     
    const group = useRef()
    // const { camera } = useThree()
    //   useFrame(()=> console.log(camera.position))
    // useFrame(() => (group.current.rotation.z  += 0))

    return (
        <group ref={group}>
            <mesh position={[0,-5,-96.5]}>
                <cylinderBufferGeometry attach="geometry" args={[100,100,10,100]} />
                <meshStandardMaterial attach="material" color={'#607049'}/>
            </mesh>
        </group>
    )
}

export default Ground