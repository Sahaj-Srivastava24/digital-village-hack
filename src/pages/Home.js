import React from 'react'
import { Box } from '@mui/system'
import { Container, Button, Stack, Typography } from '@mui/material'
import { styled } from '@mui/styles';
import { Link } from 'react-router-dom'
import logo from '../static/Intersect.png'
import styles from '../static/css/style'

export default function Home() {

    const StyledButton = styled(Button)({
        backgroundColor: 'rgb(255,255,255,0.4)',
        boxShadow: '1px 3.25px rgba(0,0,0,0.2)',
        height: '3rem',
        // border: '1px solid rgba(0,0,0,0.2)',
        color: 'black',
        fontSize: '0.9rem',
        letterSpacing: '0.05rem',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'rgb(255,255,255,0.6)',
            border: '1px solid rgba(255,255,255,0.5)',
        }
    })

    const StyledLinks = styled(Link)({
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': {
            textDecoration: 'none',
            color: 'inherit',
            },
            '&:focus': {
            textDecoration: 'none',
            color: 'inherit',
            },
            '&:active': {
            textDecoration: 'none',
            color: 'inherit',
            },

    })
    return (
        <>
            <Box>
                <Container maxWidth='md' justifycontent="center">
                    <div style={{ textAlign:'center', paddingTop:'1rem'}}>
                        <img src={logo} alt="" height={140}/>
                    </div>
                    <Typography variant='h2' component='div' style={{ ...styles.TypographyStyles, textAlign: 'center', paddingBottom:'2rem'}}>
                        Digital Village Hackathon
                    </Typography>
                    <Stack spacing={1}>
                        <StyledLinks to='./problems'>
                            <StyledButton variant="outlined" size='large' fullWidth>Problem Statements</StyledButton>
                        </StyledLinks>
                        
                        <StyledButton variant="outlined" size='large' fullWidth>Current Status</StyledButton>
                        <StyledButton variant="outlined" size='large' fullWidth>Collaborators</StyledButton>
                        <StyledLinks to='./guidelines'>
                            <StyledButton variant="outlined" size='large' fullWidth>Guidelines</StyledButton>
                        </StyledLinks>
                        <StyledButton variant="outlined" size='large' fullWidth>Dataset</StyledButton>
                        <StyledButton variant="outlined" size='large' fullWidth>Register/Login</StyledButton>
                        <StyledButton variant="outlined" size='large' fullWidth>Submit Solution</StyledButton>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}
