export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner">
        <p className="eyebrow">About</p>
        <h2>Small studio, sharp focus.</h2>
        <p className="about__body">
          App Ventures is an independent app publishing company. We design and ship mobile apps
          that solve one problem really well, instead of chasing every feature under the sun. We
          care about clean design, honest privacy practices, and apps that respect your time —
          and your data.
        </p>
        <div className="about__grid">
          <div className="about__card">
            <h3>Focused</h3>
            <p>Every app we publish does one thing, and does it properly.</p>
          </div>
          <div className="about__card">
            <h3>Transparent</h3>
            <p>Clear privacy policies and permissions — no dark patterns, no surprises.</p>
          </div>
          <div className="about__card">
            <h3>Independent</h3>
            <p>Built and maintained by a small team that ships fast and listens closely.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
