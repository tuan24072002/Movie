import { Route, Routes } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import ContactPage from "@/pages/ContactPage"
import NotFoundPage from "@/pages/NotFoundPage"
import MoviePage from "@/pages/MoviePage"
import LoginPage from "@/pages/LoginPage"
import MovieDetailPage from "@/pages/MovieDetailPage"
import WatchPage from "@/pages/WatchPage"
import SignupPage from "@/pages/SignupPage"
import FavoritesMovies from "@/pages/dashboard/FavoritesMovies"
import Password from "@/pages/dashboard/Password"
import Profile from "@/pages/dashboard/Profile"
import Dashboard from "@/pages/dashboard/admin/Dashboard"
import MovieList from "@/pages/dashboard/admin/MovieList"
import AddMovie from "@/pages/dashboard/admin/AddMovie"
import Categories from "@/pages/dashboard/admin/Categories"
import Users from "@/pages/dashboard/admin/Users"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/movies" element={<MoviePage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/watch/:id" element={<WatchPage />} />
      <Route path="/favorite" element={<FavoritesMovies />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />} />

      {/* Dashboard */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/favorites" element={<FavoritesMovies />} />
      <Route path="/password" element={<Password />} />

      {/* Admin */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/movieslist" element={<MovieList />} />
      <Route path="/addmovie" element={<AddMovie />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/users" element={<Users />} />

      {/* 404 Page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
