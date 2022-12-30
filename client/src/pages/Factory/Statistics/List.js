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


const data = [
    
    
];
const columns = [
    {
        name: 'Productline',
        selector: row=>row.productLine,
        sortable: true,
    },
    {
        name: 'ProductID',
        selector: row=>row.productID,
        sortable: true,
    },
    {
        name: 'ProductName',
        selector: row=>row.productName,
        sortable: true,
    },

    {
        name: 'Status',
        selector: row=>row.status,
        sortable: true,
    },
    {
        name: 'Quarter',
        selector: row=>row.quarter,
        sortable: true,
    },
    {
        name: 'Import Date',
        selector: row=>row.importDate,
        sortable: true,
    },
   
    
];


export function List() {
   

           
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
                                <h3 className="page-title"> List</h3>
                                
                            </Col>
                            <Col className="col-auto text-end float-right ms-auto">
                                <a href="#" className="btn btn-outline-primary me-2"><FontAwesomeIcon icon={faDownload} /> Download</a>
                                <a href="/add-exam" className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /></a>
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
