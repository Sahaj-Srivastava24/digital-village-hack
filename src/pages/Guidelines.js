import React from 'react'
import { Container, Card, Typography, Stack  } from '@mui/material'
import GuidelineItem from '../components/GuidelineItem'
import data from '../components/data'
import * as style from '../static/css/style.js'
import Heading from '../components/Heading'

export default function Guidelines() {
    return (
        <div>
            <Container>
                <Heading title="Guidelines" isHome={false} /> 
                <Card style={{...style.accordionStyle, padding:"1rem 0"}}>
                    <Stack>
                        {data.guidelines.map((guideline, index) => {
                            return (
                                <GuidelineItem key={index}>
                                    <Typography variant='h6' component="span" style={style.guidelineStyles}>{guideline}</Typography>
                                </GuidelineItem>
                            )
                        })}
                    </Stack>
                </Card>
            </Container>
        </div>
    )
}
