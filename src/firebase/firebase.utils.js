import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDwiAcUHtUcZNF2qbVnGG7lrq4-DvX6PgE",
    authDomain: "crown-db-16538.firebaseapp.com",
    projectId: "crown-db-16538",
    storageBucket: "crown-db-16538.appspot.com",
    messagingSenderId: "886537725156",
    appId: "1:886537725156:web:9026b370f6c6d82dd3f8f1",
    measurementId: "G-0B3GCLLGWV",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;