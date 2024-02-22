import { fetchLyrics } from "./fetchLyrics";
import { isSongSaved } from "./songAPI";

const url = 'https://spotify23.p.rapidapi.com/search/?q=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_SPOTIFY_API_KEY,
		'X-RapidAPI-Host': import.meta.env.VITE_SPOTIFY_API_HOST
	}
};

export async function fetchSpotify(searchTerm, user) {

    try {
        const songTitles = await fetchLyrics(searchTerm);
        const fetchPromises = songTitles.map(async (song) => {
            const response = await fetch(url+`${song.result.full_title}`, options);
            const result = await response.json();
            const spotifyUri = result.topResults.items[0].data.uri;
            const isSaved = await isSongSaved(spotifyUri, user);
            return { ...song, spotifyUri, isSaved }
        })

        const newSongList = await Promise.all(fetchPromises);
        return newSongList;
    } catch (error) {
        console.error(error);
    }
}