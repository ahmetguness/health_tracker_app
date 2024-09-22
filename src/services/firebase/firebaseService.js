import {
    collection,
    query,
    where,
    getDocs,
    getDoc,
    doc,
    updateDoc,
  } from "firebase/firestore";
  import { db } from "./firebaseConfig";
  
  export async function checkUserCredentials(userKind, userName, password) {

  }