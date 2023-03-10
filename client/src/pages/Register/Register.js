import React from 'react';
// Import Logo
import Logo from '../../components/assets/img/logo-white.png';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from "axios";
import { useContext, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SignUpFailure, SignUpStart, SignUpSuccess } from "../../context/AuthAction";
import { AuthContext } from "../../context/AuthContext";

import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export function Register() {

	const navigate = useNavigate();
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const confirmedPassword = useRef();
	const { error, dispatch } = useContext(AuthContext);
	const [modal, setModal] = useState(false);
	
	const handleSubmit = async (e) => {

		console.log("click");
		e.preventDefault();
		let role = "";
		console.log(username.current.value.substring(0, 3))
		switch (username.current.value.substring(0, 3)) {
			case "Fac":
				role = 'factory';
				break;
			case "Sto":
				role = 'store';
				break;
			case "SeC":
				role = "service center";
				break;
			case "OpC":
				role = 'admin';
				break;

		}
		console.log(role)
		const user = {
			username: username.current.value,
			email: email.current.value,
			password: password.current.value,
			role: role
		};

		console.log(user)
		if (password.current.value == confirmedPassword.current.value) {
			dispatch(SignUpStart());
			try {
				const res = await axios.post("http://localhost:8080/api/auth/signup", user);
				setModal(true);
				// navigate("/signin")
			}
			catch (err) {
				console.log(err);
			}
		}



	}

	return (
		<div className="main-wrapper login-body">
			<Modal
				show={modal}
				onHide={()=> {
					setModal(false);
					navigate("/signin");
				}}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Reponse</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Waiting for accept.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="warning" onClick={()=> {
					setModal(false);
					navigate("/signin");
				}}>
						Close
					</Button>
					
				</Modal.Footer>
			</Modal>


			<div className="login-wrapper">
				<div className="container">
					<div className="loginbox">
						<div className="login-left">
							
						</div>
						<div className="login-right">
							<div className="login-right-wrap">
								<h1>Request</h1>
								<p className="account-subtitle">Access to our dashboard</p>

								<form>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Username" ref={username} />
									</div>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Email" ref={email} />
									</div>
									<div className="form-group">
										<input className="form-control" type="password" placeholder="Password" ref={password} />
									</div>
									<div className="form-group">
										<input className="form-control" type="password" placeholder="Confirm Password" ref={confirmedPassword} />
									</div>

									<div className="form-group mb-0">
										<a className="btn btn-primary btn-block" onClick={handleSubmit}>
											Submit Request
										</a>
									</div>
								</form>


								<div className="login-or">
									<span className="or-line"></span>
									<span className="span-or">or</span>
								</div>


								<div className="social-login">
									<span>Register with</span>
									<a href="#" className="facebook"><FontAwesomeIcon icon={faFacebookF} /></a><a href="#" className="google"><FontAwesomeIcon icon={faGoogle} /></a>
								</div>


								<div className="text-center dont-have">Already have an account? <a href="/signIn">Login</a></div>

							</div>
						</div>
					</div>
				</div>
			</div></div>
	)

}
