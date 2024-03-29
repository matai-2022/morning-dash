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

    const musicRequest = request
      .get('https://api.spotify.com/v1/recommendations')
      .set('Authorization', `Bearer ${token}`)
      .query({
        seed_genres: 'emo',
        seed_artists: '',
        seed_tracks: '',
        limit: 1,
      })

    const musicResponse = await musicRequest
    console.log(musicResponse)
    const track = {
      title: musicResponse.body.tracks[0].name,
      url: musicResponse.body.tracks[0].href,
      artist: musicResponse.body.tracks[0].artists[0].name,
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

// GET /api/v1/kanye

router.get('/kanye', async (req, res) => {
  try {
    const kanyeQuote = await request.get('https://api.kanye.rest')

    res.json(kanyeQuote.body)
  } catch (error) {
    console.error(error.message)
    res.sendStatus(500)
  }
})

module.exports = router
