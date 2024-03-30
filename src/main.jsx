import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// LAYOUT ESTILIZAÇÂO
import './styles/root.css'
import "./styles/Layout/header.css"
import "./styles/Layout/footer.css"
import "./styles/Layout/main.css"
import "./styles/cards/categoryCard.css"
import "./styles/cards/slideCard.css"
import "./styles/cards/mangaCard.css"
import "./styles/cards/containerScroll.css"
import "./styles/pages/error.css"
import "./styles/pages/search.css"
import "./styles/pages/upload.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
