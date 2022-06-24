import React, { useEffect, useState } from 'react'

import * as api from '../api'

import Dashboard from './Dashboard.jsx'
import Widget from './Widget.jsx'

function App() {
  const [widgetList, setWidgetList] = useState(['kanye', 'kanye', 'kanye'])

  return (
    <>
      <div className="header">
        <h1>morning dash</h1>
      </div>

      <div className="container">
        <Dashboard widgetList={widgetList} />
      </div>
    </>
  )
}

export default App
