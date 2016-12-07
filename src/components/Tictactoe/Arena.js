import React from 'react';
import classes from './Arena.scss';
import Area from './Area';

export const Arena = (props) => {
    const click = props.click;
    const getType = (x,y) => props.matrix.length > 0 ? props.matrix[x][y] : 0 ;

    return (
      <div className={classes.arena}>
         <Area onClick={(e) => click(0, 0)} type={getType(0, 0)} />
         <Area onClick={(e) => click(0, 1)} type={getType(0, 1)} />
         <Area onClick={(e) => click(0, 2)} type={getType(0, 2)} />
         <Area onClick={(e) => click(1, 0)} type={getType(1, 0)} />
         <Area onClick={(e) => click(1, 1)} type={getType(1, 1)} />
         <Area onClick={(e) => click(1, 2)} type={getType(1, 2)} />
         <Area onClick={(e) => click(2, 0)} type={getType(2, 0)} />
         <Area onClick={(e) => click(2, 1)} type={getType(2, 1)} />
         <Area onClick={(e) => click(2, 2)} type={getType(2, 2)} />
      </div>
    );
}

Arena.propTypes = {
  click: React.PropTypes.func,
  matrix: React.PropTypes.array
};

export default Arena;
