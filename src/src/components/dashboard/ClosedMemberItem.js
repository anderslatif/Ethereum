import React, { Component } from 'react'

import ReactDatePicker from 'react-datepicker';
import ReactBootstrapToggle from 'react-bootstrap-toggle';

export default class ClosedMemberItem extends Component {


    render() {


        return (
            <div>
                <input id="name" type="text" value={this.state.propositionDescription} onChange={event => this.setState({propositionDescription: event.target.value})}
                       placeholder="Proposition Description"/>
                <span className="pure-form-message">Ask a question that describes in clear terms what the election is about.</span>
            </div>
        )
    }

}