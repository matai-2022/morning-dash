import request from 'superagent'

// Widget API lookup

export const lookup = {
  kanye: getKanye,
  spotify: getSpotify,
  affirmation: getAffirmation,
  news: getNews,
}

// Widget APIs

export async function getSpotify() {
  const res = await request.get('/api/v1/spotify')
  return res.body
}

export async function getKanye() {
  const res = await request.get('https://api.kanye.rest')
  return res.body
}

export async function getAffirmation() {
  const res = await request.get('/api/v1/affirmation')
  return res.body
}

export async function getNews() {
  const res = await request.get('/api/v1/news')
  return res.body
}
