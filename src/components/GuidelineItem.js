import React from 'react'
import bullet from '../static/bullet.png'

export default function GuidelineItem({ children }) {
    return (
        <span>
            <img src={bullet} alt="" height={40} style={{ transform: 'translateY(5px)'}}/>
            { children }
        </span>
    )
}
