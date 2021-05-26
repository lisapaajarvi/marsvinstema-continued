import axios from 'axios';
import { Component, createContext } from 'react';

interface State {
    user?: User
}

interface User {
    id: string,
    username: string,
    email: string,
    access: string,
}

interface ContextValue extends State {
    setUserInContext: (newUser: User) => void;
    logout: () => void;
}    

export const UserContext = createContext<ContextValue>({
    setUserInContext: () => {},
    logout: () => {}
});
class UserProvider extends Component<{}, State> {
    state: State = {};

    setUserInContext = (newUser: User) => {
        this.setState({ user: newUser });
    }

    async fetchUser() {
        const response = await fetch('/api/users/auth');
        const user = await response.json();
        this.setState({ user });
        console.log(user);
    }

    componentDidMount() {
        this.fetchUser();
    }

    logout = () => {
        axios
          .post('/api/users/logout')
          .then(res => {
            console.log(res)
            this.setState({user: undefined})
        })
    }

    render() {
        return (
            <UserContext.Provider value={{
                user: this.state.user,
                setUserInContext: this.setUserInContext,
                logout: this.logout
            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;