import React, { Component } from 'react';
import  { connect } from 'react-redux';

class Header extends Component {

  getAuthHeader() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google/">Login with Google</a></li>;
      default:
        return <li><a href="/api/logout">Logout</a></li>

    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo">Emaily</a>
          <ul className="right">
            {this.getAuthHeader()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapDispatchToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapDispatchToProps)(Header);
