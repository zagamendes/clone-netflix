import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "81cfff00f712f930f5a7013904781b38";

async function getData(endPoint) {
  const { data } = await axios.get(
    `${BASE_URL}${endPoint}?with_network=213&language=pt-br&api_key=${API_KEY}`
  );
  return data;
}
const getAnimes = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/discover/tv?language=pt-br&api_key=${API_KEY}&with_original_language=ja`
  );

  return data;
};

const getContent = async () => [
  {
    slug: "originals",
    title: "Originais da Netflix",
    content: await getData(`/discover/tv`),
  },
  {
    slug: "trending",
    title: "Recomendando para você",
    content: await getData("/trending/all/week"),
  },
  {
    slug: "toprated",
    title: "Em alta",
    content: await getData("/movie/top_rated"),
  },
  {
    slug: "Anime",
    title: "Animes",
    content: await getAnimes(),
  },
];
export default getContent;

export const getSerieInfo = async (id) =>
  axios.get(`${BASE_URL}/tv/${id}?language=pt-br&api_key=${API_KEY}`);

export const getVideo = async (id, tipo) =>
  axios.get(
    `${BASE_URL}/${tipo}/${id}/videos?language=pt-br&api_key=${API_KEY}`
  );
