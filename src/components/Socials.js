import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import dc from '../static/dc.png'
import style from '../static/css/style'

export default function Socials() {
    const MUIicon = {
        color: '#fff',
        fontSize: '2rem',
        margin: '0.3rem 0',
    }
    return (
        <div style={style.socialsStyles}>
            <InstagramIcon style={MUIicon}/>
            <LinkedInIcon style={MUIicon}/>
            <img src={dc} alt="" height={30} width={30} style={{ margin:'0.5rem 0 0 0'}} />
        </div>
    )
}
