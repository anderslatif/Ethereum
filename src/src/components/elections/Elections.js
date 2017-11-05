import React, {Component} from 'react';

// redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as democracyActions from '../../actions/DemocracyActions.js';


class Elections extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: this.props.params.address
        }
    }


    render() {
        // either the contract doesn't exist
        // or it does but user doesn't have voting / viewing access
        // or the user does have access to the contract and can vote
        return (
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1">
                        <p>elections page</p>
                    </div>
                </div>
            </main>
        )
    }

}

const mapStateToProps = (state) => ({
    propositions: state.democracy.propositions.toArray(),
    counts: state.democracy.counts.toArray()
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        democracyActions: bindActionCreators(democracyActions, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Elections);
// the connect method transforms the current Redux store state and imported actions into the props

