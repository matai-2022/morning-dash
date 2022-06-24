import React, { useState } from 'react'

import Widget from './Widget.jsx'
import AddWidget from './AddWidget.jsx'

function App() {
  const [isAddWidgetVisible, setIsAddWidgetVisible] = useState(false)
  const [widgets, setWidgets] = useState(['spotify', 'kanye', 'affirmation'])

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
      {widgets.map((widget, i) => {
        return (
        <div className='widget' key={`${i}${widget}`}>
          <Widget name={widget} />
        </div>)
      })}
      </div>
    </>
  )
}

export default App
