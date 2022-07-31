import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

import  {Button, Form, Container, Card  }  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"


function Login() {

  let navigate = useNavigate();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    
  });

  const [dbResponse, setDbResponse] = React.useState({});  
  const [error, setError] = React.useState(''); 
  



  //Login User in DB

  async function loginFunction(user) {
    try {
      await axios
        .post("http://localhost:5000/api/v1/auth/login", {
          email: user.email,
          password: user.password, 
        })
        .then((res) => res.data)
        .then((token) => {
          if (token) {  
            setDbResponse(token);
            setTimeout(() => {
              navigate('/NanoLink')
            }, 3000);
          }
          
        });
    } catch (e) {
      if(Array.isArray (e.response.data.errors)){
        setError(e.response.data.errors[0].msg)
      }else{
        setError(e.response.data.error);  
      }
      setTimeout(() => {
        navigate('/')
      }, 3000);
    }
    
  }
  
///


  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    
  }
  
   function handleSubmit(e){
    e.preventDefault()
    loginFunction (user)
  }



  return ( 
    <Container fluid="xl">
        <Card className="text-center">
    <div>
      <h2>Bienvenid@ a su pantalla de Login! </h2>
      <h3>Acceda a su Nano Link </h3>
      <Form onSubmit={handleSubmit}>

        <Form.Group>
        <label>Email</label>
        <input onChange={handleOnChange} name="email" value={user.email} />
        </Form.Group>

        <Form.Group >
        <label>Password</label>
        <input
          onChange={handleOnChange}
          name="password"
          value={user.password}
          type="password"
        />
        </Form.Group>

        <Form.Group >
        <Button type="submit">Login</Button>
        </Form.Group>
      </Form>
      
     
      {dbResponse.token && (
        <div>
          <h3>Bienvenid@ a Nano Link, comencemos! </h3>
          <p>Será redirigido a su Pantalla Principal</p>
        </div>
      )}

      {
        <div>
          {
            (error) &&(
                  <div>
                    <p>{error}</p>
                    <p>¿Se ha registrado?</p>
                    <p>Aguarde un momento...</p>
                    <p>Será redirigido a Home</p>
                  </div>) 
          }
          </div>
      }
    </div>
    </Card>
    </Container>
  )
}

export default Login