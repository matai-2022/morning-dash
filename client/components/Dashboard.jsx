import React, { useEffect } from 'react'
import Widget from './Widget'
import * as api from '../api.js'

//widgetname widgetdata

function Dashboard() {
  useEffect(async () => {
    try {
      // const spotify = await api.getSpotify()
      const news = await api.getNews()
      const kanye = await api.getKanye()
      console.log('hi')
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <Widget widgetName={} widgetData={kanye}/>
    </>
  )
}

export default Dashboard
