import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import { ListGroup, ListItem } from '../dist/index.min';

class Page extends React.Component {
  render() {
    return (
      <div className="list-group-eg-container">
        <h1>Get-Set-Go ListGroup Component</h1>

        <p className="list-group-eg-group">
          <h4>ListGroup</h4>

          <ListGroup>
            <ListItem isActive>JavaScript</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>Golang</ListItem>
            <ListItem>Node.js</ListItem>
            <ListItem>AWS</ListItem>
            <ListItem>DevOps</ListItem>
          </ListGroup>
        </p>

      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
