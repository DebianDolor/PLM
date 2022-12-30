import React, { useRef, useState, useEffect } from 'react';
// Import Components
import { Card, Form, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';


export function ErrorStatistics() {

    const [modal, setModal] = useState(false);
    const id =useRef("");
    const [type,setType] = useState("Factory");
    const [errorRatio,setErrorRatio]=useState("");
    const [warning, setWarning] = useState("");

    const handleFocus = () => {
        setWarning("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(id.current.value=="BMW"){
            setModal(true);
            setErrorRatio("33%")
        } else if(id.current.value=="BMW i8") {
            setModal(true);
            setErrorRatio("25%")
        }
        else if(id.current.value=="Fac01"){
            setModal(true);
            setErrorRatio("16.6%")
        }
        else if(id.current.value=="Sto02"){
            setModal(true);
            setErrorRatio("20%")
        }
        else if(id.current.value!="BMW" || id.current.value!="BMW i8")
        {
            setWarning(type +" ID not found" )
        }
         else if(id.current.value=="") {
            setWarning("Please complete information")
        }

        
    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <Modal
                show={modal}
                onHide={() => {
                    setModal(false);

                }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Reponse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Error ratio: {errorRatio}</h6>
                    <h6>Type: {type}</h6>
                    <h6>{type} ID: {id.current.value}</h6>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={() => {
                        setModal(false);

                    }}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
            <div className="page-header">
                <Row>
                    <Col sm={12}>
                        <h3 className="page-title">Error Statistics</h3>
                        {/* <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/students">Students</a></li>
                                <li className="breadcrumb-item active">Add Students</li>
                            </ul> */}
                    </Col>
                </Row>
            </div>

            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col sm={12}>
                                        <h5 className="form-title"><span>Error Statistics</span></h5>
                                    </Col>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label>Type</Form.Label>
                                            <Form.Control
                                                as="select"
                                                value={type}
                                                onChange={e => {
                                                    console.log("e.target.value", e.target.value);
                                                    setType(e.target.value);
                                                }}
                                            >
                                                <option value="Factory">Factory</option>
                                                <option value="Productline">Productline</option>
                                                <option value="Store">Store</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-2">
                                            <Form.Label>{type} ID</Form.Label>
                                            <Form.Control type="text" ref={id} onFocus={handleFocus} />
                                        </Form.Group>


                                    </Col>
                                    

                                    

                                    <Col xs={12}>
                                        <div style={{ height: 20 }} className="mb-2">

                                            <h6 style={{ color: "red", display: "block", height: 20 }} >{warning}</h6>

                                        </div>
                                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )

}

