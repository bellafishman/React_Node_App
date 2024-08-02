import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header> 
      <nav>
        <Link to="/" className="active" aria-label="Home"><strong>Strength Science</strong></Link>
        <Link to="/articles" aria-label="Articles">Articles</Link>
        <Link to="/findings" aria-label="Findings">Findings</Link>
        <Link to="/about" aria-label="About">About</Link>
        <a href="#contact" aria-label="Contact">Contact</a>
      </nav>
    </header>
  )
}
