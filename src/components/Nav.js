import React from 'react'
import tel from "../static/tel_aviv.png"
import dsc from "../static/dsc.png"
import ti from "../static/ti.png"

export default function Nav() {
    return (
        <div>
            <div className="nav" style={{ display: 'flex', justifyContent:'space-between', padding: '1rem 4rem' }}>
                <div className="nav-item">
                    <a href="#">
                        <img src={tel} alt="" height='80px' width='140px'/>
                    </a>
                </div>
                <div className="nav-item" style={{ transform:'translateX(-50px)'}}>
                    <a href="#">
                        <img src={dsc} alt="" height='80px' width='400px'/>
                    </a>
                </div>
                <div className="nav-item">
                    <a href="#">
                        <img src={ti} alt="" height='80px' width='60px'/>
                    </a>
                </div>
            </div>
        </div>
    )
}
