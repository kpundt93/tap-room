import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props){
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input type="text" name="name" placeholder="Keg Name" />
        <input type="number" step="0.01" name="abv" placeholder="ABV" min="0.0" max="15.0" />
        <input type="number" step="0.01" name="price" placeholder="Price" min="0.0"/>
        <input type="text" name="brand" placeholder="Brand" />
        <input type="number" name="quantity" placeholder="Available Pints (full keg= 124 pints)" min="0" defaultValue="124" />
        <button type="submit">Add Keg</button>
      </form>
    </React.Fragment>
  );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      abv: event.target.abv.value,
      price: event.target.price.value,
      brand: event.target.brand.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;