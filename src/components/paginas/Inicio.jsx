import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export const Inicio = () => {
  return (
    <Container>
    <Form>
      <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
    </Form>
  </Container>
  )
}
