import { fetchLyrics } from "./fetchLyrics";

const url = 'https://spotify23.p.rapidapi.com/search/?q=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_SPOTIFY_API_KEY,
		'X-RapidAPI-Host': import.meta.env.VITE_SPOTIFY_API_HOST
	}
};

export async function fetchSpotify(searchTerm) {

    const songTitles = await fetchLyrics(searchTerm);
    const fetchPromises = songTitles.map(async (song) => {
        const response = await fetch(url+`${song.result.full_title}`, options);
        const result = await response.json();
        const spotifyUri = result.albums.items[0].data.uri;
        return { ...song, spotifyUri }
    })

    const newSongList = await Promise.all(fetchPromises);
    return newSongList;

}