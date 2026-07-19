import { apps } from '../data/apps.js'
import AppCard from './AppCard.jsx'

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="section__inner">
        <p className="eyebrow">Portfolio</p>
        <h2>What we've shipped.</h2>
        <div className="portfolio__grid">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
          <article className="app-card app-card--soon">
            <div className="app-card__icon">✦</div>
            <h3 className="app-card__name">More coming soon</h3>
            <p className="app-card__desc">We're always working on the next app.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
