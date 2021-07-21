import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

export default function Datatable({ data }) {
    const columns = data[0] && Object.keys(data[0])
    return <ReactBootstrap.Table striped bordered hover variant="dark">
        <thead>
            <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr>
        </thead>
            <tbody>
                {data.map(row => <tr>
                    {
                        columns.map(column => <td>{row[column]}</td>)
                    }
                </tr>)}
            </tbody>
    </ReactBootstrap.Table>
}