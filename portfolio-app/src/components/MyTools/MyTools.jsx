import { useState } from 'react'
import './MyTools.css'

const BASE = 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/'

// Tailles augmentées (w) et coordonnées x repoussées vers l'extérieur
const ITEMS = [
  // --- CÔTÉ GAUCHE (Plus éloigné et plus grand) ---
  { src: BASE + 'image-ad81eb3c-5828-4972-933b-9376cc47c6b3.png', x: -360, y: -60,  r: -12, w: 55,  d: 0.000 },
  { src: BASE + 'image-a68f8cac-5502-49f9-a005-6f80cd469786.png', x: -280, y: 50,   r: 9,   w: 55,  d: 0.045 },
  { src: BASE + 'image-5d9cec90-3ab3-4a8b-a8eb-0b4787f0ae43.png', x: -430, y: 120,  r: -16, w: 180, d: 0.090 },
  { src: BASE + 'image-23351c37-309f-455d-84c7-a8a2ad3f1f7a.png', x: -230, y: -60,  r: -25, w: 60,  d: 0.135 },
  { src: BASE + 'image-6cee61c9-49c1-490c-b084-51cc4a5d5f25.png', x: -450, y: -30,  r: -13, w: 70,  d: 0.630 },
  { src: BASE + 'image-15ae52a6-af65-484f-917b-d7b8c4a6506f.png', x: -220, y: 130,  r: 18,  w: 100, d: 0.450 },
  
  // --- CÔTÉ DROIT (Plus éloigné et plus grand) ---
  { src: BASE + 'image-d35cbf8e-2ae7-45d4-993a-ac07eb0da8b5.png', x: 245,  y: 55,  r: -10, w: 65,  d: 0.270 },
  { src: BASE + 'image-2762c968-1123-4f8b-9b8b-a6359dee2f2d.png', x: 485,  y: 135, r: 13,  w: 70,  d: 0.315 },
  { src: BASE + 'image-f633da9a-2376-4bd2-b9f5-a9df7b476d71.png', x: 535,  y: -25, r: -15, w: 65,  d: 0.360 },
  { src: BASE + 'image-eafaa3ad-64d5-4424-8da3-0673489feb76.png', x: 275,  y: -85, r: 8,   w: 75,  d: 0.405 },
  { src: BASE + 'image-1d568bca-c2ba-4bfa-a313-bd10dcbbf616.png', x: 385,  y: 35,  r: 7,   w: 200, d: 0.180 },
]

const SKILLS = [
  // Repoussé également à l'extrême gauche
  { name: 'DaVinci Resolve', src: 'https://cdn.simpleicons.org/davinciresolve/9CA3AF', x: 435,  y: -85,  r: -7,  w: 40,  d: 0.225 },
]

export default function MyTools() {
  const [open, setOpen] = useState(false)

  return (
    <section id="tools" className="section tools-section">
      <div className="tools-top">
        {/* ── Title ── */}
        <div className="tools-title-col">
          <div className="deco-title" style={{ fontSize: '10vw' }}>
            <span className="cap">M</span>
            <span className="didone">es</span>
          </div>
          <div className="deco-title" style={{ fontSize: '10vw' }}>
            <span className="cap">O</span>
            <span className="didone">utils</span>
          </div>
        </div>

        <div className="tools-text">
          <p>
            Au quotidien, mon travail de création repose sur deux piliers. D'un côté, il y a
            les logiciels de la suite Adobe, que j'ai appris à maîtriser durant mes cours.
            De l'autre, il y a des outils comme CapCut et Affinity, que j'ai explorés et
            adoptés en autodidacte par pure curiosité.
          </p>
          <br />
          <p>
            C'est en mélangeant ces deux parcours et en pratiquant tous les jours que j'ai pu
            perfectionner ma technique et enrichir mon style. Aujourd'hui, cette combinaison de
            logiciels fait pleinement partie de ma routine créative, et tous ces outils me sont
            devenus indispensables pour donner vie à mes projets.
          </p>
        </div>
      </div>

      <div className="tools-spread">
        <div className={`box-stage ${open ? 'is-open' : ''}`}>

          <button
            type="button"
            className="box-btn"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-label={open ? 'Fermer la boîte à outils' : 'Ouvrir la boîte à outils'}
          >
            <img
              className="box-img box-closed"
              src={BASE + 'image-71514dc5-cc7a-4650-9ca5-d1cb4c95300d.png'}
              alt="Boîte à outils fermée"
            />
            <img
              className="box-img box-open"
              src={BASE + 'image-dc078618-3e52-4458-b7c2-ba237e989439.png'}
              alt="Boîte à outils ouverte"
            />
          </button>

          {/* Burst items — anchored near the box, scattered on open */}
          {ITEMS.map((it, i) => (
            <img
              key={i}
              src={it.src}
              alt=""
              aria-hidden="true"
              className="burst-item"
              style={{
                '--x': `${it.x}px`,
                '--y': `${it.y}px`,
                '--r': `${it.r}deg`,
                '--w': `${it.w}px`,
                '--d': `${it.d}s`,
              }}
            />
          ))}

          {SKILLS.map((s) => (
            <img
              key={s.name}
              src={s.src}
              alt={s.name}
              title={s.name}
              className="burst-item skill-icon"
              style={{
                '--x': `${s.x}px`,
                '--y': `${s.y}px`,
                '--r': `${s.r}deg`,
                '--w': `${s.w}px`,
                '--d': `${s.d}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}