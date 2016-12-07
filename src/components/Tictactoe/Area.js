import React from 'react';
import classes from './Area.scss';

export const Area = (props) => {
    let img = '';
    switch (props.type) {
      case 0:
        img = '';
        break;
      case 1:
        img = 'X';
        break;
      case 4:
        img = 'O';
        break;
      default:
    };

    return (
      <div onClick={props.onClick} className={classes.box}>
        <span>{img}</span>
      </div>
    );
};

Area.propTypes = {
  type: React.PropTypes.number,
  onClick: React.PropTypes.func
};

export default Area;
