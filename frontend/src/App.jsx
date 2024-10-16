import { Route, Routes } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import ContactPage from "@/pages/ContactPage"
import NotFoundPage from "@/pages/NotFoundPage"
import MoviePage from "@/pages/MoviePage"
import LoginPage from "@/pages/LoginPage"
import FavoritesMovies from "@/pages/dashboard/FavoritesMovies"
import MovieDetailPage from "./pages/MovieDetailPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/movies" element={<MoviePage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/favorite" element={<FavoritesMovies />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
