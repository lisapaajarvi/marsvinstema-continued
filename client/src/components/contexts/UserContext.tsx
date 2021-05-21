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
        id:"123",
        username: "Marsvinstok123",
        email: "abc",
        access: "admin"
    },
    setUserInContext: () => {},

});

// function getUser() {
// //     const cart = localStorage.getItem('cart');
// //     if (cart) {
// //       return JSON.parse(cart) as CartProduct[];
// //     }
// //     return [];
//    }

class UserProvider extends Component<{}, State> {
    state: State = {
        //user: getUser()
        user: {
            id:"123",
            username: "Marsvinstok123",
            email: "abc",
            access: "admin"
        },
    }

    setUserInContext = (newUser: User) => {
        this.setState({ user: newUser });
    }

    render() {
        return (
            <UserContext.Provider value={{
                user: this.state.user,
                setUserInContext: this.setUserInContext

            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;