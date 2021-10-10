import axios from 'axios'

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "81cfff00f712f930f5a7013904781b38"

async function getData (endPoint){
    const {data} = await axios.get(`${BASE_URL}${endPoint}?with_network=213&language=pt-br&api_key=${API_KEY}`)
    return data
}

const getContent = async ()=>(
    [
        {
            slug:"originals",
            title:"Originais da Netflix",
            content:await getData(`/discover/tv`)
        },
        {
            slug:"trending",
            title:"Originais da Netflix",
            content:await getData("/trending/all/week")
        },
        {
            slug:"toprated",
            title:"Em altta",
            content:await getData("/movie/top_rated")
        }
    ]
)
export default getContent