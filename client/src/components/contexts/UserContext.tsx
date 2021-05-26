import { Component, createContext } from 'react';

// interface User {
// 	id: String;
// 	userName: String;
// 	email: String;
// 	access: String;
// }

interface Errors {
    wrongPassword: string;
    noUsername: string;
}
interface State {
	id: String;
	userName: String;
	email: String;
	access: String;
}
interface Context extends State {
	setUserInContext: (newUser: User) => void;
	handleLogout: () => void;
}

const UserContext = createContext<ContextValue>({
	user: {
		id: '',
		username: '',
		email: '',
		access: '',
	},
	setUserInContext: () => {},
});

export const UserConsumer = UserContext.Consumer;

// Måste vi inte hämta ut ett ID för att hämta en user ? getUser(id: number) sen göra en koll if(user.id === id )........ en fundering bara ?
function getUser() {
	const user = localStorage.getItem('user');
	if (user) {
		return JSON.parse(user) as User;
	}
	return user;
}

class UserProvider extends Component<{}, State> {
	// setState(_arg0: { user: User }) {
	// 	throw new Error('Method not implemented.');
	// }

	// setUserInContext = (newUser: User) => {
	// 	this.setState({ user: newUser });
	// };
	// props: any;

    state: State = {
        userName: "",
        email:"",
        errors: {
            wrongPassword: "",
            noUsername: "",
        },
    };


interface Context extends State {
    handleRegistration: () => void;
    handleLogin: () => void;
    handleLogout: () => void;
    setUserInContext: (newUser: User) => void;
}

	render() {
		return (
			<>
				<UserContext.Provider
					value={{
						user: this.state.user,
						setUserInContext: this.setUserInContext,
					}}
				>
					{this.props.children}
				</UserContext.Provider>
			</>
		);
	}
}

export default UserContext;
