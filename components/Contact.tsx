'use client'

import { useState, FormEvent } from 'react'

const contactItems = [
  { icon: '✉', label: 'Email', value: 'contact@groupeimperium.fr' },
  { icon: '📞', label: 'Téléphone', value: '06 52 62 40 91' },
  { icon: '📍', label: 'Adresse', value: '78 avenue des Champs-Élysées, 75008 Paris' },
]

const filialeOptions = [
  'Imperium Security',
  'Imperium Private Protection',
  'Groupe OG',
  'Imperium Safety Security Services',
  'Emma Shine',
  'Imperium Shield Security',
  'Groupe Imperium (général)',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-tag">Contact</div>
        <h2>
          Travaillons <span className="gold">ensemble</span>
        </h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              Vous avez un projet, une question ou souhaitez un devis ? Notre équipe est
              disponible pour vous accompagner.
            </p>
            <div className="contact-items">
              {contactItems.map(({ icon, label, value }) => (
                <div key={label} className="contact-item">
                  <span className="ci-icon">{icon}</span>
                  <div>
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Prénom &amp; Nom</label>
                <input type="text" placeholder="Jean Dupont" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="jean@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Filiale concernée</label>
              <select>
                <option value="">Sélectionner une filiale</option>
                {filialeOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows={4} placeholder="Décrivez votre besoin..." required />
            </div>
            <button
              type="submit"
              className="btn btn-gold"
              disabled={submitted}
              style={
                submitted
                  ? { background: '#2a6e3a', color: '#fff' }
                  : {}
              }
            >
              {submitted ? 'Message envoyé ✓' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
