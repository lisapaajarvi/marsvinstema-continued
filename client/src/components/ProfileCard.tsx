import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import { CSSProperties } from "@material-ui/styles";
import { UserContext } from "./contexts/newContext";

function ProfileCard() {
  const { user, logout } = useContext(UserContext);

  if (!user) return null;

  return (
    <div style={profileContainer}>
      <div style={userNameStyle}>
        <p
          style={{
            color: "white",
            marginLeft: "0.5rem",
            fontFamily: "Helvetica",
          }}
        >
          {user.username}
        </p>
        {user.access === "admin" ? (
          <Link to="/admin" style={{ color: "lightgray", marginLeft: "1rem" }}>
            <SettingsIcon style={{ color: "#F0F0F0" }} />
          </Link>
        ) : (
          <div></div>
        )}
        <Button
          size="small"
          href={"/"}
          variant="contained"
          color="primary"
          style={buttonStyle}
          onClick={logout}
        >
          LOGGA UT
        </Button>
      </div>
    </div>
  );
}

const profileContainer: CSSProperties = {
  display: "flex",
  alignItems: "flex-end",
  textAlign: "center",
};
const userNameStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const buttonStyle: CSSProperties = {
  margin: "1rem",
};

export default ProfileCard;
