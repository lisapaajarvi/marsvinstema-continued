// import { Component, createContext } from 'react';
// import axios from 'axios';
// // import { ObjectID } from 'mongodb';

// interface State {
//     user: User
// }

// interface User {
//     id: any,
//     username: String,
//     email: String,
//     access: String,
// }


// interface ContextValue extends State {
//     setUserInContext: (newUser: User) => void;
// }

// export const UserContext = createContext<ContextValue>({
//     user: {}
//     setUserInContext: () => {},
// });

// function getUser() {
//     axios
//   .get('/api/users/getCurrentUser')
//   .then(({ data: user }) => {
//     this.setState = ({user})
    
//   })
//   .catch(err =>{
//     console.log('No user is logged in');
//     this.setState({})
//    }

// class UserProvider extends Component<{}, State> {
//     state: State = {
//         user: getUser()
//     }

//     setUserInContext = (newUser: User) => {
//         this.setState({ user: newUser });
//     }

//     render() {
//         return (
//             <UserContext.Provider value={{
//                 user: this.state.user,
//                 setUserInContext: this.setUserInContext

//             }}>
//                 {this.props.children}
//             </UserContext.Provider>
//         );
//     }
// }

// export default UserProvider;