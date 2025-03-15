import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Registration, Home, Leads, Profile, NotFound } from './pages'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
