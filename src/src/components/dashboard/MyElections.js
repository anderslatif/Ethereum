import React, { Component } from 'react'

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class CreateNewElection extends Component {

    // todo make address into a clickable link

    render() {
        return (
            <div>
                <p>My Elections</p>
                <BootstrapTable data={[]} striped={true} hover={true}>
                    <TableHeaderColumn dataField="address" isKey={true} dataAlign="center">Address</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }

}