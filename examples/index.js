import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import { ListGroup, ListItem } from '../dist/index.min';
import Badge from 'gsg-badge';

class Page extends React.Component {
  render() {
    return (
      <div className="list-group-eg-container">
        <h1>Get-Set-Go ListGroup Component</h1>

        <p className="list-group-eg-group">
          <h4>ListGroup with active list item</h4>

          <ListGroup>
            <ListItem isActive>JavaScript</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>Golang</ListItem>
            <ListItem>Node.js</ListItem>
            <ListItem>Amazon Web Services</ListItem>
            <ListItem>DevOps</ListItem>
          </ListGroup>

          <ListGroup>
            <ListItem isActive>
              <h4 className="list-group-item-heading">JavaScript</h4>
              <p className="list-group-item-text">A high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.</p>
            </ListItem>
            <ListItem>
              <h4 className="list-group-item-heading">Python</h4>
              <p className="list-group-item-text">A widely used high-level, general-purpose, interpreted, dynamic programming language.</p>
            </ListItem>
            <ListItem>
              <h4 className="list-group-item-heading">Golang</h4>
              <p className="list-group-item-text">Go (often referred to as golang) is a free and open source programming language created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson.</p>
            </ListItem>
          </ListGroup>
        </p>

        <p className="list-group-eg-group">
          <h4>ListGroup with styles</h4>

            <ListGroup>
              <ListItem>Amazon Web Services</ListItem>
              <ListItem bStyle="success">JavaScript</ListItem>
              <ListItem bStyle="info">Python</ListItem>
              <ListItem bStyle="warning">Golang</ListItem>
              <ListItem bStyle="danger">Node.js</ListItem>
            </ListGroup>
        </p>

        <p className="list-group-eg-group">
          <h4>ListGroup states</h4>

            <ListGroup>
              <ListItem isDisabled>Amazon Web Services</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>Python</ListItem>
              <ListItem>Golang</ListItem>
              <ListItem>Node.js</ListItem>
            </ListGroup>
        </p>

        <p className="list-group-eg-group">
          <h4>ListGroup with badge</h4>

            <ListGroup>
              <ListItem><Badge>10</Badge> Inbox</ListItem>
              <ListItem><Badge>6</Badge> Sent</ListItem>
              <ListItem><Badge>5</Badge> Delete</ListItem>
              <ListItem><Badge>3</Badge> Draft</ListItem>
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
