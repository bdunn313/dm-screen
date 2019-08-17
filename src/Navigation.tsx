import React from "react";
import { AppBar, Toolbar, Container, Typography } from "@material-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";

import NavLink from "./NavLink";
import { routes, PageRoute } from "./config";

type Props = RouteComponentProps;

export function getActivePage(
  pathname: string,
  routes: PageRoute[]
): PageRoute {
  const activePage = routes.find(route => pathname === route.pathname);
  return activePage || { pathname: "/", title: "" };
}

function Navigation(props: Props) {
  const { pathname } = props.location;
  const activePage = getActivePage(pathname, routes);
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Container>
          <Typography variant="h6" component="h1">
            {activePage.title}
          </Typography>
          {routes.map(route => (
            <NavLink
              to={route.pathname}
              active={route.pathname === activePage.pathname}
              testId={`navlink-${route.title}`}
            >
              {route.title}
            </NavLink>
          ))}
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Navigation);
