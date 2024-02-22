import { db } from '../config/firebase';
import { doc, deleteDoc, getDoc, getDocs, setDoc, collection } from 'firebase/firestore';

export async function isSongSaved(spotifyUri, user) {
    try {
        const songRef = doc(db, user.uid, spotifyUri);
        const songSnap = await getDoc(songRef);
        return songSnap.exists();
    } catch (error) {
        console.error(error);
    }
}

export async function deleteSavedSong(songObject, user) {
    try {
        const songRef = doc(db, user.uid, songObject.spotifyUri);
        await deleteDoc(songRef);
    } catch (error) {
        console.error(error);
    }
}

export async function postSong(songObject, user) {
    try {
        const newSongObject = { ...songObject, isSaved:true }
        const userRef = collection(db, user.uid);
        await setDoc(doc(userRef, newSongObject.spotifyUri), newSongObject);
    } catch (error) {
        console.error(error);
    }
}

export async function getAllSavedSongs(user) {
    try {
        const querySnap = await getDocs(collection(db, user.uid));
        const allSongs = [];
        querySnap.forEach((doc) => {
            const songData = doc.data();
            allSongs.push(songData);
        })
        return allSongs;
    } catch(error) {
        console.error(error);
    }
}