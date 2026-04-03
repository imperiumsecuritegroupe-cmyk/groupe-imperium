export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Depuis 1998</p>
        <h1>
          GROUPE
          <br />
          <span className="gold">IMPERIUM</span>
        </h1>
        <p className="hero-sub">Une histoire de famille. Une vision d&apos;excellence.</p>
        <div className="hero-cta">
          <a href="#filiales" className="btn btn-gold">
            Découvrir nos filiales
          </a>
          <a href="#histoire" className="btn btn-outline">
            Notre histoire
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Défiler</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
