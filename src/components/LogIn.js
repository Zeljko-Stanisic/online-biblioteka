import React from 'react';
import {Form, Button} from 'react-bootstrap';
import '../sass/LogIn.scss'
import LoginFormValidation from '../validation/LoginFormValidation'
import validate from '../validation/ValidateInfo'

function LogIn({submitForm}) {
    const {handleChange, values, error, handleSumbit} = LoginFormValidation(submitForm, validate);
    return (
        <>
            <Form className="form"  onSubmit={handleSumbit}  >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    type="name"
                    placeholder="Username" 
                    name="username" 
                    className="input"
                    value={values.username}
                    onChange={handleChange}
                    />
                    {error.username && <p className="error">{error.username}</p>}
                    

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"   
                    className="input"
                    value={values.password}
                    onChange={handleChange}
                    />
                    {error.password && <p className="error">{error.password}</p>}
                    
                </Form.Group>
                <Button className="btn" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default LogIn
