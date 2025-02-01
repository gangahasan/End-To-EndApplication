import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Movies from './pages/Movies'
import NotFound from './pages/NotFound'
import MovieDetails from './pages/MovieDetails'
import { PrivateRoute } from './components/PrivateRoute'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/movies"
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
        />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App
