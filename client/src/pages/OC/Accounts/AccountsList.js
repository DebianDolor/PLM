import React, { useEffect,useContext,useState } from 'react';
// Import Components
import { Row, Col, Card, Media } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { faDownload, faPencilAlt, faPlus, faTrash } from '@fortawesome/fontawesome-free-solid';
import { AuthContext } from '../../../context/AuthContext';


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


];



export function AccountList() {
    const {token} = useContext(AuthContext);
    console.log("token",token)

    const axiosOptions={
        headers: {
            "x-access-token": token
        }
    }

    let data = [];
    const [tableData,setTableData]= useState({columns,data});

    useEffect(() => {
        const getData = async ()=>{

            try {
                const res= await axios.get("http://localhost:8080/api/admin/credentials",axiosOptions);
                console.log(res.data)
                data= res.data;
                setTableData({columns,data})
            } catch(err){
                console.log(err)
            }
        }
        getData()
    }, [])


    
    return (
        <div>
            <div className="page-header">
                <div className="page-header">
                    <Row>
                        <Col className="col">
                            <h3 className="page-title">Account List</h3>

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
