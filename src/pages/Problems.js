import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import * as style from "../static/css/style.js";
import data from "../components/data.js";
import Heading from "../components/Heading.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Link } from 'react-router-dom'

export default function Problems() {
  return (
    <div>
      <Container>
        <Heading title="Problem Statements" isHome={false} />
        {data.problemStatements.map((problemStatement, index) => {
          return (
            <Accordion key={index} style={style.accordionStyle} disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={style.problemHeadingStyles}>
                  {problemStatement.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={style.guidelineSubStyles}>
                  <Typography style={style.guidelineHeadingStyles}>
                    Description:-{" "}
                  </Typography>
                  <Typography style={style.problemSubStyles}>
                    {problemStatement.content.des}
                  </Typography>
                </div>
                <div style={style.guidelineSubStyles}>
                  <Typography style={style.guidelineHeadingStyles}>
                    Data:-{" "}
                  </Typography>
                  <Typography style={style.problemSubStyles}>
                    {problemStatement.content.data}
                  </Typography>
                </div>
                <div style={style.guidelineSubStyles}>
                  <Typography style={style.guidelineHeadingStyles}>
                    Link:-{" "}
                  </Typography>
                  {/* <a
                    herf={problemStatement.content.link}
                    target="_blank"
                    rel="noreferrer"
                  > */}
                  <Typography style={style.problemSubStyles}>
                    {problemStatement.content.link}
                  </Typography>
                  {/* </a> */}
                </div>
                <div style={style.guidelineSubStyles}>
                  <Typography style={style.guidelineHeadingStyles}>
                    Evaluation:-{" "}
                  </Typography>
                  <Typography style={style.problemSubStyles}>
                    {problemStatement.content.eval}
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
    </div>
  );
}
