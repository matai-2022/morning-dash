import React from 'react'

// Widget component lookup

export const lookup = {
  kanye: KanyeWidget,
  news: NewsWidget,
  spotify: SpotifyWidget,
  affirmation: AffirmationWidget
}

// Widget components

export function KanyeWidget ({name, data}) {
  return (
    <div className={name}>
      <p>{data.quote}</p>
    </div>
  )
}

export function NewsWidget ({ name, data }) {
  return (
    <div className={name}>
      <a href={data.url} target="_blank" rel="noreferrer">
        <h1>{data.title}</h1>
      </a>
    </div>
  )
}

export function AffirmationWidget({name, data}) {
  return (
    <div className={name}>
      <p>{data.affirmation}</p>
    </div>
  )
}

export function SpotifyWidget ({name, data}) {
  return (
    <div className={name}>
      <a href={data.url} target="_blank" rel="noreferrer">
        <h1>{data.title}</h1>
      </a>
      <h2>{data.artist}</h2>
    </div>
  )
}