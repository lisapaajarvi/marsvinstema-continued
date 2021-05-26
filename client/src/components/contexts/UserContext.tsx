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
    signup: (newUser: any) => void;
    login: (loginBody: any) => void;
    logout: () => void;
}    

export const UserContext = createContext<ContextValue>({
    login: () => {},
    logout: () => {},
    signup: () => {}
});
class UserProvider extends Component<{}, State> {
    state: State = {};

    async fetchUser() {
        const response = await fetch('/api/users/auth');
        const user = await response.json();
        this.setState({ user });
        console.log(user);
    }

    componentDidMount() {
        this.fetchUser();
    }

    signup = (newUser: any)=> {
        axios
          .post('/api/users/register', newUser)
          .then(res => {
            console.log(res)

        })
        .catch(err => console.log(err))
  
      }
  
    login = (loginBody: any)=> {
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
            this.setState({user: undefined})
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