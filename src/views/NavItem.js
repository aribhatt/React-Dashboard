import React, { Component } from 'react';
import IconButton from 'react-toolbox/lib/button/IconButton';
import { NavLink } from 'react-router-dom';
import './css/dashboard.css';

class NavItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li>
          <NavLink activeClassName='nav-link-active' to={this.props.link}>
            {/* <span className='navlist_item_icon'>
              <i className='material-icon'>{this.props.icon}</i>
            </span> */}
            <span className='navlist_item_text'>{this.props.name}</span>
          </NavLink>
      </li>
    );
  }

}

export default NavItem;
