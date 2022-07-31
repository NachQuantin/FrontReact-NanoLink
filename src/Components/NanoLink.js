import React from "react";


import "bootstrap/dist/css/bootstrap.min.css"

import  {Button, Form, Container, Card  }  from "react-bootstrap";


function NanoLink() {

  return (
    <Container fluid="xl">
    <Card className="text-center">
    <Form>
      <Form.Group className="mb-3" controlId="formLongLink">
        <Form.Label><h1>Long Link </h1></Form.Label>
        <Form.Control placeholder="Ingresá tu LINK" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formNanoLink">
        <Form.Label><h2>Ya podes usar tu NANO-LINK para redirigirte</h2></Form.Label>
        <Form.Control placeholder="NanoLink" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Redirigirme
      </Button>
    </Form>
    </Card>
    </Container>
  );
}

export default NanoLink;