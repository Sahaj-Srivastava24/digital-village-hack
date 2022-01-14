import React from 'react'
import { Box } from '@mui/system'
import { Container, Button, Stack, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import logo from '../static/Intersect.png'

export default function Home() {
    return (
        <>
            <Box>
                <Container maxWidth='md' justifyContent="center">
                    <div style={{ textAlign:'center', padding:'2rem'}}>
                        <img src={logo} alt="" height={140}/>
                    </div>
                    <Typography variant='h2' component='div' style={{ textAlign: 'center', paddingBottom:'2rem'}}>
                        Digital Village Hackathon
                    </Typography>
                    <Stack spacing={1}>
                        <Link to='./problems'>
                            <Button variant="outlined" size='large' fullWidth>Problem Statements</Button>
                        </Link>
                        
                        <Button variant="outlined" size='large' fullWidth>Current Status</Button>
                        <Button variant="outlined" size='large' fullWidth>Collaborators</Button>
                        <Link to='./guidelines'>
                            <Button variant="outlined" size='large' fullWidth>Guidelines</Button>
                        </Link>
                        <Button variant="outlined" size='large' fullWidth>Dataset</Button>
                        <Button variant="outlined" size='large' fullWidth>Register/Login</Button>
                        <Button variant="outlined" size='large' fullWidth>Submit Solution</Button>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}
