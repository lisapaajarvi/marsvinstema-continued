import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

interface Props extends RouteProps {
    component: React.ComponentType;
    adminOnly: boolean;
}

const ProtectedRoute = ({ component: Component, adminOnly, ...rest }: Props) => {
    const { user } = useContext(UserContext)

    return (
        <Route {...rest} render={props => {
            if (user && (!adminOnly || user.access === "admin")) {
                return <Component {...rest} {...props} />
            } else {
                return <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />
            }
        }} />
    )
};

export default ProtectedRoute;