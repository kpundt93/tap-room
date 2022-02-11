import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const {keg} = props;

  return (
    <React.Fragment>
      <h2>Keg Detail</h2>
      <h4>{keg.name}, {keg.abv}% - ${keg.price}</h4>
      <p><em>{keg.brand}</em></p>
      <p>Available pints: {keg.quantity}</p>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;