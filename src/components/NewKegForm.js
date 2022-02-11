import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Keg Name" />
        <input type="number" name="abv" placeholder="ABV" min="0.0" max="15.0" />
        <input type="number" name="price" placeholder="Price" min="0.0"/>
        <input type="text" name="brand" placeholder="Brand" />
        <button type="submit">Add Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  formSubmissionHandler: PropTypes.func
}