export default function AppCard({ app }) {
  return (
    <article className="app-card" style={{ '--app-accent': app.accent }} tabIndex={0}>
      <div className="app-card__icon">{app.icon}</div>
      <h3 className="app-card__name">{app.name}</h3>
      <p className="app-card__tagline">{app.tagline}</p>
      <p className="app-card__desc">{app.description}</p>

      {app.hasPrivacyPolicy && (
        <div className="app-card__overlay">
          <a
            className="app-card__overlay-btn"
            href={app.privacyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      )}
    </article>
  )
}
