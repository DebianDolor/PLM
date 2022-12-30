import React from 'react';
// Import Components
import { Row, Col, Card, Media } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPencilAlt, faPlus, faTrash } from '@fortawesome/fontawesome-free-solid';

let data = [
    {
        productID:"BMW-001",
        productLine:"BMW",
        productName:"BMW i8",
        decription:"Luxury cars",
        status:"Solded",
        factoryID:"Fac01",
        importDate:"21 Jun 2019",
        quarter:"II /2019",
        servicecenterID:"SeC02",
        customerID:"Cus01",
    },
    {
        productID:"BMW-002",
        productLine:"BMW",
        productName:"BMW i10",
        decription:"Luxury cars",
        status:"Solded",
        importDate:"23 Feb 2019",
        quarter:"I /2019",
        customerID:"Cus02",
        servicecenterID:"SeC01",
        factoryID:"Fac02"
    },
    {
        productID:"BMW-003",
        productLine:"BMW",
        productName:"BMW a8",
        decription:"Luxury cars",
        status:"Solded",
        importDate:"15 Jun 2019",
        quarter:"II /2019",
        customerID:"Cus01",
        servicecenterID:"SeC02",
        factoryID:"Fac02"
    },
    {
        productID:"To-003",
        productLine:"Toyota",
        productName:"Toyota a8",
        decription:"Japanese cars",
        status:"Solded",
        quarter:"I /2019",
        importDate:"26 Jun 2019",
        customerID:"Cus02",
        servicecenterID:"SeC01",
        factoryID:"Fac02"
    },
    {
        productID:"To-001",
        productLine:"Toyota",
        productName:"Toyota a9",
        decription:"Japanese cars",
        status:"Solded",
        quarter:"II /2019",
        importDate:"12 May 2019",
        customerID:"Cus01",
        servicecenterID:"SeC01",
        factoryID:"Fac03"
    },
    {
        productID:"To-007",
        productLine:"Toyota",
        productName:"Toyota a2",
        decription:"Japanese cars",
        status:"Solded",
        quarter:"IV /2019",
        importDate:"12 Dec 2019",
        customerID:"Cus02",
        servicecenterID:"SeC01",
        factoryID:"Fac03"
    },
    {
        productID:"To-005",
        productLine:"Toyota",
        productName:"Toyota a12",
        decription:"Japanese cars",
        status:"Solded",
        quarter:"II /2019",
        importDate:"20 April 2019",
        customerID:"Cus01",
        servicecenterID:"SeC02",
        factoryID:"Fac01"
    },
    {
        productID:"To-009",
        productLine:"Toyota",
        productName:"Toyota a11",
        decription:"Japanese cars",
        status:"Solded",
        quarter:"III /2019",
        importDate:"23 Jul 2019",
        customerID:"Cus03",
        servicecenterID:"SeC01",
        factoryID:"Fac01"
    },
   


    


];

const columns = [
    {
        name: 'CustomerID',
        selector: row => row.customerID,
        sortable: true,
    },
    {
        name: 'Productline',
        selector: row => row.productLine,
        sortable: true,
    },
    {
        name: 'ProductID',
        selector: row => row.productID,
        sortable: true,
    },
    {
        name: 'ServiceCenterID',
        selector: row => row.servicecenterID,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
    },
    {
        name: 'Quarter',
        selector: row => row.quarter,
        sortable: true,
    },
    
    
    {
        name: 'Import Date',
        selector: row=>row.importDate,
        sortable: true,
    },
   
    
];


export function SCTransactionList() {
   

           
        const tableData = {
            columns,
            data,
        };
        return (
            <div>
                <div className="page-header">
                    <div className="page-header">
                        <Row>
                            <Col className="col">
                                <h3 className="page-title">Insurance Statistics</h3>
                                
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
