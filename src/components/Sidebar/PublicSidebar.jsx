/*eslint-disable*/
import React from "react";
import { NavLink, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import { Nav } from "reactstrap";


class PublicSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  componentDidMount() {}

  componentWillUnmount() {}

  linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };

  render() {
    const { bgColor, routes, rtlActive } = this.props;

    return (
      <div className="sidebar" data={bgColor}>
        <div className="sidebar-wrapper" ref="sidebar">

          <Nav>
            {/* Build the PublicSidebar nav items using the routes defined in routes.js*/}
            {routes.map((prop, key) => {
              if (prop.redirect) return null;
              if (prop.layout !== "/admin") {
                  return (
                      <li
                          className={
                              this.activeRoute(prop.path) +
                              (prop.pro ? " active-pro" : "")
                          }
                          key={key}
                      >
                        <NavLink
                            to={prop.layout + prop.path}
                            className="nav-link"
                            activeClassName="active"
                            onClick={this.props.togglePublicSidebar}
                        >
                          <i className={prop.icon} />
                          <p>{prop.name}</p>
                        </NavLink>
                      </li>
                  )
                } else {
                  return null
                }
              })}
          </Nav>
        </div>
      </div>
    );
  }
}

// Initialize the PublicSidebar Component with sensible default properties
PublicSidebar.defaultProps = {
  rtlActive: false,
  bgColor: "primary",
  routes: [{}]
};


// Check the data types of the PublicSidebar properties
PublicSidebar.propTypes = {
  // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
  // insde the links of this component
  rtlActive: PropTypes.bool,
  bgColor: PropTypes.oneOf(["primary"]),
  routes: PropTypes.arrayOf(PropTypes.object)
};

export default PublicSidebar;
