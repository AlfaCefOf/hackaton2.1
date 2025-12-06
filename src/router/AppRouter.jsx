import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import LostItems from "../pages/LostItems";
import FoundItems from "../pages/FoundItems";
import ItemDetails from "../pages/ItemDetails";
import ReportLost from "../pages/ReportLost";
import ReportFound from "../pages/ReportFound";
import Dashboard from "../pages/Dashboard";
import AdminPanel from "../pages/AdminPanel";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Help from "../pages/Help";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";

const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* LAYOUT */}
          <Route path="/" element={<MainLayout />}>
            {/* PAGES INSIDE OUTLET */}
            <Route index element={<Home />} />
            <Route path="lost" element={<LostItems />} />
            <Route path="found" element={<FoundItems />} />
            <Route path="item/:id" element={<ItemDetails />} />
            <Route path="report-lost" element={<ReportLost />} />
            <Route path="report-found" element={<ReportFound />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="admin" element={<AdminPanel />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="help" element={<Help />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>

          {/* AUTH OUTSIDE LAYOUT (без Header/Footer если надо) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
