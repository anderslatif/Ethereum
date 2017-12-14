import React, { Component } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import ReactDatePicker from 'react-datepicker';
import ReactBootstrapToggle from 'react-bootstrap-toggle';

//import Timepicker from 'react-timepicker';

export default class NewElectionForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            propositionDescription: '',
            propositions: [""],
            amountOfOptions: 1,
            isOpenElection: true,
            deadline: null,
            closedElectionMembers: [],
            keys: "",
            names: "",
            tokens: ""
        }
    }

    onToggle = () => {
        event.preventDefault();
        this.setState({isOpenElection: !this.state.isOpenElection})
    };

    onDeadlineChange = (date) => {
        this.setState({deadline: date});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewElection(this.state.propositionDescription, this.state.propositions);
        toast.info('Please wait while the newly created contract has been mined.. Refresh the page to see if the contract appears in the table.')
    };

    updateProposition = (value, index, event) => {
        event.preventDefault();
        let propositions = this.state.propositions;
        propositions[index] = value;
        this.setState({propositions: propositions});
    };

    onRemoveProposition = (index, event) => {
        event.preventDefault();
        let propositions = this.state.propositions;
        propositions.splice(index, 1);
        this.setState({propositions: propositions});
    };

    onTimeChange (hours, minutes) {
        //<Timepicker onChange={this.onTimeChange} />

    }

    onAddProposition = (event) => {
        event.preventDefault();
        let propositions = this.state.propositions;
        propositions.push("");
        this.setState({propositions: propositions});
    };


    render() {

        let propositionElements = [];
        this.state.propositions.forEach((proposition, index) => {
            let placeHolder = "Proposition "+ (index+1);
            let propositionElement = <input id="name" key={index} type="text" value={proposition} onChange={event => this.updateProposition(event.target.value, index, event)}
                                                                placeholder={placeHolder}/>;
            propositionElements.push(propositionElement);
            if (index > 0) {
                let removeButton = <button key={("removeBtn"+index)} type="submit" className="pure-button" onClick={event => this.onRemoveProposition(index, event)}>Remove</button>;
                propositionElements.push(removeButton);
            }

        });

        let showDatePicker = this.state.isOpenElection ? [] :
            <ReactDatePicker className="datepicker" placeholderText="Choose a deadline if any" dateFormat="YYYY-MM-DD"
                             selected={this.state.deadline} onChange={this.onDeadlineChange}/>;

        let memberSection = [];
        if (!this.state.isOpenElection) {

            memberSection.push(<h3 key={"h3"}>Member section</h3>);
            let keyInputField = <input key={0} id="name" style={{width:"1000px"}} type="text" value={this.state.keys} onChange={event => this.setState({keys: event.target.value})}
                   placeholder="Public Keys"/>;
            memberSection.push(keyInputField);
            memberSection.push(<span key={4} className="pure-form-message">Add the public keys of your members. [comma separated list]</span>);

            let nameInputField = <input key={1} id="name" style={{width:"1000px"}} type="text" value={this.state.names} onChange={event => this.setState({names: event.target.value})}
                                       placeholder="Member Names"/>;
            memberSection.push(nameInputField);
            memberSection.push(<span key={5} className="pure-form-message">Add the names of your members. [comma separated list]</span>);

            let tokenInputField = <input key={2} id="name" style={{width:"1000px"}} type="text" value={this.state.tokens} onChange={event => this.setState({tokens: event.target.value})}
                                       placeholder="Per member vote tokens"/>;
            memberSection.push(tokenInputField);
            memberSection.push(<span key={6} className="pure-form-message">Add the allowed token per member. [comma separated list]</span>)
        }


        return (
            <form className="pure-form pure-form-stacked">
                <fieldset>
                    <label htmlFor="name">Proposition Description</label>
                    <input id="name" type="text" value={this.state.propositionDescription} onChange={event => this.setState({propositionDescription: event.target.value})}
                           placeholder="Proposition Description"/>
                    <span className="pure-form-message">Ask a question that describes in clear terms what the election is about.</span>
                    <br/>

                    {propositionElements}
                    <button type="submit" className="pure-button" onClick={event => this.onAddProposition(event)}>Add a proposition option</button>



                    <div style={{paddingTop:"40px"}}>
                        <ReactBootstrapToggle
                            on={<span>Open Election</span>} onstyle={"success"}
                            off={<span>Closed Election</span>} offstyle={"info"}
                            active={this.state.isOpenElection} onClick={this.onToggle} />
                    </div>

                    <div style={{paddingTop:"10px"}}>
                        {showDatePicker}
                    </div>

                    {memberSection}


                    <div style={{paddingTop:"40px"}}>
                        <button type="submit" className="pure-button pure-button-primary" onClick={event => this.handleSubmit(event)}>Create a new election</button>
                    </div>

                </fieldset>

                <ToastContainer closeOnClick autoClose={false} hideProgressBar={true} />
            </form>
        )
    }

}