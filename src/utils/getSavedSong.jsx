import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getSavedSong(spotifyUri, user) {
    try {
        const songRef = doc(db, user.uid, spotifyUri);
        const songSnap = await getDoc(songRef);
        return songSnap.exists();
    } catch (error) {
        console.error(error);
    }
}