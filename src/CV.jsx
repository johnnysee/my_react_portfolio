import React, { Component } from 'react'
import { Container, Grid } from "semantic-ui-react";
import axios from "axios";
import CvCard from "./CvCard"

class Cv extends Component {
  state = {
    work: [],
  };

  componentDidMount() {
    axios.get("./data/work.json").then((response) => {
      this.setState({ work: response.data });
    });
  }

  

  render() {
    const { work } = this.state;

    let workList = work.map((work) => {
      return (
        <div id={`work-${work.id}`} key={work.id}>
           <CvCard work={work} />
        </div>
      );
    });

    return (
      <Container>
        <h1 id="cv-header">Work Experience</h1>
        <Grid>{workList}</Grid>
        <h1 id="cv-header">Education</h1>
        <Grid>{workList}</Grid>
      </Container>
      
    )
  }
}

export default Cv;



// Hardcoded below.

      {/* <h1 id="cv-tab">CV</h1>
      <h2 id="cv-tab">Work Experience</h2>
      <h3>Wiring & Harness Engineer</h3>
      <h4>Volvo Buses</h4>
      <ul>
        <li>
        Design electrical schematics and bundle drawings for suppliers, customer adaptation, aftermarket and on-going production release.
        </li>
        <li>
        Tools: SaberES Designer 2020 and Saber Harness 2015
        </li>
        <li>
        PDM-system KOLA
        </li>
      </ul>
      <h2 id="cv-tab">Education</h2>
      <h3>Linköping University</h3>
      <h4>Bachelor's degree, Mechanical Engineering, Bachelor of Science</h4>
      <p>2014 - 2017</p> */}
