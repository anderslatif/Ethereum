import React, { Component } from 'react'

export default class ViewModeButtonGroup extends Component {


    render() {
        if (this.props.isCreatingNewElection) {
            return (
                <div style={{paddingTop:"30px",paddingBottom:"20px"}}>
                    <p>Create a new election</p>
                    <button type="button" onClick={this.props.changeViewMode} style={{width:"150px"}}>Cancel</button>
                </div>
            )
        }

        return (
            <div style={{paddingTop:"30px",paddingBottom:"40px"}}>
                <p>Create a new contract</p>
                <button type="button" onClick={this.props.changeViewMode} style={{width:"150px"}}>+</button>
            </div>
        )


    }

}