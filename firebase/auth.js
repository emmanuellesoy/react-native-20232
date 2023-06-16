import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import app from "./config";

const auth = getAuth(app);

const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password).then((userCredetial) => {
        return {
            code: "success",
            message: "User created successfully"
        };
    }).catch(error => console.log("create:error", error));
};

const signInUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        return {
            code: "success",
            message: "User logged in successfully"
        };
    }).catch(error => {
        return {
            code: "error",
            message: error.code
        }
    });
};

const signOutUser = async () => {
    return await signOut(auth).then(() => {
        return {
            code: "success",
            message: "User logged out successfully"
        };
    }).catch(error => {
        console.log("error", error);
        return {
            code: "error",
            message: "Something went wrong!"
        };
    })
};

const getStateUserState = async () => {
    return await onAuthStateChanged(auth, (user) => {
        console.log("user", user);
        return { code: 200 };
    });
};

export { createUser, signInUser, signOutUser, getStateUserState, };