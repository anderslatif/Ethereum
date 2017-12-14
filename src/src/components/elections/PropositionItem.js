import React, {Component} from 'react';

export default class PropositionItem extends Component {


    render() {

        return (
            <main className="container">
                <p>{this.props.proposal}</p>
                <p>Votes: {this.props.votes}</p>
                <div>
                    <button type="submit" className="pure-button pure-button-primary"
                            onClick={event => this.props.castAVote(this.props.proposalIndex, event)}>Cast your vote</button>
                </div>
            </main>
        )
    }

}

