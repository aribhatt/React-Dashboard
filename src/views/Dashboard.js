import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import Panel from 'react-toolbox/lib/layout/Panel';
import { BrowserRouter } from 'react-router';
import './css/dashboard.css';
import NavItemList from '../containers/navItemList';
import DashboardContent from './DashboardContent';

class Dashboard extends React.Component {


    constructor(props){
      super(props);
      this.state = {
          drawerActive: false,
          drawerPinned: false,
          sidebarPinned: false
      };
    }

    componentWillMount(){
      console.log("Component will mount");
    }
    componentDidMount(){
      console.log("Component did mount");
    }
    componentWillUpdate(){
      console.log("Component will update");
    }
    componentDidUpdate(){
      console.log("Component did update");
    }

    toggleDrawerActive = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
    };

    toggleDrawerPinned = () => {
        this.setState({ drawerPinned: !this.state.drawerPinned });
    }

    render() {
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                    pinned={this.state.drawerPinned} permanentAt='lg'
                    onOverlayClick={ this.toggleDrawerActive } className="side-nav">
                    <NavItemList/>
                </NavDrawer>
                <Panel>
                    <AppBar title='React Toolbox' leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive } />
                    <div className="main-content" style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                      <DashboardContent />
                    </div>
                </Panel>
            </Layout>
        );
    }
}

export default Dashboard;
