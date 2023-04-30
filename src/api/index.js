import axios from 'axios';
const _client = axios.create({
  baseURL: 'url',
});


export const listGifs = ((client) => {
  const listAllGifs = async () => {
    const { data } = await client.get(``);
    return data;
  };

  return {
    list: listAllGifs
  };
})(_client);

