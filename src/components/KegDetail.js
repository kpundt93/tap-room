import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function KegDetail(props){
  const {keg, onClickingDelete} = props;

  return (
    <React.Fragment>
      <h2>Keg Detail</h2>
      <h4>{keg.name}, {keg.abv}% - ${keg.price}</h4>
      <p><em>{keg.brand}</em></p>
      <p>Available pints: {keg.quantity}</p>
      <Button className="keg-button" type="submit" variant="outline-primary" size="sm" onClick={props.onClickingEdit}>Edit Keg</Button>
      <Button className="keg-button" type="submit" variant="outline-danger" size="sm" onClick={() => onClickingDelete(keg.id)}>Delete Keg</Button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;