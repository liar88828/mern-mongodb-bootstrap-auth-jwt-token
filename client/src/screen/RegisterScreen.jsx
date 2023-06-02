import { useState } from "react";
import { FormContainer } from "../components/FormContainer.jsx";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState();
	const submitHandler = async e => {
		e.preventDefault()
		console.log(e)
	}
	return (
			<FormContainer>
				<h1>Sign In </h1>
				<Form onSubmit={ submitHandler }>
					{/*-----------Name----------*/ }
					<Form.Group className={ 'my-2' } controlId={ 'name' }>
						<Form.Label>Name</Form.Label>
						<Form.Control
								type={ 'input' }
								placeholder={ 'Enter Name' }
								value={ name }
								onChange={ e => setName(e.target.value) }>
						</Form.Control>
					</Form.Group>
					{/*-----------Email----------*/ }
					<Form.Group className={ 'my-2' } controlId={ 'email' }>
						<Form.Label>Email Address</Form.Label>
						<Form.Control
								type={ 'email' }
								placeholder={ 'Enter Email' }
								value={ email }
								onChange={ e => setEmail(e.target.value) }>
						</Form.Control>
					</Form.Group>
					{/*-----------Password----------*/ }
					<Form.Group className={ 'my-2' } controlId={ 'password' }>
						<Form.Label>Password</Form.Label>
						<Form.Control
								type={ 'password' }
								placeholder={ 'Enter Password' }
								value={ password }
								onChange={ e => setPassword(e.target.value) }>
						</Form.Control>
					</Form.Group>
					{/*-----------Password----------*/ }
					<Form.Group className={ 'my-2' } controlId={ 'confirmPassword' }>
						<Form.Label>Password</Form.Label>
						<Form.Control
								type={ 'password' }
								placeholder={ 'Enter confirmPassword' }
								value={ confirmPassword }
								onChange={ e => setConfirmPassword(e.target.value) }>
						</Form.Control>
					</Form.Group>
					<Button type={ 'submit' } variant={ 'primary' } className={ 'mt=3' }>
						Sign In
					</Button>
					<Row className={ 'py-3' }>
						<Col>New Customers <Link to={ '/register' }>Register</Link>
						</Col>
					</Row>
				</Form>

			</FormContainer>
	)
}
