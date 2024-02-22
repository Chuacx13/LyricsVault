import { db } from '../config/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export async function deleteSavedSong(songObject, user) {
    try {
        const songRef = doc(db, user.uid, songObject.spotifyUri);
        await deleteDoc(songRef);
    } catch (error) {
        console.error(error);
    }
}