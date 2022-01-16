import React from 'react'
import { Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import * as style from '../static/css/style.js'
import { Link } from 'react-router-dom'


export default function Heading({ title, isHome=true }) {
    return (
        <div style={{ display:'flex'}}>
            {!isHome ? <Link to='/' style={{ position:'relative', top:'25px'}}><ArrowBackIcon fontSize='large'/></Link> : null}
            <Typography variant='h2' component='span' style={{ ...style.headingStyles }}>
                {title}
            </Typography>
        </div>
    )
}
