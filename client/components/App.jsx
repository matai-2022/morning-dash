import React, { useEffect, useReducer } from 'react'

import * as api from '../api'

import Dashboard from './Dashboard.jsx'
import Widget from './Widget.jsx'

function App() {
  return (
    <>
      <div className="header">
        <h1>morning dash</h1>
      </div>

      <div className="container">
        <Dashboard />
      </div>
    </>
  )
}

export default App
