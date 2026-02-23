import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ApiDemo from './pages/ApiDemo'
import Resume from './pages/Resume'
import CreatePageInstructions from './pages/CreatePageInstructions'

function App() {
  return (
    <div className="min-h-screen bg-ocu-white text-ocu-navy flex flex-col">
      <header className="bg-ocu-navy text-ocu-white shadow">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-tight">
            Oakland City University
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-ocu-columbia transition-colors">Home</Link>
            <Link to="/api-demo" className="hover:text-ocu-columbia transition-colors">API Demo</Link>
            <Link to="/resume" className="hover:text-ocu-columbia transition-colors">Resume</Link>
            <Link to="/create-page-instructions" className="hover:text-ocu-columbia transition-colors">Create a Page</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api-demo" element={<ApiDemo />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/create-page-instructions" element={<CreatePageInstructions />} />
        </Routes>
      </main>
      <footer className="bg-ocu-navy text-ocu-columbia text-sm py-4 text-center">
        © Oakland City University · oak.edu
      </footer>
    </div>
  )
}

export default App
