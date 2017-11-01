import React, { Component } from 'react';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import ReactPaginate from 'react-paginate';


export default class OpenElectionsTable extends Component {


    render() {
        let products = [{
            id: 1,
            name: "Item name 1",
            price: 100
        },{
            id: 2,
            name: "Item name 2",
            price: 100
        }];

        return (
            <div>
                <h1>Featured Open Elections</h1>
                <p>Here is a selection of open elections. Feel free to have your voice be heard.</p>

                <BootstrapTable data={products} striped={true} hover={true}>
                    <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
                </BootstrapTable>

                <div className="react-paginate">
                <ReactPaginate />
                </div>
            </div>
        )
    }

}