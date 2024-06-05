import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const setToken = (token) => {
        localStorage.setItem('jwtToken', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    };
    // const createUser = (email, password) => {
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password);
    // };
    const createUser = async (email, password) => {
        setLoading(true);
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        const idToken = await user.getIdToken();
        const res = await axios.post('https://eventify-server-amber.vercel.app/user', { idToken });
        setToken(res.data.token);
        setUser(user);
        setLoading(false);
    };


    // const signIn = (email, password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password);
    // };
    const signIn = async (email, password) => {
        setLoading(true);
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        const idToken = await user.getIdToken();
        const res = await axios.post('https://eventify-server-amber.vercel.app/user', { idToken });
        setToken(res.data.token);
        setUser(user);
        setLoading(false);
    };

    const logout = () => {
        return signOut(auth).then(() => setUser(null));
    };

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
        const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser);
            } else {
                setLoading(false);
            }
        });
        return () => {
            return unscubcribe();
        };
    }, []);

    const authInfo = { user, googleLogin, createUser, signIn, logout, loading };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;