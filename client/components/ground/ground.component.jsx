import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import Car from '../car/car.component.jsx'


const Ground = () => {     
    const group = useRef()

    useFrame(() => (group.current.rotation.z  += 0))

    return (
        <group ref={group}>
            <mesh position={[0,-5,-96.5]}>
                <cylinderBufferGeometry attach="geometry" args={[100,100,10,100]} />
                <meshStandardMaterial attach="material" color={'#2e4482'}/>
            </mesh>
            <Car position={[-1,0.205,1]} rotation={[0,Math.PI,0]} color={'red'}/>
        </group>
    )
}

export default Ground