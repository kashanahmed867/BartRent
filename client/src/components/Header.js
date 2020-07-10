import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <React.Fragment>
            <li key="1">
              <a href="/auth/google">Login With Google</a>
            </li>
            <li key="2">
              <a href="/auth/facebook">Login With facebook</a>
            </li>
            <li key="3">
              <a href="/login">Login</a>
            </li>
            <li key="4">
              <a href="/register">Register</a>
            </li>
          </React.Fragment>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li>
              <a href="#">SignIn With Google</a>
            </li> */}
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
