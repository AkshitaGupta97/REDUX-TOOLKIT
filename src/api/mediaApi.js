import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

export async function fetchPhotos(query, perPage = 9) {
    if (!UNSPLASH_KEY) {
        console.warn('VITE_UNSPLASH_KEY is not set in environment');
    }

    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query, per_page: perPage },
            headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
        });
        console.log(response);

        return response.data;
    } catch (err) {
        console.error('fetchPhotos error:', err);
        throw err;
    }
}

export async function fetchVideos(query, perPage = 10) {
    if (!PEXELS_KEY) {
        console.warn('PEXELS_KEY is not set in environment');
    }

    try {
        const response = await axios.get('https://api.pexels.com/videos/search', {
            params: { query, per_page: perPage },
            headers: { Authorization: PEXELS_KEY },
        });
        console.log(response);

        return response.data;
    } catch (err) {
        console.error('fetchVideos error:', err);
        throw err;
    }
}

