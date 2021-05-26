import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from "react-router-dom";
import { CSSProperties } from '@material-ui/styles';
import { UserContext } from './contexts/UserContext';

function ProfileCard() {  
    const { user, logout } = useContext(UserContext)
    
    console.log({ user });

    if(!user) return null;
    
    return (   
        
        <div style={profileContainer}>
            <div style={userNameStyle}>
                <p style={{color:'white'}}>{user.username}</p>
                { user.access === "admin" ? (
                    <Link to="/crud" style={{color: 'lightgray', marginLeft: '1rem'}}>
                        <SettingsIcon />
                    </Link>
                        ) : (  
                    <div></div>
                )} 
                <Button size="small" variant="contained" color="primary" style={buttonStyle} onClick={logout}>LOG OUT</Button>
            </div>
        </div>
    )    
}

const profileContainer: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'center'
}
const userNameStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const buttonStyle: CSSProperties = {
    // color: 'white',
    margin: '1rem'
}

export default ProfileCard;