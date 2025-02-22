import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { ContextProvider } from './components/ContextProvider.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </HashRouter>
  </StrictMode>
);
