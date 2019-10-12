import * as React from "react";
import {Header, Segment, Icon} from "semantic-ui-react";

export default () => {
  return (
    <Segment vertical>
      <Header as="h2">
        <Icon name="write"/>
        <Header.Content>
          Writing
          <Header.Subheader>
            Sometimes I like to put on my writing hat.
          </Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
};
