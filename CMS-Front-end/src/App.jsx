import { AdminPage } from './pages/adminpage/AdminPage.jsx';
import { Route,Routes } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />

    </Routes>
  )
}

export default App
