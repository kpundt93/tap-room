import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  if (props.quantity === 0) {
    return (
      <React.Fragment>
        <div>
          <h4>{props.name}, {props.abv}% - ${props.price}</h4>
          <p><em>{props.brand}</em></p>
          <p>Sold out</p>
          <button onClick={() => props.whenKegClicked(props.id)}>Details</button>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div>
          <h4>{props.name}, {props.abv}% - ${props.price}</h4>
          <p><em>{props.brand}</em></p>
          <p>{props.quantity}</p>
          <button onClick={() => props.whenKegClicked(props.id)}>Details</button>
          <button onClick={() => props.whenSellPintClicked(props.id)}>Sell Pint</button>
        </div>
      </React.Fragment>
    );
  }
  
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenSellPintClicked: PropTypes.func
};

export default Keg;