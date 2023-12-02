import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/index.js'


// Check if a root exists for the container
const root = ReactDOM.createRoot(document.getElementById('root'))

function render() {
  // if (existingRoot._internalRoot) {
    // If a root exists, update it using root.render
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>)
}

render()
store.subscribe(render)