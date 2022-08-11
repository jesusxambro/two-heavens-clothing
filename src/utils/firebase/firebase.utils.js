import { initializeApp} from 'firebase/app';

import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc

} from 'firebase/firestore';

//Security by adding a layer in between third party services and this application

const firebaseConfig = {
    apiKey: "AIzaSyDvJT4MER2JVWx4gpRLDUMI9W-fqbhUs1A",
    authDomain: "two-heavens-clothing-db.firebaseapp.com",
    projectId: "two-heavens-clothing-db",
    storageBucket: "two-heavens-clothing-db.appspot.com",
    messagingSenderId: "138812309077",
    appId: "1:138812309077:web:113fec28f66ac46e05dedc"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,
                                                 additionalInformation = {}
        )=> {
    if(!userAuth) return; //Make sure we receive it!

    const userDocRef = doc(db,'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const{ displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt,
                ...additionalInformation
            });
        }catch (error){
            console.log('error creating the user', error.message());
        }
    }
    console.log(userSnapshot.exists());
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return; //Security somewhat.

   return await createUserWithEmailAndPassword(auth, email, password)//make sure to use the right method!

}