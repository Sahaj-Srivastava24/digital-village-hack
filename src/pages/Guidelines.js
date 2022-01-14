import React from 'react'
import { Container, Card, Typography, Stack  } from '@mui/material'
import GuidelineItem from '../components/GuidelineItem'
import style from '../static/css/style.js'

export default function Guidelines() {
    return (
        <div>
            <Container>
                <div >
                    <Typography variant="h3" style={style.center_text}>Guidelines</Typography>
                </div>
                <Card>
                    <Stack>
                        <GuidelineItem>
                            <Typography variant='h5' component="span">Hello</Typography>
                        </GuidelineItem>
                    </Stack>
                </Card>
            </Container>
        </div>
    )
}
