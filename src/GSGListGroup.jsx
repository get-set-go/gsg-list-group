import '../node_modules/gsg-common-style/less/list-group/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import ListItem from './GSGListItem.jsx';

export default class GSGListGroup extends React.Component {
  render() {
    let _listItems = this.props.children.map((listitem) => <ListItem key={listitem.index} _item={listitem}></ListItem>);

    return(
      <div className="list-group">
        {_listItems}
      </div>
    );
  }
};
