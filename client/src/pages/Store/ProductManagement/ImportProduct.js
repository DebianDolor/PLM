import React, { useEffect,useContext, useState } from 'react';
// Import Components
import { Row, Col, Card, Media,Button } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPencilAlt, faPlus, faTrash } from '@fortawesome/fontawesome-free-solid';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

export function ImportProduct() {
    

    const [modal, setModal] = useState(false);
    const {token} = useContext(AuthContext);
    

    const axiosOptions={
        headers: {
            "x-access-token": token
        }
        
    }
const columns = [
        {
            name: 'Sender',
            selector: row=>row.sender,
            sortable: true,
        },
        {
            name: 'Productline',
            selector: row=>row.productline,
            sortable: true,
        },
        {
            name: 'ProductID',
            selector: row=>row.productID,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row=>row.quantity,
            sortable: true,
        },
        
       
        {
            name: 'Action',
            selector: row=>row.action,
            sortable: true,
            cell: (row) => <div><a value={row} className="btn btn-sm bg-success-light me-2">
            <FontAwesomeIcon icon={faPencilAlt} onClick={()=>{handleConfirm(row)}}/> </a> </div>
        },
    ];

    
    let data = [
      
        

    ];
    
    const [tableData,setTableData]= useState({columns,data});
   
    // useEffect(()=>{
    //     console.log("change")
    //     setTableData({columns,data});
    // },[data])
    

    const handleConfirm= (row)=>{
        
        try {
            
            
           
            setModal(true);
            
            
        }
        catch(err){
            console.log(err)
        }
    }


    
   
        
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
                    <div className="page-header">
                        <Row>
                            <Col className="col">
                                <h3 className="page-title">Import Product</h3>
                                
                            </Col>
                            {/* <Col className="col-auto text-end float-right ms-auto">
                                <a href="#" className="btn btn-outline-primary me-2"><FontAwesomeIcon icon={faDownload} /> Download</a>
                                <a href="/add-exam" className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /></a>
                                
                            </Col> */}
                        </Row>
                    </div>
                </div>

                <Card>
                    <DataTableExtensions
                        {...tableData}
                    >
                        <DataTable
                            noHeader
                            defaultSortField="id"
                            defaultSortAsc={false}
                            pagination
                            highlightOnHover
                        />
                    </DataTableExtensions>
                </Card>
            </div>
        )
    
}
