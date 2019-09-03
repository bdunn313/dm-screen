import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  active: {
    color: theme.palette.primary.contrastText
  },
  link: {
    color: theme.palette.primary.light
  }
}));

type Props = {
  to: string;
  active: boolean;
  testId?: string;
  children: React.ReactNode;
};

function NavLink(props: Props) {
  const classes = useStyles();
  const { to, active, testId = "navlink", children } = props;
  const className = active ? classes.active : classes.link;
  return (
    <Button
      color="inherit"
      to={to}
      component={RouterLink}
      className={className}
      data-testid={testId}
    >
      {children}
    </Button>
  );
}

export default NavLink;
