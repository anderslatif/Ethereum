import React, { Component } from 'react'

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class CreateNewElection extends Component {

    linkFormatter(cell, row) {
        let address = cell;
        let url = "elections/" + address;
        return <a href={url}>{address}</a>
    }


    render() {
        let tableData = [];
        this.props.myContracts.forEach(item => {
            let obj = {"address": item};
            tableData.push(obj);
        });

        return (
            <div>
                <p>My Elections</p>
                <BootstrapTable data={tableData} striped={true} hover={true}>
                    <TableHeaderColumn dataField="address" dataFormat={this.linkFormatter} isKey={true} dataAlign="center">Address</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }

}