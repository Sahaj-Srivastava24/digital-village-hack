import React from 'react'
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails  } from '@mui/material'
import style from '../static/css/style.js'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Problems() {
    return (
        <div>
            <Container>
                <div >
                    <Typography variant="h3" style={style.center_text}>Problem Statement</Typography>
                </div>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </div>
    )
}