import react from 'react'
import { StrictMode } from 'react'
import { createRoot ,ReactDOM} from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom' 
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContest.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'
// import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
