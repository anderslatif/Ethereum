import React, { Component } from 'react'

// redux store
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as democracyActions from '../../actions/DemocracyActions.js';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Good to Go!</h1>
            <p>Your Truffle Box is installed and ready.</p>
            <h2>Smart Contract Authentication</h2>
            <p>This particular box comes with autentication via a smart contract built-in.</p>
            <p>In the upper-right corner, you'll see a login button. Click it to login with with the Authentication smart contract. If there is no user information for the given address, you'll be redirected to sign up. There are two authenticated routes: "/dashboard", which displays the user's name once authenticated; and "/profile", which allows a user to update their name.</p>
            <h3>Redirect Path</h3>
            <p>This example redirects home ("/") when trying to access an authenticated route without first authenticating. You can change this path in the failureRedriectUrl property of the UserIsAuthenticated wrapper on <strong>line 9</strong> of util/wrappers.js.</p>
            <h3>Accessing User Data</h3>
            <p>Once authenticated, any component can access the user's data by assigning the authData object to a component's props.<br/><code>{"// In component's render function."}<br/>{"const { authData } = this.props"}<br/><br/>{"// Use in component."}<br/>{"Hello { this.props.authData.name }!"}</code></p>
            <h3>Further Reading</h3>
            <p>The React/Redux portions of the authentication fuctionality are provided by <a href="https://github.com/mjrussell/redux-auth-wrapper" target="_blank">mjrussell/redux-auth-wrapper</a>.</p>
          </div>
        </div>
      </main>
    )
    }

}

const mapStateToProps = (state) => ({
/*    addedMenuItems: state.orders.addedMenuItems.toArray(),
    total: state.orders.total*/
});

const mapDispatchToProps = (dispatch) => ({
    actions : {
        democracyActions : bindActionCreators(democracyActions, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// the connect method transforms the current Redux store state and imported actions into the props

