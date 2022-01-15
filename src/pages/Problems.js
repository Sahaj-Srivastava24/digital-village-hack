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
                    <Typography variant="h3" style={{...style.center_text, ...style.TypographyStyles}} gutterBottom >Problem Statement</Typography>
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
                            <Typography>{problemStatement.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>{problemStatement.content}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    )}
                )}
                
            </Container>
        </div>
    )
}
