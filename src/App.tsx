import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom'
import Cookies from 'js-cookie'
import { Login, Registration, Home, Leads, Profile, NotFound } from './pages'
function App() {
  const ProtectRoute = () => {
    const checkAuthCookie = Cookies.get('Authorization')
    if (!checkAuthCookie) {
      alert('Você não está logado!')
      return <Navigate to="/" replace />
    }

    return <Outlet />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route element={<ProtectRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/leads" element={<Leads />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
