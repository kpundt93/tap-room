import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewKegForm(props){
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleNewKegFormSubmission}
        buttonText = "Add Keg" />
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
