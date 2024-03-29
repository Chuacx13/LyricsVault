const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_GENIUS_API_KEY,
		'X-RapidAPI-Host': import.meta.env.VITE_GENIUS_API_HOST
	}
};

export async function fetchLyrics(searchTerm) {
	try {
		const response = await fetch(url+`${searchTerm}`+'&per_page=8', options);
		const result = await response.json();
		return result.hits;
	} catch (error) {
		console.error(error);
	}
} 