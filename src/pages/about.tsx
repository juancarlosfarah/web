import * as React from "react";
import {Header, Container, Segment, Icon} from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const AboutPage = () => {
  return (
      <Container>
        <Segment vertical>
          <Header as="h2">
            <Icon name="info circle"/>
            <Header.Content>
              About
              <Header.Subheader>
                I wear multiple hats.
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Segment>
        <Segment vertical>
          <p>
            I received my Bachelor of Arts in Economics from Harvard University,
            completed intensive studies in Computer Science and Statistics at Stanford University
            and a Master of Science in Computing at Imperial College London. For five years, I
            was a Teaching Assistant for MongoDB, a NoSQL database company, working with
            the company's core education team to teach, promote and translate courses that
            introduce MongoDB to Python developers and database administrators. Over the past
            two years, I have worked as a Researcher and Software Engineer at the Interaction
            Systems Group (REACT) at EPFL. At REACT, I am the technical lead for the Graasp
            Ecosystem, a suite of native and web applications that support digital education
            activities and are the core technology behind the Horizon 2020 Next-Lab and GO-GA
            European Innovation Action Projects. Alongside my technical work, I conduct research
            focusing on privacy-preserving systems for technology-enhanced learning using
            blockchain-based solutions. I also give a yearly lecture on trust, privacy and
            reputation frameworks for social media platforms, as part of the Social Media course
            (EE-593). Finally, I am a Member of the Board of Experts of the College of Engineering
            and Architecture of Fribourg, where I supervise Bachelor projects.
          </p>
        </Segment>
      </Container>
  );
};

export default withLayout(AboutPage);
