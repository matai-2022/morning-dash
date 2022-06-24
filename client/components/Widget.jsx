import React from 'react'

function Widget({ widgetName, widgetData }) {
  let widget

  switch (widgetName) {
    case 'kanye': {
      widget = <KanyeWidget widgetName={widgetName} widgetData={widgetData} />
      break
    }
    case 'news': {
      widget = <NewsWidget widgetName={widgetName} widgetData={widgetData} />
      break
    }
    case 'spotify': {
      widget = <SpotifyWidget widgetName={widgetName} widgetData={widgetData} />
      break
    }
  }

  return <div className="widget">{widget}</div>
}

function KanyeWidget({ widgetName, widgetData }) {
  return (
    <div className={widgetName}>
      <p>{widgetData.quote}</p>
    </div>
  )
}

function NewsWidget({ widgetName, widgetData }) {
  return (
    <div className={widgetName}>
      <a href={widgetData.url} target="_blank" rel="noreferrer">
        <h1>{widgetData.title}</h1>
      </a>
    </div>
  )
}

function SpotifyWidget({ widgetName, widgetData }) {
  return (
    <div className={widgetName}>
      <a href={widgetData.url} target="_blank" rel="noreferrer">
        <h1>{widgetData.title}</h1>
      </a>
      <h2>{widgetData.artist}</h2>
    </div>
  )
}

export default Widget
