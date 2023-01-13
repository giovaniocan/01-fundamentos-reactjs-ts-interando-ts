import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'


ReactDOM.createRoot(document.getElementById('root')!).render( //*coloca o ponto de exclamção pra falar que o root vai exister, é comom um  ' confia ' */
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
