import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavItem from '../views/NavItem';
import { bindActionCreators } from 'redux';
import { activeNavItem } from '../actions/index';

class NavItemList extends Component{
  renderList(){
    return this.props.navItems.map((item) => {
      return (
        <NavItem name={item.name} icon={item.icon} link={item.path} />
      );
    });
  }

  render(){
    return(
      <ul className='navlist-group'>
        { this.renderList() }
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    navItems: state.navItems
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({activeNavItem: activeNavItem}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavItemList);
