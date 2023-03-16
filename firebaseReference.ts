import fs from "fs";
import { FirebaseApp, initializeApp } from "firebase/app";

import "firebase/database";
import { getDatabase, ref } from "firebase/database";

let fireBaseConfig: string = fs.readFileSync("auth.json", "utf8");

export class FireBaseHelper {
  public getReference(): object {
    try {
      const app: FirebaseApp = initializeApp(JSON.parse(fireBaseConfig));
      const database = getDatabase(app);
      return ref(database);
    } catch (e) {
      console.log(e);
    }
    return {};
  }
}
