import React, { Component } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import ReactDatePicker from 'react-datepicker';
import ReactBootstrapToggle from 'react-bootstrap-toggle';

export default class CreateNewElection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            propositionDescription: '',
            propositions: [],
            amountOfOptions: 1,
            propositionOne: "",
            isOpenElection: true,
            deadline: null
        }
    }

    onToggleType = () => {
        event.preventDefault();
        console.log("this");
        this.setState({isOpenElection: !this.state.isOpenElection})
    };

    onDeadlineChange = (date) => {
        this.setState({deadline: date});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let arr = [];
        arr.push(this.state.propositionOne);
        this.props.createNewElection(this.state.propositionDescription, /*this.state.propositions*/ arr);
        toast.success("submitted");
        this.props.changeViewMode();

    };


    render() {


        return (
            <form className="pure-form pure-form-stacked" onSubmit={event => this.handleSubmit(event)}>
                <fieldset>
                    <label htmlFor="name">Proposition Description</label>
                    <input id="name" type="text" value={this.state.propositionDescription} onChange={event => this.setState({propositionDescription: event.target.value})}
                           placeholder="Proposition Description"/>
                    <span className="pure-form-message">Describe in clear terms what the vote is about.</span>
                    <br/>

                    <input id="name" type="text" value={this.state.propositionOne} onChange={event => this.setState({propositionOne: event.target.value})}
                           placeholder="Proposition 1"/>


                    <ReactBootstrapToggle
                        on={<span>Open Election</span>} onstyle={"success"}
                        off={<span>Closed Election</span>} offstyle={"info"}
                        active={this.state.isOpenElection} onChange={this.onToggleType} />

                    <ReactDatePicker className="datepicker" placeholderText="Choose a deadline if any" dateFormat="YYYY-MM-DD"
                                     selected={this.state.deadline} onChange={this.onDeadlineChange}/>


                    <button type="submit" className="pure-button pure-button-primary">Create a new election</button>
                </fieldset>

                <ToastContainer closeOnClick hideProgressBar={true}/>
            </form>
        )
    }

}