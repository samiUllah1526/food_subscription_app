import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home, AdminLogin, ClientLogin, ClientSignup } from './pages'
import { AppNavbar } from './components'

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="admin" element={<AdminLogin />} />
        <Route path="login" element={<ClientLogin />} />
        <Route path="register" element={<ClientSignup />} />

        {/* SECURE ROUTES */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
