import React from "react";
import { Route, Switch } from "react-router-dom";

// core Admin Layout components
import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

// Universal list of routes
import routes from "routes.js";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    // Set the state of the Admin Layout Component
    this.state = {
      backgroundColor: "blue",
      // Check to see if the sidebar has been toggled "open"
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1
    };
  }

  // Use when you need to do something when the component loads
  componentDidMount() {}

  // Use when you need to do something when the component is about to leave the DOM
  // Generally used to undo what was done in the componentDidMount function
  componentWillUnmount() {}

  // Use to do something when the component is updated
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      // When the history is updated... ensure the scroll is reset
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }

  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };

  getRoutes = routes => {
    // Loop through the routes
    return routes.map((prop, key) => {
      // Check if route uses the Admin layout
      if (prop.layout === "/admin") {
        return (
          // Add the relevant route (react-router) to the app
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else if (prop.layout === "/public") {
        return null;
      } else {
        // DO not return routes that do not use the Admin Layout
        return null;
      }
    });
  };

  getBrandText = path => {
    // Loop through routes (as defined in routes.js
    for (let i = 0; i < routes.length; i++) {
      if (
        // Find the route that matches the current browser location
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        // Return the name of the current route
        return routes[i].name;
      }
    }
    // If no route matches the current location... return some generic text
    return "DySoCo";
  };

  render() {
    return (
      // This is a React.Fragment
      // Use to group children without adding extra nodes to the DOM
      <>
        <div className="wrapper">
          <Sidebar
            {...this.props}
            routes={routes}
            bgColor={this.state.backgroundColor}
            toggleSidebar={this.toggleSidebar}
          />
          <div
            className="main-panel"
            ref="mainPanel"
            data={this.state.backgroundColor}
          >
            <AdminNavbar
              {...this.props}
              brandText={this.getBrandText(this.props.location.pathname)}
              toggleSidebar={this.toggleSidebar}
              sidebarOpened={this.state.sidebarOpened}
            />
            <Switch>{this.getRoutes(routes)}</Switch>

            <Footer fluid />

          </div>
        </div>

      </>
    );
  }
}

export default Admin;
