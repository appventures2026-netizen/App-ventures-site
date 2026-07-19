export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#home" className="site-header__logo">
          App<span>Ventures</span>
        </a>
        <nav className="site-header__nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
      </div>
    </header>
  )
}
