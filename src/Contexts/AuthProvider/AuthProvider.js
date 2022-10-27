import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
const [loading,setLoading] = useState(true);


    const providerLogin = (provider) => {
        setLoading(false);
        return signInWithPopup(auth, provider);
    }
    // const githubProviderLogin = (provider) => {
    //     setLoading(false);
    //     return signInWithPopup(auth, provider);
    // }
const forgetPassword = (email) => { 
    return sendPasswordResetEmail(auth,email);
}

    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
     }
    const signIn = (email, password) => { 
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }



    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    
    }

    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log('user insede changed', currentuser);
            setUser(currentuser);
            setLoading(false);
        });
        return ()=> {
            unsubscribe();
        }


    }, [])






    const authinfo = { user, loading, providerLogin, logOut, createUser, signIn, updateUserProfile, forgetPassword };
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;