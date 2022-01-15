import React from 'react'
import bullet from '../static/bullet.png'

export default function GuidelineItem({ children }) {
    return (
        <div style={{ display: 'flex',paddingBottom:'1rem'}}>
            <img src={bullet} alt="" height={30} style={{ transform: 'translateY(10px)'}}/>
            <div style={{ transform: 'translateY(12px)'}}>
                { children }
            </div>
        </div>
    )
}
