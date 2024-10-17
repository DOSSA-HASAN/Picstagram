import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth, db } from '../firebaseconfig/FirebaseConfig';
import { collection, getDoc, doc } from 'firebase/firestore';

const uContext = createContext();

function UserContex({ children }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkAuthStatus = onAuthStateChanged(auth, async (usersInfo) => {
            // usersInfo.getIdToken() = false;
            if(usersInfo){
                try {
                    //get current users doc ref
                    const docRef = doc(db, "users", usersInfo.uid)
                    //get current users document
                    const userDocSnapshot = await getDoc(docRef);
                    //check for docs existence
                    if(userDocSnapshot.exists()){
                        setUser(userDocSnapshot.data())
                        // console.log(userDocSnapshot.data())
                    }
                    else{
                        console.log("Doc not found")
                        setUser(null)
                    }

                } catch (error) {
                    console.log(error.message)
                }
            }
            else{
                setUser(null)
            }
        })

        return () => checkAuthStatus()

    }, [user])

    // check if device theme is dark or light
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        setIsDarkMode(mediaQuery.matches)

        //listener to handle theme change
        const handleThemeChange = (e) => {
            setIsDarkMode(e.matches)
        }

        //attach event listener
        mediaQuery.addEventListener('change', handleThemeChange)

        //cleanup
        return () => {
            mediaQuery.removeEventListener('change', handleThemeChange);
        }
    }, [])



    return (
        <uContext.Provider value={{user, setUser, isDarkMode}}>
            { children }
        </uContext.Provider>
    )
}

export {UserContex, uContext}
