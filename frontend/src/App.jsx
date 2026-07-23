import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
// import * as Sentry from "@sentry/react";


import Home from './pages/Home'
import Login from './pages/Login'


const Register = lazy(() => import('./pages/Register'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Abonnements = lazy(() => import('./pages/Abonnements'))
const Payment = lazy(() => import('./pages/Payment'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Admin = lazy(() => import('./pages/Admin'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const LegalNotice = lazy(() => import('./pages/LegalNotice'))

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


function PageLoader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div
        style={{
          width: 32, height: 32, borderRadius: '50%',
          border: '3px solid #e5e5e5', borderTopColor: '#FF5500',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
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

      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </BrowserRouter>
  )
}

export default App