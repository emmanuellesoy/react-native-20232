import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useContext } from "react";

import app from "./config";
import UserContext from "../context/user";

const auth = getAuth(app);

const createUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredetial) => {
      return {
        code: "success",
        message: "User created successfully",
      };
    })
    .catch((error) => {
      return {
        code: "error",
        message: error.code,
      };
    });
};

const signInUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return {
        code: "success",
        message: "User logged in successfully",
      };
    })
    .catch((error) => {
      return {
        code: "error",
        message: error.code,
      };
    });
};

const signOutUser = async () => {
  return await signOut(auth)
    .then(() => {
      return {
        code: "success",
        message: "User logged out successfully",
      };
    })
    .catch((error) => {
      console.log("error", error);
      return {
        code: "error",
        message: "Something went wrong!",
      };
    });
};

export { createUser, signInUser, signOutUser, onAuthStateChanged };
