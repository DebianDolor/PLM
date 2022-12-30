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
    
   


    


];

const columns = [
    {
        name: 'Productline',
        selector: row=>row.productLine,
        sortable: true,
    },
    {
        name: 'Product ID',
        selector: row=>row.productID,
        sortable: true,
    },
    {
        name: 'Product name',
        selector: row=>row.productName,
        sortable: true,
    },
    {
        name: 'CustomerID',
        selector: row=>row.customerID,
        sortable: true,
    },
    {
        name: 'Quarter',
        selector: row=>row.quarter,
        sortable: true,
    },
    {
        name: 'Order Date',
        selector: row=>row.importDate,
        sortable: true,
    },
];


export function StoreSaleList() {
   

           
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
                                <h3 className="page-title">Sale List</h3>
                                
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
