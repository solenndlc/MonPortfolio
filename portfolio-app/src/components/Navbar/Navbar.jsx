import './Navbar.css'

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button onClick={() => scrollTo('contacts')}>CONTACTS</button>
        <button onClick={() => scrollTo('about')}>MOI</button>
      </div>
      <div className="navbar-right">
        <button onClick={() => scrollTo('tools')}>OUTILS</button>
        <button onClick={() => scrollTo('projets')}>PROJETS</button>
      </div>
    </nav>
  )
}
