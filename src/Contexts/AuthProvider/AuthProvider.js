import React, { createContext } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const user = { displayName: 'test user' };
    const authinfo={user};
    return (
        <AuthContext.Provider value={authinfo}>
            { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;