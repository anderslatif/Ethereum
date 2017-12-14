import React, {Component} from 'react'
import {Link} from 'react-router'
import {HiddenOnlyAuth, VisibleOnlyAuth} from './util/wrappers.js'

// UI Components
import LoginButtonContainer from './components/user_auth/loginbutton/LoginButtonContainer';
import LogoutButtonContainer from './components/user_auth/logoutbutton/LogoutButtonContainer';

// Styles
import './styles/fonts/oswald.css';
import './styles/fonts/open-sans.css';
import './styles/fonts/pure-min.css';
import './styles/App.css';
import './styles/Documentation.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datepicker/dist/datepicker.css';
import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css';


class App extends Component {
    render() {
        const OnlyAuthLinks = VisibleOnlyAuth(() =>
                <span>
        <li className="pure-menu-item">
          <Link to="/documentation" className="pure-menu-link">Documentation</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/profile" className="pure-menu-link">Profile</Link>
        </li>
        <LogoutButtonContainer/>
      </span>
        );

        const OnlyGuestLinks = HiddenOnlyAuth(() =>
                <span>
        <li className="pure-menu-item">
          <Link to="/documentation" className="pure-menu-link">Documentation</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/signup" className="pure-menu-link">Sign Up</Link>
        </li>
        <LoginButtonContainer/>
      </span>
        );

        return (
            <div className="App">
                <nav className="navbar pure-menu pure-menu-horizontal">
                    <ul className="pure-menu-list navbar-right">
                        <OnlyGuestLinks/>
                        <OnlyAuthLinks/>
                    </ul>
                    <Link to="/" className="pure-menu-heading pure-menu-link">Democracy Manifest</Link>
                </nav>

                {this.props.children}
            </div>
        );
    }
}

export default App
