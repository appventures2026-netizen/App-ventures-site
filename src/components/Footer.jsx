export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>
        &copy; {year} App Ventures — All Rights Reserved
      </p>
      <p>
        <a href="mailto:appventures2026@gmail.com">appventures2026@gmail.com</a>
      </p>
    </footer>
  )
}
