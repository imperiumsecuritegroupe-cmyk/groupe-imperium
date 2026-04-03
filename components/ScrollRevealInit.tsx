'use client'

import { useEffect } from 'react'

export default function ScrollRevealInit() {
  useEffect(() => {
    const reveals = document.querySelectorAll(
      '.stat, .milestone, .filiale-card, .valeur, .histoire-text, .histoire-visual, .contact-info, .contact-form, .family-card'
    )

    reveals.forEach((el, i) => {
      el.classList.add('reveal')
      if (i % 4 === 1) el.classList.add('reveal-delay-1')
      if (i % 4 === 2) el.classList.add('reveal-delay-2')
      if (i % 4 === 3) el.classList.add('reveal-delay-3')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    reveals.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
