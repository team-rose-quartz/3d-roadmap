import React, { useRef } from 'react'


const Ground = () => {     
    const group = useRef()

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