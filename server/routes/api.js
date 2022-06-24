const express = require('express')
const request = require('superagent')
require('dotenv').config()

const router = express.Router()

// GET /api/v1/spotify

router.get('/spotify', async (req, res) => {
  try {
    const tokenRequest = request
      .post('https://accounts.spotify.com/api/token')
      .set('Authorization', `Basic ${process.env.SPOTIFY_AUTH}`)
      .type('form')
      .send({ grant_type: 'client_credentials' })

    const tokenResponse = await tokenRequest
    const token = tokenResponse.body.access_token

    const dataRequest = request
      .get('https://api.spotify.com/v1/recommendations')
      .set('Authorization', `Bearer ${token}`)
      .query({
        seed_genres: 'emo',
        seed_artists: '',
        seed_tracks: '',
        limit: 1,
      })

    const dataResponse = await dataRequest
    const track = {
      title: dataResponse.body.tracks[0].name,
      url: dataResponse.body.tracks[0].href,
      artist: dataResponse.body.tracks[0].artists[0].name,
    }

    res.json(track)
  } catch (error) {
    console.error(error.message)
    res.sendStatus(500)
  }
})

// GET /api/v1/news

router.get('/news', async (req, res) => {
  try {
    const newsResponse = await request
      .get('https://newsapi.org/v2/top-headlines?country=nz')
      .set('x-api-key', '581d6ac2ce7e463d80507714be7aa2ee')

    const headline = {
      title: newsResponse.body.articles[0].title,
      url: newsResponse.body.articles[0].url,
    }
    res.json(headline)
  } catch (error) {
    console.error(error.message)
    res.sendStatus(500)
  }
})

// GET /api/v1/affirmation

router.get('/affirmation', async (req, res) => {
  try {
    const response = await request.get('https://affirmations.dev')
    res.json(response.body)
  } catch (error) {
    console.error(error.message)
    res.sendStatus(500)
  }
})

module.exports = router
