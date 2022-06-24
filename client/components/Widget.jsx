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

  const display = loading ? 'Loading widget' : 
    (!data ? 'Could not load widget': 
    lookup[name]({data})) 

  return (<div className={name}>{display}</div>)
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
  return (
      <p>{data.quote}</p>
  )
}

function NewsWidget ({ data }) {
  return (
      <a href={data.url} target="_blank" rel="noreferrer">
        <h1>{data.title}</h1>
      </a>
  )
}

function AffirmationWidget({data}) {
  return (
      <p>{data.affirmation}</p>
  )
}

function SpotifyWidget ({data}) {
  return (
    <>
      <a href={data.url} target="_blank" rel="noreferrer">
        <h1>{data.title}</h1>
      </a>
      <h2>{data.artist}</h2>
    </>
  )
}