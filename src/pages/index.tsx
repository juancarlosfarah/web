import * as React from "react";
import {Link} from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import {withLayout, LayoutProps, menuItems} from "../components/Layout";
import {
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) =>
    <div>
      {/* Master head */}
      <Segment vertical inverted textAlign="center" className="masthead">
        <HeaderMenu
            Link={Link} pathname={props.location.pathname} items={menuItems} inverted
        />
        <Container text>
          <Header inverted as="h1">Juan Carlos Farah</Header>
          <Icon name="code" size="large" />
          <Icon name="graduation" size="large" />
          <Icon name="write" size="large" />
          <Icon name="photo" size="large" />
        </Container>
      </Segment>

      {/* About Me */}
      {/*<Segment vertical className="stripe">*/}
      {/*  <Grid stackable verticalAlign="middle" className="container">*/}
      {/*    <Grid.Row>*/}
      {/*      <Grid.Column width="8">*/}
      {/*        <Header>Lorem ipsum</Header>*/}
      {/*        <p>*/}
      {/*          Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
      {/*          Porro laudantium ad, quae, perspiciatis ipsa distinctio.*/}
      {/*        </p>*/}
      {/*        <Header>Dolor sit amet</Header>*/}
      {/*        <p>*/}
      {/*          Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
      {/*          Porro laudantium ad, quae, perspiciatis ipsa distinctio.*/}
      {/*        </p>*/}
      {/*      </Grid.Column>*/}
      {/*      <Grid.Column width="6" floated="right">*/}
      {/*        /!* TODO replace with a pretty GIF *!/*/}
      {/*        <Header>Lorem ipsum</Header>*/}
      {/*        <p>*/}
      {/*          Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
      {/*          Porro laudantium ad, quae, perspiciatis ipsa distinctio.*/}
      {/*        </p>*/}
      {/*        <Header>Dolor sit amet</Header>*/}
      {/*        <p>*/}
      {/*          Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
      {/*          Porro laudantium ad, quae, perspiciatis ipsa distinctio.*/}
      {/*        </p>*/}
      {/*      </Grid.Column>*/}
      {/*    </Grid.Row>*/}
      {/*  </Grid>*/}
      {/*</Segment>*/}

      {/* Key Features */}
      <Segment vertical className="stripe alternate feature">
        <Grid columns="equal" textAlign="center" divided relaxed stackable className="container">
          <Grid.Column>
            <Header icon>
              <Icon name="code" />
              Software Engineering
            </Header>
            <p>
              I have worked in several highly-transactional and interactive software projects
              for the transport, education, commerce and media industries. I maintain a number of
              open source repositories and contribute to others whenever possible.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="graduation" />
              Research
            </Header>
            <p>
              My research focuses on human-machine interaction in the domains of Digital Education,
              Artificial Intelligence and Robotics. I am interested in the impact of intelligent
              systems on our society and the emergence of consciousness.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="write" />
              Writing
            </Header>
            <p>
              I enjoy creative writing and have self-published a number of short stories, essays,
              poems, songs, speeches and other texts that I have written throughout the years.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="photo" />
              Photography
            </Header>
            <p>
              I have a passion for photography. I was a photographer for the Harvard Crimson
              and later exhibited my creative work in London. A few of my photographs are in private
              and public collections, such as the Barjeel Art Foundation.
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>;

export default withLayout(IndexPage);
