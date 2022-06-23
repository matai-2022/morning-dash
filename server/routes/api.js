const express = require('express')
const request = require('superagent')
require('dotenv').config()

const router = express.Router()

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
      .get('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy')
      .set('Authorization', `Bearer ${token}`)

    const musicResponse = await musicRequest
    res.json(musicResponse.body)
  } catch (error) {
    console.error(error.message)
    res.sendStatus(500)
  }
})

module.exports = router
