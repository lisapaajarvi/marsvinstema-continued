import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
// import axios from 'axios';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from "react-router-dom";
import { CSSProperties } from '@material-ui/styles';
import { UserContext } from './contexts/UserContext';

function ProfileCard() {  
    const { user } = useContext(UserContext)
    // const logout = () => {
    //     axios
    //       .post('/api/users/logout')
    //       .then(res => {
    //         console.log(res)
    //         setUser(undefined)
    //         })
    // }

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
                    <Button size="small" variant="contained" color="primary" style={buttonStyle}>LOG OUT</Button>
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
    // background: 'green',
    // color: 'white',
    margin: '1rem'
}

export default ProfileCard;