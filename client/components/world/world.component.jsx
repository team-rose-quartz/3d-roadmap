import React, { useState, useMemo, useRef } from 'react'
import { useFrame } from 'react-three-fiber';
import { Stats, Stars, Sky, HTML } from 'drei';


import Ground from '../ground/ground.component.jsx';
import FrontEndCity from '../front-end/front-end-city.component.jsx';
import CarControls from '../car/car-controls.component.jsx';


// Data strtcuture
    // F.E Car position
    // B.E Car position
    // Fixed point camera
    // Flipped status
    // Camera position


const CAMERA_RESET_POS = {x: -100, y: 50, z:50}
const ROTATIONS = 80

const World = ({flipped}) => {

    // To remember group object between renders
    const group = useRef()


    // Couldn't use rotation directly as there were too many decimal points being rounded
    // TODO: Replace with useRef using a clamp
    const [rotation, setRotation] = useState(0) 

    // if rotation does not match own or still rotating, lock move


    // Animation stops


    // Lock camera and car controls

    // Concurrently
    // Zoom out
    // Flip world
    // Change background
    // Change fog

    // Zoom in on new cars location by clamping and stepping
    
    // Release controls 



    console.log('flipped', flipped)


    const fogColor = flipped ? 'black' : '#dee5e7';


    const rotating = (rotation !== 0 && rotation !== ROTATIONS)
    

    // Check if flipped, if not at right coords for flipped true or flipped false, keep spinning until you are
    useFrame(({camera}) => { 
        // console.log(camera)
        const {x,y,z} = camera.position

        // Pulls world based on rotation
        group.current.rotation.z =  rotation * Math.PI/ROTATIONS
        
        // Offset for thickness of desk when rotated
        group.current.position.y = -rotation/(ROTATIONS/10)


        // console.log(frontCar)
        if(!flipped && rotation != 0 ) {
            if(x != CAMERA_RESET_POS.x || y !== CAMERA_RESET_POS.y || z !== CAMERA_RESET_POS.z) {
                camera.position.x = Math.max(x-1, CAMERA_RESET_POS.x)
                camera.position.y = Math.min(y+1, CAMERA_RESET_POS.y)
                camera.position.z= Math.min(z+1, CAMERA_RESET_POS.z)
            }
            setRotation(rotation - 1)
        } else if (flipped && rotation != ROTATIONS ) {
            if(x != CAMERA_RESET_POS.x || y !== CAMERA_RESET_POS.y || z !== CAMERA_RESET_POS.z) {
                camera.position.x = Math.max(x-2, CAMERA_RESET_POS.x)
                camera.position.y = Math.min(y+1, CAMERA_RESET_POS.y)
                camera.position.z= Math.min(z+1, CAMERA_RESET_POS.z)
            }
            setRotation(rotation + 1)
        } else {
            if(!flipped) {
                const frontEndCar = group.current.children[0].position 
                if(x != frontEndCar.x || y !== frontEndCar.y || z !== frontEndCar.z) {
                    camera.position.x  = Math.min(x-(CAMERA_RESET_POS.x/30), frontEndCar.x - 2)
                    camera.position.y = Math.max(y-(CAMERA_RESET_POS.y/30), frontEndCar.y + 2)
                    camera.position.z = Math.max(z-(CAMERA_RESET_POS.z/60), frontEndCar.z + 3)
                }
            } 
            if(flipped) {
                const backendEndCar = group.current.children[1].position 
                if(x != backendEndCar.x || y !== backendEndCar.y || z !== backendEndCar.z) {
                    camera.position.x  = Math.min(x-(CAMERA_RESET_POS.x/30), backendEndCar.x - 2)
                    camera.position.y = Math.max(y-(CAMERA_RESET_POS.y/30), backendEndCar.y + 2)
                    camera.position.z = Math.max(z-(CAMERA_RESET_POS.z/60), backendEndCar.z + 3)
                }
            }
            // Handle camera reset to car here
        }
    })

    const ground = useMemo(() => (<Ground />), [])

    return (
        <>
            {/* <CameraControls freeze={rotating}/> */}
            {/* { !rotating && <fog attach="fog" args={[fogColor, 5, 15]} />} */}
            {flipped ? <Stars radius={300} /> : <Sky />}
            {/* <color attach="background" args={["#012"]} /> */}
            <group ref={group}>  
                <CarControls name={"frontEnd"} locked={rotating || flipped}/>
                <CarControls name={"backendEnd"} locked={rotating || !flipped}/>          
                {ground}
                <FrontEndCity top={true}/>
                <FrontEndCity top={false}/>
            </group>
        </>
    )
}


export default World