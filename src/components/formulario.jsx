import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from "react";

const formulario = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [dni, setDNI] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (nombre && apellido && dni && email) {
          alert("Datos enviados");
        } else {
          alert("Completar todos los datos");
        }
    };

    return (
        
        
        <div>
        
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' placeholder="Ingrese su nombre" onChange={(e)=> setNombre(e.target.value)}
                value={nombre} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type='text' placeholder="Ingrese su apellido"  onChange={(e)=> setApellido(e.target.value)}
                value={apellido}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}
                value={email}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="dni">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="dni" placeholder="Ingrese su DNI" onChange={(e)=> setDNI(e.target.value)}
                value={dni} />
      </Form.Group>
      
      <Button variant="primary" type="submit">Enviar</Button>
    </Form>

    </div>
    );
};

export default formulario;