import './App.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">Lars Cars</Link>
      </div>
      <nav className="nav">
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </nav>
    </header>
  )
}

export default Header 