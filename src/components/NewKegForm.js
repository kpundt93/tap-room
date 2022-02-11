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
        <button type="submit">Add Keg</button>
      </form>
    </React.Fragment>
  );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.abv.value);
    console.log(event.target.price.value);
    console.log(event.target.brand.value);
  }
}


NewKegForm.propTypes = {
  formSubmissionHandler: PropTypes.func
}

export default NewKegForm;