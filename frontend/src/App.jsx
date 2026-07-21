import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Abonnements from './pages/Abonnements'
import Payment from './pages/Payment'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'
import PrivacyPolicy from './pages/PrivacyPolicy'
import LegalNotice from './pages/LegalNotice'
// import * as Sentry from "@sentry/react";

const isAuthenticated = () => !!localStorage.getItem('token')
const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user.role === 'admin'
}

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />
}

const AdminRoute = ({ children }) => {
  return isAuthenticated() && isAdmin() ? children : <Navigate to="/login" />
}

// function SandboxCrash() {
//   return (
//     <div style={{ padding: '10px', backgroundColor: '#f8d7da', textAlign: 'center', borderBottom: '1px solid #f5c6cb' }}>
//       <button
//         onClick={() => {
//           try {
//             throw new Error("Gymflow Front Crash - Envoi Manuel Sentry !");
//           } catch (error) {
//             Sentry.captureException(error);
//             alert("Erreur envoyée à Sentry ! Vérifie ton tableau de bord.");
//           }
//         }}
//         style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
//       >
//         Tester Sentry Frontend (Forcé)
//       </button>
//     </div>
//   );
// }



function App() {
  return (
    <BrowserRouter>

      {/* <SandboxCrash /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/abonnements"
          element={
            <PrivateRoute>
              <Abonnements />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
        <Route
          path="/paiement"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
