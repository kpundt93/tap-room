import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group className="col-6">
          <Form.Label className="form-label">Name of keg</Form.Label>
          <Form.Control type="text" name="name" placeholder="Keg Name" required />
        </Form.Group>
        <Form.Group className="col-6">
          <Form.Label className="form-label">Alcohol content</Form.Label>
          <Form.Control type="number" step="0.01" name="abv" placeholder="ABV" min="0.0" max="15.0" required />
        </Form.Group>
        <Form.Group className="col-6">
          <Form.Label className="form-label">Price</Form.Label>
          <Form.Control type="number" step="0.01" name="price" min="0.0" required />
        </Form.Group>
        <Form.Group className="col-6">
          <Form.Label className="form-label">Brand</Form.Label>
          <Form.Control type="text" name="brand" required />
        </Form.Group>
        <Form.Group className="col-6">
          <Form.Label className="form-label">Quantity</Form.Label>
          <Form.Control type="number" name="quantity" placeholder="Available Pints (full keg= 124 pints)" min="0" defaultValue="124" required />
        </Form.Group>
        <Button className="button" type="submit" variant="outline-success">{props.buttonText}</Button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;