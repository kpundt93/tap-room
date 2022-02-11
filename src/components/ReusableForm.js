import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Keg Name" />
        <input type="number" step="0.01" name="abv" placeholder="ABV" min="0.0" max="15.0" />
        <input type="number" step="0.01" name="price" placeholder="Price" min="0.0"/>
        <input type="text" name="brand" placeholder="Brand" />
        <input type="number" name="quantity" placeholder="Available Pints (full keg= 124 pints)" min="0" defaultValue="124" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;