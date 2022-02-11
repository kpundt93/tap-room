import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      {props.kegList.map((keg) =>
        <Keg
          whenKegClicked = {props.onKegSelection}
          name={keg.name}
          abv={keg.abv}
          price={keg.price}
          brand={keg.brand}
          quantity={keg.quantity}
          id={keg.id}
          key={keg.key}
          whenSellPintClicked={props.onSellPintClicked} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onSellPintClicked: PropTypes.func
}

export default KegList;