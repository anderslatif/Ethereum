import React, { Component } from 'react'

import { ToastContainer, toast } from 'react-toastify';


export default class CreateNewElection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            propositionDescription: '',
            propositions: []
        }
    }



    handleSubmit = () => {
        toast.success("submitted")
    };

    render() {
        return (
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit}>
                <fieldset>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={this.state.propositionDescription} onChange={event => this.setState({propositionDescription: event.target.value})}
                           placeholder="Name"/>
                    <span className="pure-form-message">This is a required field.</span>

                    <br/>

                    <button type="submit" className="pure-button pure-button-primary">Sign Up</button>
                </fieldset>

                <ToastContainer closeOnClick hideProgressBar={true}/>
            </form>
        )
    }

}