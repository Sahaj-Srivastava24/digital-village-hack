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
                            Description:- 
                            <Typography style={style.problemSubStyles}>{problemStatement.content.des}</Typography> 
                            Data:- 
                            <Typography style={style.problemSubStyles}>{problemStatement.content.data}</Typography>
                            Link:- 
                            <Typography style={style.problemSubStyles}>{problemStatement.content.link}</Typography>
                            Evaluation:- 
                            <Typography style={style.problemSubStyles}>{problemStatement.content.eval}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    )}
                )}
                
            </Container>
        </div>
    )
}
