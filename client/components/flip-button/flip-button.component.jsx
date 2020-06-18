import React from 'react'

import './flip-button.style.css'


const FlipButton = ({flip}) => <button className={'flip-button'} onClick={flip}>Flip</button>


export default FlipButton