import React, { useRef,useState,useEffect } from 'react';
// Import Components
import {  Card, Form, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

export function Import() {
    
    const [modal, setModal] = useState(false);
    const productName= useRef();
    const producline=useRef();
    const productID=useRef();
    const quantity =useRef();

    const [warning,setWarning]= useState("");

    const handleFocus= ()=>{
        setWarning("");
    }
    const handleSubmit =(e)=>{
        e.preventDefault();

        if(productName.current.value=="" ||producline.current.value=="" ||productID.current.value==""||quantity.current.value=="" ){
            setWarning("Please complete all information")
        } 
        else if(producline.current.value!="BMW"){
            setWarning("Productline not found");
        }
        else if(productID.current.value != "BMW-001") {
            setWarning("ProductID not found")
        }
        else if(productName.current.value != "BMW i8"){
            setWarning("Product name not found");
        } 
        else{

            setModal(true);
            productName.current.value="";
            producline.current.value="";
            productID.current.value="";
            quantity.current.value="";
        }
    }

    useEffect(()=>{

    },[])
   
    return (
        <div>
            <Modal
				show={modal}
				onHide={()=> {
					setModal(false);
					
				}}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Reponse</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Import successfully.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="warning" onClick={()=> {
					setModal(false);
					
				}}>
						Close
					</Button>
					
				</Modal.Footer>
			</Modal>
            <div className="page-header">
                <Row>
                    <Col sm={12}>
                        <h3 className="page-title">Import Product</h3>
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
                                        <h5 className="form-title"><span>Import Product</span></h5>
                                    </Col>

                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-2">
                                            <Form.Label>Product name</Form.Label>
                                            <Form.Control type="text" ref={productName} onFocus={handleFocus}/>
                                        </Form.Group>
                                        
                                        
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Productline</Form.Label>
                                            <Form.Control type="text" ref={producline} onFocus={handleFocus} />
                                        </Form.Group>
                                    </Col>
                                    
                                    <Col xs={12} sm={6} >
                                        <Form.Group className="mb-3">
                                            <Form.Label>ProductID</Form.Label>
                                            <Form.Control  type="text" ref={productID} onFocus={handleFocus} />
                                        </Form.Group >
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group >
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control  type="text" ref={quantity} onFocus={handleFocus}/>
                                        </Form.Group>
                                    </Col>
                                    
                                    <Col xs={12}>
                                        <div style={{height:20}} className="mb-2">

                                        <h6 style={{color: "red",display:"block",height:20 }} >{warning}</h6>
                                        
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

