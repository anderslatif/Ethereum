import React, { Component } from 'react'

export default class ViewModeButtonGroup extends Component {


    render() {
        if (this.props.isCreatingNewElection) {
            return (
                <div>
                    <p>Create new election</p>
                    <button type="button" onClick={this.props.changeViewMode}>Cancel</button>
                </div>
            )
        }

        return (
            <div>
                <p>Create a new contract</p>
                <button type="button" onClick={this.props.changeViewMode}>+</button>
            </div>
        )


    }

}