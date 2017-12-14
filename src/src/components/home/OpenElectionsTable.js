import React, { Component } from 'react';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ReactPaginate from 'react-paginate';

import OpenElectionContract from "../../../build/contracts/OpenElection.json";


export default class OpenElectionsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            instantiated: false,
            contractRows: []
        }
    }


    componentWillReceiveProps(nextProps) {
        if (!this.state.instantiated && nextProps.OpenElection !== null) {
            this.setState({instantiated: true});
            nextProps.OpenElection.getAllUsers.call({from: this.props.coinbase}).then(userAddresses => {
                userAddresses.forEach(userAddress => {

                    nextProps.OpenElection.getAContract.call(userAddress, {from: this.props.coinbase}).then(contractAddresses => {

                        contractAddresses.forEach(contractAddress => {
                            if (this.state.contractRows.length === 0) {
                                this.getContractValues(contractAddress)
                            }
                        });
                    });
                })
            });
        }
    }

    async getContractValues(contractAddress) {
        const web3 = this.props.web3;

        let OpenElection = web3.eth.contract(OpenElectionContract.abi);    // contract definition
        let openElection = OpenElection.at(contractAddress);  // instance

        this.setState({contract: openElection});

        const proposalDescription = await openElection.getProposalDescription.call({from: web3.eth.coinbase});

        const results = await openElection.getResults.call({from: web3.eth.coinbase});

/*        const proposalDescriptionsAsHex = results[0];
        let proposalDescriptions = [];
        await proposalDescriptionsAsHex.forEach(proposalHex => {
            proposalDescriptions.push(web3.toAscii(proposalHex).replace(/\u0000/g, ''))
        });*/

        const votesAsBigNumber = results[1];
        let votes = 0;
        await votesAsBigNumber.forEach(bigNumberVote => {
            votes += bigNumberVote.toNumber();
        });

        let contract = {
            contractAddress: contractAddress,
            proposalDescription: proposalDescription,
            votes: votes
        };

        let contractRows = await this.state.contractRows;
        contractRows.push(contract);

        this.setState({
            contractRows: contractRows
        });}



    render() {

        return (
            <div>
                <BootstrapTable data={this.state.contractRows} striped={true} hover={true}>
                    <TableHeaderColumn dataField="contractAddress" isKey={true} dataAlign="center" dataSort={true}>Contract Address</TableHeaderColumn>
                    <TableHeaderColumn dataField="proposalDescription" dataSort={true}>Question</TableHeaderColumn>
                    <TableHeaderColumn dataField="votes">Amount of votes</TableHeaderColumn>
                </BootstrapTable>

                <div className="react-paginate">
                <ReactPaginate />
                </div>
            </div>
        )
    }

}