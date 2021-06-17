import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import App from './App'
import { HashRouter } from 'react-router-dom'

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
