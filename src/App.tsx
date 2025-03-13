import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>LOGIN</>} />
        <Route path="/cadastro" element={<>cadastro</>} />
        <Route path="/home" element={<>home</>} />
        <Route path="/perfil" element={<>perfil</>} />
        <Route path="/leads" element={<>leads</>} />
      </Routes>
    </Router>
  )
}

export default App
