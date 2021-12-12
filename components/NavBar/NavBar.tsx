import type { NextComponentType } from "next";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import { ThemeT } from "../../types/theme";
import { teal, indigo } from "@mui/material/colors";

const NavBar: NextComponentType = () => {
  const classes = useStyles();

  return (
    <Box sx={boxStyles}>
      <Link
        underline="none"
        variant="h5"
        color={indigo["500"]}
        className={classes.logo}
      >
        Thai Church DC
      </Link>
      <Box sx={linkBoxStyles}>
        <Link
          underline="none"
          variant="subtitle1"
          color={indigo["300"]}
          className={`${classes.navLink} ${classes.linkColor}`}
        >
          Home
        </Link>

        <Link
          underline="none"
          variant="subtitle1"
          color={indigo["300"]}
          className={`${classes.navLink} ${classes.linkColor}`}
        >
          Mission
        </Link>

        <Link
          underline="none"
          variant="subtitle1"
          color={indigo["300"]}
          className={`${classes.navLink} ${classes.linkColor}`}
        >
          Events
        </Link>

        <Link
          underline="none"
          variant="subtitle1"
          color={indigo["300"]}
          className={`${classes.navLink} ${classes.linkColor}`}
        >
          Contact
        </Link>

        <Link
          underline="none"
          variant="subtitle1"
          className={`${classes.navLink} ${classes.giveLink}`}
          color={teal[500]}
        >
          GIVE
        </Link>
      </Box>
    </Box>
  );
};



const useStyles = makeStyles((theme: ThemeT) => ({
  logo: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  navLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 10px",
    height: "100%",
    fontSize: "17px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  linkColor: {
    color: indigo["300"],
    "&:hover": {
      backgroundColor: indigo["100"],
      color: indigo["600"],
    },
  },
  giveLink: {
    "&:hover": {
      backgroundColor: teal["100"],
      color: teal["600"],
    },
  },
}));

const boxStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: indigo["50"],
  fontWeight: "bold",
  height: "50px",
  padding: "0px 30px",
};

const linkBoxStyles = {
  height: "100%",
  display: "flex",
  alignItems: "center",
};

export default NavBar;
