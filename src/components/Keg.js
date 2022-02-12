import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function Keg(props){
  if (props.quantity === 0) {
    return (
      <React.Fragment>
        <div>
          <h4>{props.name}, {props.abv}%</h4>
          <p>{props.brand}</p>
          <p>16oz: ${props.price}</p>
          <p>Sold out</p>
          <button onClick={() => props.whenKegClicked(props.id)}>Details</button>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div>
        <h4>{props.name}, {props.abv}%</h4>
        <p>{props.brand}</p>
        <p>16oz: ${props.price}</p>
        <p>Pints remaining: {props.quantity}</p>
        <Button className="keg-button" type="submit" variant="outline-primary" size="sm" onClick={() => props.whenKegClicked(props.id)}>Details</Button>
        <Button className="keg-button" type="submit" variant="outline-primary" size="sm" onClick={() => props.whenSellPintClicked(props.id)}>Sell Pint</Button>
        <hr />
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