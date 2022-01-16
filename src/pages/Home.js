import React from 'react'
import { Box } from '@mui/system'
import { Container, Button, Stack, Grid, Typography, Card } from '@mui/material'
import { styled } from '@mui/styles';
import { Link } from 'react-router-dom'
import logo from '../static/Intersect.png'
import * as styles from '../static/css/style'
import Socials from '../components/Socials';
import Heading from '../components/Heading';

export default function Home() {

    const StyledButton = styled(Button)({
        backgroundColor: 'rgb(255,255,255,0.4)',
        boxShadow: '1px 3.25px rgba(0,0,0,0.2)',
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
            margin: 0,
            width: '20%',
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

    const StyledStack = styled(Grid)({
        padding: '2rem 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    })

    const overrideStyles = `
        .css-1p5q5e5-MuiStack-root>:not(style)+:not(style){
            margin:0 !important;
        }
    `


    return (
        <>
            <style>{overrideStyles}</style>
            <Box>
                <Container maxWidth='lg' justifycontent="center">
                    <div style={{ textAlign:'center', paddingTop:'1rem'}}>
                        <img src={logo} alt="" height={100}/>
                    </div>
                    <Heading title="Digital Village Hackathon" />
                    <Card style={{...styles.homepageCardStyling}}>
                        <Typography style={styles.TypographyStyles} variant='h5'>Digital Village Hackathon is a national level initiative for students to compete in solving pressing problems in the domain of precision agriculture, under the project “Digital Village: A Data-Driven Approach to Precision Agriculture in Small Farms”. The students would have the opportunity to work on challenges faced in the field of precision agriculture and use various technologies in the domain of machine learning, deep learning, computer vision, data science, etc. to create world class solutions that will have practical applications in agriculture.</Typography>
                    </Card>
                    <StyledStack container>
                        <StyledLinks to='./problems'>
                            <StyledButton variant="outlined" size='large' fullWidth>Problem Statements</StyledButton>
                        </StyledLinks>
                        <StyledLinks to='./guidelines'>
                            <StyledButton variant="outlined" size='large' fullWidth>Guidelines</StyledButton>
                        </StyledLinks>
                        <a href='https://forms.gle/M3pGsqseTBTsd1RA8' style={styles.styledAnchor} target="_blank" rel="noreferrer">   
                            <StyledButton variant="outlined" size='large' fullWidth>Register</StyledButton>
                        </a>
                        <a href='https://forms.gle/PtFR7B132DQEXFDR8' style={styles.styledAnchor} target="_blank" rel="noreferrer">
                            <StyledButton variant="outlined" size='large' fullWidth>Submit Solution</StyledButton>
                        </a>
                    </StyledStack>
                </Container>
            </Box>
            <Socials />
        </>
    )
}
