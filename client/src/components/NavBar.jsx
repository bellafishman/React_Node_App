export default function NavBar() {
  return (
    <header> 
      <nav>
        <a href="index" className="active" aria-label="Home"><strong>Strength Science</strong></a>
        <a href="articles" aria-label="Articles">Articles</a>
        <a href="findings" aria-label="Findings">Findings</a>
        <a href="about" aria-label="About">About</a>
        <a href="#contact" aria-label="Contact">Contact</a>
      </nav>
    </header>
  )
}
