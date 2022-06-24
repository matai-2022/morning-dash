import React, { useEffect, useState } from 'react'
import * as widgets from './widgets'
import * as api from '../api.js'

function Dashboard({ widgetList }) {
  const [widgetData, setWidgetData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    try {
      const data = await Promise.allSettled(widgetList.map(widget => api.lookup[widget]()))

      setWidgetData(widgetList.map((widget, i) => {
        return {
          name: widget,
          data: data[i].status === 'fulfilled' ? data[i].value : null
        }
      })
)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      {widgetData.map((widget, i) => {
        return (
          <div key={`${i}${widget.name}`} className="widget">
            {widget.data ?            
            widgets.lookup[widget.name]({name: widget.name, data: widget.data})
            : 'Could not load widget'}
          </div>)
      })}
    </>
  )
}

export default Dashboard
