import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home, AdminLogin, ClientLogin, ClientSignup } from './pages'
import { Layout } from './components'





function App() {
  return (
    <>
      <Layout>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="admin" element={<AdminLogin />} />
          <Route path="login" element={<ClientLogin />} />
          <Route path="register" element={<ClientSignup />} />

          {/* SECURE ROUTES */}
          <Route path="admin-dashboard" element={<h1>admin dashboard</h1>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
