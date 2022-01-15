import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import dc from '../static/dc.png'
import style from '../static/css/style'

export default function Socials() {
    const MUIicon = {
        color: '#fff',
        fontSize: '2rem',
    }
    return (
        <div style={style.socialsStyles}>
            <InstagramIcon style={MUIicon}/>
            <LinkedInIcon style={MUIicon}/>
            <img src={dc} alt="" height={30} width={30} />
        </div>
    )
}
