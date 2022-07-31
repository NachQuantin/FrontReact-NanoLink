import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import  {Button, Form, Container, Card  }  from "react-bootstrap";




function Register() {
    let navigate = useNavigate();
  
    const [user, setUser] = React.useState({
      email: "",
      password: "",
      repassword: "",
    });
  
    const [dbResponse, setDbResponse] = React.useState({});
    const [error, setError] = React.useState(''); 
  
    //function to register user
    async function registerUser(user) {
      try {
        await axios
          .post("http://localhost:5000/api/v1/auth/register", {
            email: user.email,
            password: user.password,
            repassword: user.repassword,
          })
          .then((res) => res.data)
          .then((token) => {
            if (token) {
              setDbResponse(token);
              setTimeout(() => {
                navigate('/login')
              }, 4000);
            }
          });
      } catch (e) {
        if(Array.isArray (e.response.data.errors)){
          let array = e.response.data.errors;
          if(array.length > 1){
            let mensaje = array[0].msg + ' y ' + array[1].msg;
            console.log(mensaje);
            setError(mensaje);
          }else{
            setError(array[0].msg)
          }
          
        }else{
          setError(e.response.data.error);  
        }
        setTimeout(() => {
          navigate('/')
        }, 5000);
        
      }
    }
  
    function handleOnChange(e) {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      registerUser(user);
    }
  
    return (
  
      <>
        <Container fluid="xl">
        <Card className="text-center">
      <h2>Bienvenid@ a la pantalla de Register. Por favor regístrese.</h2>
      <Form onSubmit= {handleSubmit}>
        <Form.Group >
          <label>Email</label>
          <input onChange={handleOnChange} name="email" value={user.email} />
          </Form.Group>
          <Form.Group>
          <label>Password</label>
          <input
            onChange={handleOnChange}
            name="password"
            value={user.password}
            type="password"
          />
          </Form.Group>
          <Form.Group>
          <label>Repeat Password</label>
          <input
            onChange={handleOnChange}
            name="repassword"
            value={user.repassword}
            type="password"
          />
          </Form.Group>
          <Form.Group>
          <Button type="submit"> ¡Quiero Registrarme!</Button>
          </Form.Group>
        </Form>
  
        {dbResponse.token && (
          <div>
            <p>El Usuario ha sido registrado con exito</p>
            <p>Será redirigido a Login...</p>
          </div>
        )}
        {
          <div>
            {
              (error) && (
                    <div>
                    <p>{error}</p>
                    <p>Intente registrarse nuevamente!</p>
                    <p>Aguarde un momento...</p>
                    <p>Será redirigido a Home</p>
                    </div>) 
            }
            </div>
          
        }
        </Card>
        </Container>
      </>
    );
  }
  
  export default Register;
  