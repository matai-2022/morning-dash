import React, { useEffect, useState } from 'react'
import Widget from './Widget'
import * as api from '../api.js'

//widgetname widgetdata

function Dashboard() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(async () => {
    try {
      // const spotify = await api.getSpotify()
      // const news = await api.getNews()
      const kanye = await api.getKanye()
      setData(kanye)
      setLoading(false)
      console.log('hi')
    } catch (error) {
      console.error(error)
    }
  }, [])

  return loading ? (
    <p>Widgets are still loading</p>
  ) : (
    <>
      <Widget widgetName="Kanye" widgetData={data} />
    </>
  )
}

export default Dashboard
