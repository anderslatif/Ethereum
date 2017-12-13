import React, {Component} from 'react';

// redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as democracyActions from '../../actions/DemocracyActions.js';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';

import Authentication from "../../../docs/Authentication.md";
import Killable from "../../../docs/Killable.md";
import Migrations from "../../../docs/Migrations.md";
import OpenElection from "../../../docs/OpenElection.md";
import Ownable from "../../../docs/Ownable.md";
import Parliament from "../../../docs/Parliament.md";

import base64 from 'base-64';
import ReactMarkdown from 'react-markdown';

class Documentation extends Component {


    render() {

        return (
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1">

                        <Tabs
                            defaultActiveKey="2"
                            renderTabBar={() => <ScrollableInkTabBar/>}
                            renderTabContent={() => <TabContent/>}
                        >
                            <TabPane tab='Authentication' key="1"><ReactMarkdown
                                source={base64.decode(Authentication.replace('data:text/x-markdown;base64,', ''))}/></TabPane>
                            <TabPane tab='Killable' key="2"><ReactMarkdown
                                source={base64.decode(Killable.replace('data:text/x-markdown;base64,', ''))}/></TabPane>
                            <TabPane tab='Migrations' key="3"><ReactMarkdown
                                source={base64.decode(Migrations.replace('data:text/x-markdown;base64,', ''))}/></TabPane>
                            <TabPane tab='OpenElection' key="4"><ReactMarkdown
                                source={base64.decode(OpenElection.replace('data:text/x-markdown;base64,', ''))}/></TabPane>
                            <TabPane tab='Ownable' key="5"><ReactMarkdown
                                source={base64.decode(Ownable.replace('data:text/x-markdown;base64,', ''))}/></TabPane>
                            <TabPane tab='Parliament' key="6"><ReactMarkdown
                                source={base64.decode(Parliament.replace('data:text/x-markdown;base64,', ''))}/></TabPane>


                        </Tabs>
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

