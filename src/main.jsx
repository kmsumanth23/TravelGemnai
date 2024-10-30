import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create_trips/index.jsx'
// import Header from './components/custom/Header.jsx'
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewTrip from './view-Trip/[tripId]/index.jsx'
import MyTrips from './myTrips/index.jsx'

const router = createBrowserRouter([
  {
    path: "/", // default round 
    element: <App />
  },
  {
    path: "create-trip",
    element: <CreateTrip />
  },
  {
    path: "/view-trip/:tripId",
    element: <ViewTrip />
  },
  {
    path: "/my-trips",
    element: <MyTrips />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      {/* <Header /> */}
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)