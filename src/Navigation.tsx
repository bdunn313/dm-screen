import React from "react";
import { AppBar, Toolbar, Container, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RouteComponentProps, withRouter } from "react-router-dom";

import NavLink from "./NavLink";
import { routes, PageRoute } from "./config";

type Props = RouteComponentProps;

const withStyles = makeStyles({
  container: {
    flexGrow: 1,
    marginBottom: 20
  },
  pageTitle: {
    flexGrow: 1
  }
});

export function getActivePage(
  pathname: string,
  routes: PageRoute[]
): PageRoute {
  const activePage = routes.find(route => pathname === route.pathname);
  return activePage || { pathname: "/", title: "" };
}

function Navigation(props: Props) {
  const classes = withStyles();
  const { pathname } = props.location;
  const activePage = getActivePage(pathname, routes);
  return (
    <Box className={classes.container}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="h1" className={classes.pageTitle}>
            {activePage.title}
          </Typography>
          <Box>
            {routes.map(route => (
              <NavLink
                key={`route-${route.title}`}
                to={route.pathname}
                active={route.pathname === activePage.pathname}
                testId={`navlink-${route.title}`}
              >
                {route.title}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default withRouter(Navigation);
