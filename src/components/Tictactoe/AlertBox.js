import React from 'react';
import classes from './AlertBox.scss';

export const AlertBox = (props) => {
    const label = props.winner.toLowerCase() === 'draw' ? 'Draw' : `${props.winner} wins!`;
    return (
      <div className={classes.box}>
        <p>{label}</p>
        <button onClick={() => props.stop()} >Ok</button>
      </div>
    )
};

AlertBox.propTypes = {
  stop: React.PropTypes.func,
  wiiner: React.PropTypes.string
};

export default AlertBox;
