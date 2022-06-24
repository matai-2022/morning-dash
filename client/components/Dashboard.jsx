import React, { useEffect, useState } from 'react'

import Widget from './Widget.jsx'

function Dashboard({ widgetList }) {
  return (
    <>
      {widgetList.map((widget, i) => {
        return (<div className='widget' key={`${i}${widget}`}>
          <Widget name={widget} />
        </div>)
      })}
    </>
  )
}

export default Dashboard
