import React from "react";
import { AppBar, Toolbar, Container, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Link as RouterLink,
  RouteComponentProps,
  withRouter
} from "react-router-dom";

type Props = RouteComponentProps;

const useStyles = makeStyles((theme: Theme) => ({
  active: {
    color: theme.palette.primary.contrastText
  },
  link: {
    color: theme.palette.primary.light
  }
}));

function NavLink(props: {
  to: string;
  active: boolean;
  children: React.ReactNode;
}) {
  const classes = useStyles();
  const { to, active, children } = props;
  const className = active ? classes.active : classes.link;
  return (
    <Button
      color="inherit"
      to={to}
      component={RouterLink}
      className={className}
    >
      {children}
    </Button>
  );
}

function Navigation(props: Props) {
  const { pathname } = props.location;
  const isActive = (route: string): boolean => pathname === route;
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Container>
          <NavLink to="/" active={isActive("/")}>
            Home
          </NavLink>
          <NavLink to="/characters" active={isActive("/characters")}>
            Characters
          </NavLink>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Navigation);
