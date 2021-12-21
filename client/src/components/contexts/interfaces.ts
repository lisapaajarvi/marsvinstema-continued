export interface State {
    user?: User;
  }
  
export interface User {
    username: string;
    email: string;
    access: string;
  }
  
export interface LoginBody {
    email: string;
    password: string;
  }

export interface NewUser extends LoginBody {
    username: string;
  }
    
export interface ContextValue extends State {
    getUser: () => void;
    signup: (newUser: NewUser) => void;
    login: (loginBody: LoginBody) => void;
    logout: () => void;
  }