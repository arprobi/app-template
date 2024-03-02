import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'

import './../css/app.css'

const app = ReactDOM.createRoot(document.getElementById('app'))
app.render(
  <Fragment>
    <h1>Hallo from UI page!</h1>
  </Fragment>
)
