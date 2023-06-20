import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import app from "./config";

const auth = getAuth(app);

const getMessage = (message) => {
  let cleanMessage = message.replace("auth/", "");
  cleanMessage = cleanMessage.replace("-", " ");
  cleanMessage = cleanMessage.toUpperCase();
  return cleanMessage;
};

const createUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredetial) => {
      return {
        code: "success",
        message: "User created successfully",
        ...userCredetial,
      };
    })
    .catch((error) => {
      return {
        code: "error",
        message: getMessage(error.code),
      };
    });
};

const signInUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return {
        code: "success",
        message: "User logged in successfully",
        ...userCredential,
      };
    })
    .catch((error) => {
      return {
        code: "error",
        message: getMessage(error.code),
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

const state = () => {
  return {};
};

export { createUser, signInUser, signOutUser, state };
