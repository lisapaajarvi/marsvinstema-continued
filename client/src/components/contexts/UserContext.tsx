import axios from 'axios';
import { Component, createContext } from 'react';

interface State {
    user?: User
}

interface User {
    username: string,
    email: string,
    access: string,
}

interface NewUser {
    username: string,
    email: string,
    password: string;
}

interface LoginBody {
    email: string,
    password: string
}

interface ContextValue extends State {
    signup: (newUser: NewUser) => void;
    login: (loginBody: LoginBody) => void;
    logout: () => void;
}

export const UserContext = createContext<ContextValue>({
    login: () => { },
    logout: () => { },
    signup: () => { }
});
class UserProvider extends Component<{}, State> {
    state: State = {};

    async fetchUser() {
        const response = await fetch('/api/users/auth');
        if (response.ok) {
            const user = await response.json();
            this.setState({ user });
        }
    }

    componentDidMount() {
        this.fetchUser();
    }

    signup = (newUser: any) => {
        axios
            .post('/api/users/register', newUser)
            .then(res => {
                console.log(res)

            })
            .catch(err => console.log(err))

    }

    login = (loginBody: any) => {
        axios
            .post('/api/users/login', loginBody)
            .then(({ data: user }) => {
                this.setState({ user });

            })
    }

    logout = () => {
        axios
            .post('/api/users/logout')
            .then(res => {
                console.log(res)
                this.setState({ user: undefined })
            })
    }

    render() {
        return (
            <UserContext.Provider value={{
                signup: this.signup,
                user: this.state.user,
                login: this.login,
                logout: this.logout
            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;