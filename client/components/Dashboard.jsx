import React, { useEffect, useState } from 'react'
import Widget from './Widget'
import * as api from '../api.js'

//widgetname widgetdata

function Dashboard({ widgetList }) {
  const [widgets, setWidgets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    try {
      const data = []
      for (let i = 0; i < widgetList.length; i++) {
        const widgetData = await api.lookup[widgetList[i]]()
        console.log(widgetData)
        data.push(widgetData)
      }

      const tempWidgets = []

      for (let i = 0; i < widgetList.length; i++) {
        const widget = {
          name: widgetList[i],
          data: data[i],
        }
        tempWidgets.push(widget)
      }

      setWidgets(tempWidgets)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return loading ? (
    <p>Widgets are still loading</p>
  ) : (
    <>
      {widgets.map((widget) => {
        return <Widget widgetName={widget.name} widgetData={widget.data} />
      })}
    </>
  )
}

export default Dashboard
