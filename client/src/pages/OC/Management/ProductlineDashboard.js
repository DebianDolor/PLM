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
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import { useContext, useEffect,useState } from 'react';






export function ProductlineDashboard() {
    let data = [
        
    ];
    const { token } = useContext(AuthContext);
    const axiosOptions = {
        headers: {
            "x-access-token": token
        }
    }
    console.log("token", token)
    const columns = [
        {
            name: 'Productline',
            selector: row => row.productLine,
            sortable: true,
        },
        
        {
            name: 'Description',
            selector: row => row.description,
            sortable: true,
        },
        {
            name: 'Sale Date',
            selector: row => row.startDate,
            sortable: true,
        },

    ];

    const [tableData, setTableData] = useState({ columns, data });
    useEffect(() => {

        const getData = async () => {

            try {
                const res = await axios.get("http://localhost:8080/api/admin/productline/findall", axiosOptions);
                console.log(res.data);
                // data=res.data;
                setTableData({ columns, data })
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [])


    return (
        <div>
            <div className="page-header">
                <div className="page-header">
                    <Row>
                        <Col className="col">
                            <h3 className="page-title">Productline Dashboard</h3>

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
