import React, { createContext, useState, useContext } from 'react';


const UserContext = createContext(null);


export const useUser = () => {
    return useContext(UserContext);
};


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser === "undefined" || !savedUser) {
            //console.warn("User data in localStorage is invalid. Resetting to null."); 
            //Removing this as warning no need in current stage
            return null;
        }
        try {
            return JSON.parse(savedUser);
        } catch (error) {
            console.error("Error parsing user from localStorage:", error);
            localStorage.removeItem('user'); 
            return null;
        }
    });

    const login = (userData) => {
        try {
            //console.log("User data being saved:", userData);  
            if (typeof userData !== 'object' || userData === null) {
                throw new Error("Invalid user data provided for login.");
            }
            const userJson = JSON.stringify(userData);
            setUser(userData);
            localStorage.setItem('user', userJson);  
        } catch (error) {
            console.error("Error saving user to localStorage:", error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');  
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};