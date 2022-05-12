import { initializeApp} from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDvJT4MER2JVWx4gpRLDUMI9W-fqbhUs1A",
    authDomain: "two-heavens-clothing-db.firebaseapp.com",
    projectId: "two-heavens-clothing-db",
    storageBucket: "two-heavens-clothing-db.appspot.com",
    messagingSenderId: "138812309077",
    appId: "1:138812309077:web:113fec28f66ac46e05dedc"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

