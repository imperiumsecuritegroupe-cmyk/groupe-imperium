const valeurs = [
  {
    title: 'Excellence',
    text: "Chaque mission est réalisée avec le plus haut niveau d'exigence et de professionnalisme.",
  },
  {
    title: 'Confiance',
    text: 'Nos clients nous confient leur sécurité et leurs projets. Nous honorons cette confiance chaque jour.',
  },
  {
    title: 'Famille',
    text: 'Fondé et dirigé en famille, le groupe cultive des relations humaines durables en interne comme avec ses clients.',
  },
  {
    title: 'Intégrité',
    text: 'Transparence et honnêteté sont les fondements de toutes nos décisions et partenariats.',
  },
  {
    title: 'Engagement',
    text: 'Nous nous engageons pleinement dans chaque contrat, sans compromis sur la qualité.',
  },
  {
    title: 'Innovation',
    text: 'Nous évoluons continuellement pour adopter les meilleures pratiques et technologies du secteur.',
  },
]

export default function Valeurs() {
  return (
    <section id="valeurs" className="valeurs">
      <div className="section-container">
        <div className="section-tag">Nos Valeurs</div>
        <h2>
          Ce qui nous <span className="gold">définit</span>
        </h2>
        <div className="valeurs-grid">
          {valeurs.map(({ title, text }) => (
            <div key={title} className="valeur">
              <div className="valeur-icon">●</div>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
