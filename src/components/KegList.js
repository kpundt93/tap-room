import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      {props.kegList.map((keg) =>
        <Keg
          name={keg.name}
          abv={keg.abv}
          price={keg.price}
          brand={keg.brand}
          id={keg.id}
          key={keg.key} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList;