import '../node_modules/gsg-common-style/less/label/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let _item = this.props.item;

    let _bClass = {
      'list-group-item': true
    };

    if (_item.props.isActive) {
      _bClass = objectAssign(_bClass, {
        'active': true
      });
    }

    _bClass = classNames(_bClass);

    return(
      <a href="#" className={_bClass}>{_item.props.children}</a>
    );
  }
};

GSGListItem.propTypes = {
  item: PropTypes.array
};
