import { db } from '../config/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

export async function postSong(songObject, user) {
    try {
        const userRef = collection(db, user.uid);
        await setDoc(doc(userRef, songObject.spotifyUri), songObject);
    } catch (error) {
        console.error(error);
    }
}