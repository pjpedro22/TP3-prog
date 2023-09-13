import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import '/index.css'
import VideoBg from '../src/assets/cook.mp4'
import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='main'>
        <video src={VideoBg} autoPlay loop muted></video>
        <div className='content'>
          <Provider store={store}>
            <App className='app ' />
          </Provider>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
