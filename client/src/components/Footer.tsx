import { Box, Typography } from "@material-ui/core";
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Box pt={2} pb={2}>
      <Typography variant="subtitle2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link style={linkStyle} to="/">
          {' Marsvinstema '}
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

const linkStyle: CSSProperties = {
  textDecoration: 'none',
  color: 'gray'
}