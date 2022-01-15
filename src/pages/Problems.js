import React from 'react'
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails  } from '@mui/material'
import style from '../static/css/style.js'
import data from '../components/data.js'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Problems() {

    return (
        <div>
            <Container>
                <div >
                    <Typography variant="h3" style={{...style.center_text, ...style.TypographyStyles }} gutterBottom >Problem Statement</Typography>
                </div>
                {data.problemStatements.map(problemStatement => {
                    return (
                        <Accordion 
                        style={style.accordionStyle}
                        disableGutters>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography style={style.problemHeadingStyles}>{problemStatement.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={style.guidelineSubStyles}>
                                    <Typography style={style.guidelineHeadingStyles}>Description:- </Typography>
                                    <Typography style={style.problemSubStyles}>{problemStatement.content.des}</Typography> 
                                </div>
                                <div style={style.guidelineSubStyles}>
                                    <Typography style={style.guidelineHeadingStyles}>Data:- </Typography>
                                    <Typography style={style.problemSubStyles}>{problemStatement.content.data}</Typography>
                                </div>
                                <div style={style.guidelineSubStyles}>
                                    <Typography style={style.guidelineHeadingStyles}>Link:- </Typography>
                                    <Typography style={style.problemSubStyles}>{problemStatement.content.link}</Typography>
                                </div>
                                <div style={style.guidelineSubStyles}>
                                    <Typography style={style.guidelineHeadingStyles}>Evaluation:- </Typography>
                                    <Typography style={style.problemSubStyles}>{problemStatement.content.eval}</Typography>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    )}
                )}
                
            </Container>
        </div>
    )
}
