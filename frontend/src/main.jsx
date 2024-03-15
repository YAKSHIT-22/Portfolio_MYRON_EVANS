import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './assets/css/index.css'

import App from './App.jsx'
import store from './store.js'
import AdminScreen from './AdminScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path={'/admin/*'} element={<AdminScreen />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
