import { useState, useEffect } from 'react'
import './Hero.css'

const SLIDES = [
  'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-8a7dc084-0d4b-471f-880e-6a2052590295.png',
  'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-add7fe5f-30b6-4196-88d5-f57de1097bd4.png',
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero section">
      <div className="hero-title">
        <div className="hero-line-1 deco-title" style={{ fontSize: '15vw' }}>
          <span className="cap">S</span>
          <span className="didone">olenn</span>
        </div>
        <div className="hero-line-2 deco-title" style={{ fontSize: '15vw' }}>
          <span className="cap">D</span>
          <span className="didone">elacroix</span>
        </div>
      </div>

      <div className="hero-slideshow">
        {SLIDES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={i === 0 ? 'Cloche argentée' : 'Solenn avec cloche'}
            className={`hero-slide ${i === current ? 'visible' : ''}`}
          />
        ))}
      </div>

      <p className="hero-scroll-hint">scroll down ↓</p>
    </section>
  )
}
