import axios from 'axios';
const _client = axios.create({
  baseURL: 'url',
});


export const images = ((client) => {
  const listAllGifs = async () => {
    const { data } = await client.get(`https://api.thecatapi.com/v1/images/search?limit=10`);
    return data;
  };

  return {
    list: listAllGifs
  };
})(_client);

