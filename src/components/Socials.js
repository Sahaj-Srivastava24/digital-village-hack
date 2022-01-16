import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import dc from '../static/dc.png'
import  * as style from '../static/css/style'
import { Link } from 'react-router-dom'

export default function Socials() {
    const MUIicon = {
        color: '#fff',
        fontSize: '2rem',
        margin: '0.3rem 0',
    }
    return (
        <div style={style.socialsStyles}>
            <Link to="https://www.instagram.com/dsc.tiet/">
                <InstagramIcon style={MUIicon}/>
            </Link>
            <Link to="https://www.linkedin.com/company/40815646">
                <LinkedInIcon style={MUIicon}/>
            </Link>
            <Link to="https://discord.gg/G4VvVUvb">
                <img src={dc} alt="" height={30} width={30} style={{ margin:'0.5rem 0 0 0'}} />
            </Link>
            
            
        </div>
    )
}
