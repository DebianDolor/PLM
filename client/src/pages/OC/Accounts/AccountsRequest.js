import React, { useEffect,useContext, useState } from 'react';
// Import Components
import { Row, Col, Card, Media } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPencilAlt, faPlus, faTrash } from '@fortawesome/fontawesome-free-solid';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';


export function AccountRequest() {
    const {token} = useContext(AuthContext);
    

    const axiosOptions={
        headers: {
            "x-access-token": token
        }
        
    }
const columns = [
        {
            name: 'Username',
            selector: row=>row.username,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row=>row.email,
            sortable: true,
        },
        {
            name: 'Hashed',
            selector: row=>row.password,
            sortable: true,
        },
        {
            name: 'Role',
            selector: row=>row.role,
            sortable: true,
        },
       
        {
            name: 'Action',
            selector: row=>row.action,
            sortable: true,
            cell: (row) => <div><a value={row} className="btn btn-sm bg-success-light me-2">
            <FontAwesomeIcon icon={faPencilAlt} onClick={()=>{handleRequest(row)}}/> </a> </div>
        },
    ];

    
    let data = [];
    const [tableData,setTableData]= useState({columns,data});
   

    useEffect( ()=>{
        const getData = async ()=>{
            try {
                const res = await axios.get("http://localhost:8080/api/admin/request/all",axiosOptions);
                data=res.data;
                console.log(res.data)
                
                
                setTableData({columns,data})
                
            }
            catch(err){
                console.log(err)
            }

        }
        getData();
    },[])

    const handleRequest= async(row)=>{
        
        
        try {
            console.log(row.password=="$2a$08$nbVtd9Cx0iLBy6K3Cvi8vuw2dPycGdVCvEt996j5EP8zBC99qp8kG")
            
            const res = await axios.post("http://localhost:8080/api/admin/request/approval",row,axiosOptions);
            console.log(res.data);
            const res1 = await axios.get("http://localhost:8080/api/admin/request/all",axiosOptions);
            data=res1.data;
            setTableData({columns,data})
        }
        catch(err){
            console.log(err)
        }
    }


    
   
        
        return (
            <div>
                <div className="page-header">
                    <div className="page-header">
                        <Row>
                            <Col className="col">
                                <h3 className="page-title">Account Request</h3>
                                
                            </Col>
                            
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
