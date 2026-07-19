export default function Home() {
  return (
    <section id="home" className="section hero">
      <div className="hero__content">
        <p className="eyebrow">App Ventures</p>
        <h1>
          We build apps that people <span className="accent">actually use.</span>
        </h1>
        <p className="hero__lede">
          A small, independent app publishing studio designing focused, no-nonsense mobile apps —
          starting with RiseMate, our smart wake-up alarm.
        </p>
        <div className="hero__actions">
          <a href="#portfolio" className="btn btn--primary">
            See our apps
          </a>
          <a href="#about" className="btn btn--ghost">
            About us
          </a>
        </div>
      </div>
    </section>
  )
}
