const filialesLinks = [
  'Imperium Security',
  'Imperium Private Protection',
  'Groupe OG',
  'Imperium Safety Security Services',
  'Emma Shine',
  'Imperium Shield Security',
]

const groupeLinks = [
  { href: '#histoire', label: 'Notre Histoire' },
  { href: '#valeurs', label: 'Nos Valeurs' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="logo-text">
            GROUPE <strong>IMPERIUM</strong>
          </span>
          <p>
            Une histoire de famille depuis 1998.
            <br />
            Excellence, confiance et engagement.
          </p>
        </div>
        <div className="footer-links">
          <h5>Filiales</h5>
          <ul>
            {filialesLinks.map((name) => (
              <li key={name}>
                <a href="#filiales">{name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          <h5>Groupe</h5>
          <ul>
            {groupeLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Groupe Imperium — Tous droits réservés.</p>
      </div>
    </footer>
  )
}
