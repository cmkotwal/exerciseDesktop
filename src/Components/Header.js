import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import DialogForm from "./DialogForm";
const Header = ({ muscles, handleSubmit, exercise }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" align="inherit" style={{ flex: 1 }}>
            Exercise Desktop
          </Typography>
        </Toolbar>
        <DialogForm
          muscles={muscles}
          handleSubmit={handleSubmit}
          exercise={exercise}
        />
      </AppBar>
    </div>
  );
};

export default Header;
