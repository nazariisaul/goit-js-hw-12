import axios from 'axios';

const API_KEY = '58350673-e2aeabc0b614e9a00dd0e1db6'; // <-- Вставте свій ключ Pixabay
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
