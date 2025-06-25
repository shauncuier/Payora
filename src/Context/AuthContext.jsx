// src/context/AuthContext.jsx

import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [balance, setBalance] = useState(10000); // ✅ starting balance

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setBalance(10000); // ✅ reset when user signs in
        });

        return () => unsubscribe();
    }, []);

    const updateBalance = (amount) => {
        setBalance((prev) => prev - amount);
    };

    return (
        <AuthContext.Provider value={{ user, balance, updateBalance }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
