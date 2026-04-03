const filiales = [
  {
    color: 'blue',
    icon: '🛡',
    badge: 'Sécurité',
    name: 'Imperium',
    nameAccent: 'Security',
    description:
      "Spécialisée dans la sécurité des biens et des personnes, Imperium Security déploie des agents qualifiés et des dispositifs de surveillance adaptés à chaque environnement : commerces, événements, sites industriels.",
    services: [
      'Gardiennage & surveillance',
      'Sécurité événementielle',
      'Rondes et interventions',
      "Contrôle d'accès",
    ],
    tag: 'Imperium Security',
    featured: false,
  },
  {
    color: 'gold',
    icon: '👑',
    badge: 'Protection VIP',
    name: 'Imperium',
    nameAccent: 'Private Protection',
    description:
      "Service d'élite dédié à la protection rapprochée de personnalités, dirigeants et particuliers à haute valeur exposée. Discrétion absolue, réactivité maximale et professionnalisme sans compromis.",
    services: [
      'Protection rapprochée (bodyguard)',
      'Sécurité résidentielle privée',
      'Escorte & convoi sécurisé',
      'Analyse de risque personnalisée',
    ],
    tag: 'Imperium Private Protection',
    featured: true,
  },
  {
    color: 'green',
    icon: '🏗',
    badge: 'Nettoyage & Construction',
    name: 'Groupe',
    nameAccent: 'OG',
    description:
      "Filiale spécialisée dans les services de nettoyage professionnel et la construction, le Groupe OG assure des prestations de qualité pour les particuliers, entreprises et collectivités.",
    services: [
      'Nettoyage de locaux & chantiers',
      "Entretien d'espaces communs",
      'Construction & rénovation',
      'Travaux de second œuvre',
    ],
    tag: 'Groupe OG',
    featured: false,
  },
  {
    color: 'teal',
    icon: '✈',
    badge: 'Sûreté Portuaire & Aéroportuaire',
    name: 'Imperium',
    nameAccent: 'Safety Security Services',
    description:
      "Spécialisée dans la sûreté des zones portuaires et aéroportuaires, Imperium Safety Security Services déploie des équipes certifiées pour garantir la sécurité des passagers, des marchandises et des infrastructures sensibles.",
    services: [
      'Sûreté aéroportuaire',
      'Sûreté portuaire',
      'Contrôle & filtrage des accès',
      'Inspection fret & bagages',
    ],
    tag: 'Imperium Safety Security Services',
    featured: false,
  },
  {
    color: 'purple',
    icon: '🌟',
    badge: 'Accueil & Luxe',
    name: 'Emma',
    nameAccent: 'Shine',
    description:
      "Agence haut de gamme dédiée aux services d'accueil et d'hospitalité de prestige, Emma Shine sélectionne et forme des professionnels d'élite pour représenter les plus grandes marques et institutions avec raffinement et excellence.",
    services: [
      "Hôtesses & hôtes d'accueil",
      'Accueil corporate & événementiel luxe',
      'Gestion de clientèle VIP',
      'Protocole & relations publiques',
    ],
    tag: 'Emma Shine',
    featured: false,
  },
  {
    color: 'crimson',
    icon: '⚔',
    badge: 'Gardiennage Armé',
    name: 'Imperium',
    nameAccent: 'Shield Security',
    description:
      "Filiale dédiée à la surveillance, la sécurité et le gardiennage par agents de sécurité armés, Imperium Shield Security intervient sur les sites à haute valeur ou à risque élevé avec des professionnels assermentés et hautement qualifiés.",
    services: [
      'Gardiennage par agents armés',
      'Surveillance de sites sensibles',
      'Rondes & interventions armées',
      'Protection de convois & valeurs',
    ],
    tag: 'Imperium Shield Security',
    featured: false,
  },
]

export default function Filiales() {
  return (
    <section id="filiales" className="filiales">
      <div className="section-container">
        <div className="section-tag">Nos Filiales</div>
        <h2>
          Six filiales,
          <br />
          une <span className="gold">force commune</span>
        </h2>
        <div className="filiales-grid">
          {filiales.map((f) => (
            <div
              key={f.tag}
              className={`filiale-card${f.featured ? ' featured' : ''}`}
              data-color={f.color}
            >
              <div className="filiale-header">
                <div className="filiale-icon">{f.icon}</div>
                <div className="filiale-badge">{f.badge}</div>
              </div>
              <h3>
                {f.name}
                <br />
                <span>{f.nameAccent}</span>
              </h3>
              <p>{f.description}</p>
              <ul className="filiale-services">
                {f.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="filiale-footer">
                <span className="filiale-tag">{f.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
