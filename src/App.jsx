import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import BuyPets from './pages/BuyPets';
import SellPets from './pages/SellPets';
import Adoption from './pages/Adoption';
import VetMapPage from './pages/VetMapPage';
import Donations from './pages/Donations';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buy-pets"
          element={
            <ProtectedRoute>
              <BuyPets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sell-pets"
          element={
            <ProtectedRoute>
              <SellPets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adoption"
          element={
            <ProtectedRoute>
              <Adoption />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vet-map"
          element={
            <ProtectedRoute>
              <VetMapPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donations"
          element={
            <ProtectedRoute>
              <Donations />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;