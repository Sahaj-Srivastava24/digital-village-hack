import React from 'react'
import { Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { headingStyles } from '../static/css/style'
import { Link } from 'react-router-dom'


export default function Heading({ title, isHome=true }) {
    return (
        <div style={{ display:'flex'}}>
            {!isHome ? <Link to='/' style={{ position:'relative', top:'25px'}}><ArrowBackIcon fontSize='large'/></Link> : null}
            <Typography variant='h2' component='span' style={{ ...headingStyles }}>
                {title}
            </Typography>
        </div>
    )
}
