import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const client_ID = "984446154658-ofm8pn4g67381346evek8pl8jsvabelj.apps.googleusercontent.com"



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId={client_ID}>

    <App />
    </GoogleOAuthProvider>
    
    </BrowserRouter>
    
  </React.StrictMode>
)
