import React from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import  {Button, Card, Container}  from "react-bootstrap";



function Home() {

  return (

    <>
    <Container fluid="xl">
    <Card>
        <Card.Body>
        <Card.Title><h1>Bienvenido a Nano Link</h1></Card.Title>
        <Card.Text><h2>Dale Click al botón para Registrarte</h2></Card.Text>
        <Link to ="/register">
            <Button>Register</Button>
        </Link>
        <h2>¿Ya eres usuari@ ?</h2>
        <Link to ="/login">
          <Button variant="success">Login</Button>
        </Link>
        </Card.Body>
        </Card>
        </Container>
   
    </>
  )
}

export default Home