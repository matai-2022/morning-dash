import React, {useState, useEffect} from 'react'
import * as api from '../api.js'

export default function Widget({name}) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  
  useEffect(async () => {
    try {
      setData(await api.lookup[name]())
    } catch(error) {
      console.error(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return loading ? 'Loading widget' : lookup[name]({data}) || 'Could not load widget'
}

// Widget component lookup

const lookup = {
  kanye: KanyeWidget,
  news: NewsWidget,
  spotify: SpotifyWidget,
  affirmation: AffirmationWidget
}

// Widget components

function KanyeWidget ({data}) {
  const style = {
    color: 'green'
  }

  return (
  <div style={style}>
    <p>{data.quote}</p>
  </div>
  )
}

function NewsWidget ({ data }) {
  return (
  <div>
    <a href={data.url} target="_blank" rel="noreferrer">
      <h1>{data.title}</h1>
    </a>
  </div>
  )
}

function AffirmationWidget({data}) {
  return (
  <div>
    <p>{data.affirmation}</p>
  </div>
  )
}

function SpotifyWidget ({data}) {
  return (
  <div>
    <a href={data.url} target="_blank" rel="noreferrer">
      <h1>{data.title}</h1>
    </a>
    <h2>{data.artist}</h2>
  </div>
  )
}