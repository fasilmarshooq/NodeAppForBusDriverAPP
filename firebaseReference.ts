import { FirebaseApp, initializeApp } from "firebase/app";

import "firebase/database";
import { getDatabase, ref } from "firebase/database";

const fireBaseConfig = {
  apiKey: "AIzaSyC90RQA0ieqgQFjOWi3jvLPPQ9LghW9pDE",
  authDomain: "location-42216.firebaseapp.com",
  databaseURL: "https://location-42216-default-rtdb.firebaseio.com",
  projectId: "location-42216",
  storageBucket: "location-42216.appspot.com",
  messagingSenderId: "90897657065",
  appId: "1:90897657065:web:efd7d38709e65a42141478",
  measurementId: "G-FX44S447QT",
};

export class FireBaseReference {
  public getReference(): object {
    try {
      const app: FirebaseApp = initializeApp(fireBaseConfig);
      const database = getDatabase(app);
      return ref(database);
    } catch (e) {
      console.log(e);
    }
    return {};
  }
}
