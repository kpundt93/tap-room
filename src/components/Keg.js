import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <React.Fragment>
      <div>
        <h4>{props.name}, {props.abv} - {props.price}</h4>
        <p><em>{props.brand}</em></p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  brand: PropTypes.string,
  id: PropTypes.string
};

export default Keg;