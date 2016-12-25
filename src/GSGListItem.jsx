import '../node_modules/gsg-common-style/less/label/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  _anchor(_bClass, _params) {
    return (
      <a href={_params.linkIn} target={_params.target} className={_bClass}>{_params.children}</a>
    );
  }

  _button(_bClass, _params) {
    return (
      <button type="button" onClick={_params.onClick} className={_bClass}>{_params.children}</button>
    );
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

    if (_item.props.bStyle) {
      _bClass = objectAssign(_bClass, {
        [`list-group-item-${_item.props.bStyle}`]: true
      });
    }

    if (_item.props.isDisabled) {
      _bClass = objectAssign(_bClass, {
        'disabled': true
      });
    }

    _bClass = classNames(_bClass);

    let _linkEl = this._anchor(_bClass, _item.props);
    if (_item.props.linkIn === '#') {
      _linkEl = this._button(_bClass, _item.props);
    }

    return _linkEl;
  }
};

GSGListItem.propTypes = {
  bStyle: PropTypes.string,
  target: PropTypes.string,
  linkIn: PropTypes.string,
  item: PropTypes.array,
  onClick: PropTypes.func
};

GSGListItem.defaultProps = {
  isDisabled: false,
  linkIn: "#"
};
