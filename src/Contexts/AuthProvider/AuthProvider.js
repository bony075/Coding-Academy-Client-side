import React, { createContext } from 'react';
import { getAuth, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth= getAuth(app);


const AuthProvider = ({ children }) => {
    const user = { displayName: 'test user' };
    const providerLogin = (provider) => {
        return signInWithPopup(auth,provider);
    }








    const authinfo = { user, providerLogin };
    return (
        <AuthContext.Provider value={authinfo}>
            { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;