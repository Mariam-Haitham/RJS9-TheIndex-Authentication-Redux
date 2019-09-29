import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./redux/actions";

// Logo
import logo from "./assets/theindex.svg";

class Sidebar extends Component {
  render() {
    const display = () => {
      if (!this.props.user) {
        return (
          <>
            <Link to="/login" className="btn btn-info m-2 float-left">
              Login
            </Link>
            <Link to="/signup" className="btn btn-success m-2 float-left">
              Signup
            </Link>
          </>
        );
      } else {
        return (
          <button
            className="btn btn-danger"
            onClick={() => this.props.logout()}
          >
            Logout {this.props.user.username}
          </button>
        );
      }
    };
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
        </section>

        <div className="fixed-bottom">{display()}</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
