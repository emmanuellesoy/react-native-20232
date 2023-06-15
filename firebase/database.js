import { getDatabase, ref, set } from "firebase/database";

import app from "./config";

const database = getDatabase(app);

export { database, ref, set };