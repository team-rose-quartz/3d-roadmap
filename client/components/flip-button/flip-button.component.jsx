import React from 'react'
import { HTML } from 'drei'

import './flip-button.style.css'


const FlipButton = ({flip}) => (
    <HTML>
        <button className={'flip-button'} onClick={flip}>Flip</button>
    </HTML>
)


export default FlipButton