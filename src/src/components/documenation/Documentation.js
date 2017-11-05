import React, {Component} from 'react';

// redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as democracyActions from '../../actions/DemocracyActions.js';


class Documentation extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1">
                        <p>documenation page</p>
                    </div>
                </div>
            </main>
        )
    }

}

const mapStateToProps = (state) => ({
    web3Instance: state.web3.web3Instance,
    coinbase: state.web3.coinbase
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        democracyActions: bindActionCreators(democracyActions, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Documentation);
// the connect method transforms the current Redux store state and imported actions into the props

