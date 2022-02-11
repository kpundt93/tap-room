import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h4>{props.name}, {props.abv}% - ${props.price}</h4>
        <p><em>{props.brand}</em></p>
        <p>Available pints: {props.quantity}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  brand: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;