import React, { useEffect, useState } from 'react'

import * as api from '../api'

import Dashboard from './Dashboard.jsx'
import AddWidget from './AddWidget.jsx'

function App() {
  const [isAddWidgetVisible, setIsAddWidgetVisible] = useState(false)
  const [widgetList, setWidgetList] = useState(['spotify', 'kanye', 'news'])

  function handleClick(event) {
    setIsAddWidgetVisible(true)
  }

  return (
    <>
      <div className="header">
        <h1>morning dash</h1>
      </div>

      <button onClick={handleClick}>Add widget</button>
      {isAddWidgetVisible && (
        <div>
          <AddWidget />
        </div>
      )}

      <div className="container">
        <Dashboard widgetList={widgetList} />
      </div>
    </>
  )
}

export default App
