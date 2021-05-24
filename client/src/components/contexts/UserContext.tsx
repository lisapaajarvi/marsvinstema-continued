import { Component, createContext } from 'react';
//import { ObjectID } from 'mongodb';

interface State {
    user: User
}

interface User {
    id: any,
    username: String,
    email: String,
    access: String,
}


interface ContextValue extends State {
    setUserInContext: (newUser: User) => void;
}

export const UserContext = createContext<ContextValue>({
    user: {
        id: "",
        username: "",
        email: "",
        access: ""
    },
    setUserInContext: () => {},

});

 // Måste vi inte hämta ut ett ID för att hämta en user ? getUser(id: number) sen göra en koll if(user.id === id )........ en fundering bara ? 
function getUser() {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user) as User;
    }
    return user;
   }

class UserProvider extends Component<{}, State> {
    setState(arg0: { user: User; }) {
        throw new Error('Method not implemented.');
    }
    state: State = {
        user: {
            id: "123",
            username: "Marsvinstok123",
            email: "abc",
            access: "admin"
        },
    }

    setUserInContext = (newUser: User) => {
        this.setState({ user: newUser });
    }
    props: any;

    render() {
        return (
            <>
            <UserContext.Provider value={{
                user: this.state.user,
                setUserInContext: this.setUserInContext

            }}>
                {this.props.children}
            </UserContext.Provider>
            </>
        );
    }
}

export default UserProvider;