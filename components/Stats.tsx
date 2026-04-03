const stats = [
  { number: '1998', label: 'Année de fondation' },
  { number: '6', label: 'Filiales actives' },
  { number: '25+', label: "Années d'expérience" },
  { number: '100%', label: 'Engagement familial' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map(({ number, label }) => (
          <div key={label} className="stat">
            <span className="stat-number">{number}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
