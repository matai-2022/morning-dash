import request from 'superagent'

const spotifyUrl = '/api/v1/spotify'
const newsUrl = '/api/v1/news'
const kanyeUrl = 'api/v1/kanye'

//get spotify function

const getSpotify = async () => {
  const res = await request.get(spotifyUrl)
  return res.body
}

//get news function

const getNews = async () => {
  const res = await request.get(newsUrl)
  return res.body
}

//get kanye function

const getKanye = async () => {
  const res = await request.get(kanyeUrl)
  return res.body
}

const lookup = {
  kanye: getKanye,
  spotify: getSpotify,
  news: getNews,
}

export { getSpotify, getNews, getKanye, lookup }
