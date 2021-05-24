import React, { createContext, useState, useEffect } from 'react'
interface User {
    id: any,
    username: String,
    email: String,
    access: String,
}

const UserContext = createContext<User>({
    user: {}
    
})

export const UserConsumer = UserContext.Consumer


// export const UserContext = createContext<ContextValue>({
//     user: {}
//     setUserInContext: () => {},
// });

export function UserProvider({ children }) {


    useEffect(() => {

    })       

    

    return (
        <UserContext.Provider value={{
            user,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext