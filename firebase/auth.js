import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import app from "./config";

const auth = getAuth(app);

const create = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).then((userCredetial) => {
        console.log("create:userCredetial", userCredetial);
    }).catch(error => console.log("create:error", error));
};

export { create };