import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'

import './../../../css/admin.css'

import App from './App'

const app = ReactDOM.createRoot(document.getElementById('app'))
app.render(
  <Fragment>
    <App />
  </Fragment>
)
