import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken } from 'firebase/auth'
import init from '../Firebase/firebase.init';
import axios from 'axios';

init()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    const [token, setToken] = useState('')

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const register = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const data = {
                    uid: user.uid,
                    name: name,
                    email: user.email,
                    photo: user.photoURL,
                    phone: user.phoneNumber
                }
                saveUser(data, 'post');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    // An error occurred
                    const errorMessage = error.message;
                    setError(errorMessage)
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => {
                setLoading(false)
            });
    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => {
                setLoading(false)
            });
    }

    const signinUsingGoogle = () => {
        signInWithPopup(auth, googleProvider).then((userCredential) => {
            const user = userCredential.user;
            const data = {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                phone: user.phoneNumber
            }
            saveUser(data, 'put');
        }).catch((error) => {
            setError(error.message)
        }).finally(() => {
                setLoading(false)
            });
    }

    const logout = () => {
        signOut(auth)
            .then(res => setUser({}))
    }

    function saveUser(user, methode) {
        axios({
            method: methode,
            url: '/users',
            data: user
        })
            .then((res) => {
                if (res.data.insertedId) {
                    setUser(user)
                } else {
                    console.log(res.data);
                }
            }).finally(() => {
                setLoading(false)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (result) => {
            if (result) {
                getIdToken(result).then(idToken=>{
                    setToken(idToken);
                })
                setUser({
                    uid: result.uid,
                    name: result.displayName,
                    email: result.email,
                    photo: result.photoURL,
                    phone: result.phoneNumber
                })
            } else {
                setUser({})
            }
            setLoading(false)
        })
    }, [auth])

    useEffect(() => {
        axios(`/users/${user.email}`).then((res)=>{
            setAdmin(res.data);
            setAdminLoading(false);
        });
    }, [user.uid,user.email])

    return {
        register,
        user,
        signinUsingGoogle,
        logout,
        loading,
        error,
        setError,
        login,
        setLoading,
        admin,
        adminLoading,
        token
    }
};

export default useFirebase;