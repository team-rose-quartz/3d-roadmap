import React from 'react'
import Car from '../car/car.component.jsx'
import Road from '../road/road.component.jsx'
import OfficeFloor from '../office-floor/office-floor.component.jsx'
import PineTree from '../pine-tree/pine-tree.component.jsx'


const FrontEndCity = () => {     
    return (
        <group >
            <Car position={[0,0.205,1]} rotation={[0,Math.PI,0]} color={'red'}/>
            <Roads count={85} />
            <Offices officeArray={[5,8,6,11,17,5,8,14,6,12,7]}/>
            <PineTree position={[.5,0,-2]}/>
            <PineTree position={[-.5,0,-6]}/>
            <PineTree position={[-.8,0,-5]}/>
            <PineTree position={[.5,0,-15]}/>
        </group>
    )
}

const Roads = ({ count }) => {
    const roads = []
    for(let x = 0; x < count; x++) {
        roads.push(<Road key={x} position={[0,0,(x-1) * -2.28]}/>)
    }
    return roads
}

const Offices = ({officeArray}) => {
    const offices = officeArray.map((val, index) => {
        return <Office key={index} count={val} x={index % 2 ? .85 : -.85} z={index*-8}/>
    })
    return offices
}


const Office = ({count, z, x}) => {
    const office = []
    for(let x = 0; x < count; x++) {
        office.push(<OfficeFloor key={x} position={[0,x*.2,0]}/>)
    }
    return (
        <group position={[x,.15,z]} scale={[.8,1,.8]}>
            {office}
        </group> 

    )
}

export default FrontEndCity