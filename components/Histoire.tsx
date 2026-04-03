const milestones = [
  { year: '1998', text: 'Création du groupe par le fondateur' },
  { year: '2005', text: "Lancement d'Imperium Security" },
  { year: '2012', text: "Création d'Imperium Private Protection" },
  { year: '2018', text: 'Fondation du Groupe OG' },
  { year: '2020', text: "Lancement d'Imperium Safety Security Services" },
  { year: '2022', text: "Création d'Emma Shine — Accueil & Luxe" },
  { year: '2024', text: "Fondation d'Imperium Shield Security" },
]

export default function Histoire() {
  return (
    <section id="histoire" className="histoire">
      <div className="section-container">
        <div className="section-tag">Notre Histoire</div>
        <h2>
          Une <span className="gold">famille</span>,
          <br />
          un empire bâti ensemble
        </h2>
        <div className="histoire-grid">
          <div className="histoire-text">
            <p>
              Le Groupe Imperium est né d&apos;une vision familiale portée par un père et son enfant,
              animés par la même conviction :{' '}
              <strong>offrir des services d&apos;excellence</strong> à leurs clients, avec intégrité
              et rigueur.
            </p>
            <p>
              Depuis sa fondation en <strong>1998</strong>, le groupe a su construire, génération
              après génération, un ensemble de six filiales complémentaires couvrant la sécurité,
              la sûreté portuaire et aéroportuaire, la protection privée, l&apos;accueil haut de
              gamme, le gardiennage armé, le nettoyage et la construction.
            </p>
            <p>
              Ce qui nous distingue ? Une gouvernance familiale qui place{' '}
              <strong>la confiance, la loyauté et la durabilité</strong> au cœur de chaque
              décision. Le Groupe Imperium n&apos;est pas seulement une entreprise — c&apos;est un
              héritage.
            </p>
            <div className="histoire-milestones">
              {milestones.map(({ year, text }) => (
                <div key={year} className="milestone">
                  <span className="ms-year">{year}</span>
                  <span className="ms-text">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="histoire-visual">
            <div className="family-card">
              <div className="family-icon">♛</div>
              <h3>Gouvernance Familiale</h3>
              <p>
                Père &amp; Enfant — deux générations unies par la même ambition d&apos;excellence
                et de service.
              </p>
            </div>
            <div className="heritage-badge">
              <span className="hb-year">1998</span>
              <span className="hb-label">Fondé en</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
