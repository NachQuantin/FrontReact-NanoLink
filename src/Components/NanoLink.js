import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import  {Button, Form, Container, Card  }  from "react-bootstrap";


function NanoLink() {
const [link,setLink] = React.useState('')

 async function getNanoLink (link){
  try {
    await axios
        .post("http://localhost:5000/api/v1/links", {
          longLink:link
        })
        .then((res) => res.data)
        .then((link) => console.log(link));
  } catch (e) {
    console.log(e)
  }
}


function handleOnChange(e){
  setLink(e.target.value)
  
}
function handleSubmit(e){
  e.preventDefault();
  getNanoLink(link)
}

  return (
    <Container fluid="xl">
    <Card className="text-center">
    
    <Form onSubmit={handleSubmit}>
      
      <Form.Group  className="mb-3" controlId="formLongLink">
        <Form.Label><h1>Long Link </h1></Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu Link" onChange={handleOnChange}/>
      </Form.Group>

      
      <Button variant="primary" type="submit" >
        Envia tu Link
      </Button>
    </Form>

    <Form onSubmit={handleSubmit}>
      
      <Form.Group  className="mb-3" controlId="formLongLink">
        <Form.Label><h1>NanoLink </h1></Form.Label>
        <Form.Control type="text" placeholder="Acá estará tu NanoLink" onChange={handleOnChange}/>
      </Form.Group>

      
      <Button variant="primary" type="submit" >
        Compartir NanoLink
      </Button>
    </Form>

    </Card>
    </Container>
  );
}

export default NanoLink;