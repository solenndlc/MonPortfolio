import './ConceptShooting.css'

const GRID_PHOTOS = [
  { src: 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-e2162732-b560-45fa-af01-a2773ed018f8.png', alt: 'Young corporate misery 1' },
  { src: 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-1cb73809-3ce7-4930-8532-a7ed029f62e6.png', alt: 'Young corporate misery 2' },
  { src: 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-25239ebc-624f-469c-839a-1640626e3ca2.png', alt: 'Young corporate misery 3' },
  { src: 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-74046723-e848-4b93-b069-a2c71cdb67c2.png', alt: 'Young corporate misery 4' },
  { src: 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-bdff9b89-c568-4020-9168-4001101b1c05.png', alt: 'Young corporate misery 5' },
  { src: 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-2b6fe766-d121-4f18-ac15-30d0a65904a1.png', alt: 'Young corporate misery 6' },
]

export default function ConceptShooting() {
  return (
    <section className="section shooting-section">

      {/* ── Title ── */}
      <div className="shooting-title">
        <div className="deco-title" style={{ fontSize: '11vw' }}>
          <span className="cap">S</span>
          <span className="didone">hooting</span>
          <span className="cap" style={{ marginLeft: '0.2em' }}>C</span>
          <span className="didone">oncept</span>
        </div>
      </div>

      {/* ── Two large hero photos ── */}
      <div className="shooting-hero">
        <img
          src="https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-99ec72c2-297a-4804-9bdd-c013d59d9da6.png"
          alt="Shooting immersif — gauche"
          className="shooting-hero-img"
        />
        <img
          src="https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-5619d09d-1f3c-4e8f-b099-d45a5e9671f1.png"
          alt="Shooting immersif — droite"
          className="shooting-hero-img"
        />
      </div>

      {/* ── Label + grid + desc ── */}
      <span className="label-cyan" style={{ textAlign: 'center', marginBottom: '20px', fontSize: '22px' }}>
        Shooting immersif — "Young corporate misery"
      </span>

      <div className="shooting-bottom">
        <div className="shooting-grid">
          {GRID_PHOTOS.map(({ src, alt }) => (
            <img key={src} src={src} alt={alt} className="shooting-grid-img" />
          ))}
        </div>

        <div className="shooting-desc">
          <p>
            Ce shooting photo met en lumière le quotidien paradoxal des jeunes adultes qui entrent
            dans le monde du travail. L'objectif est de capturer ce contraste saisissant entre la
            réalité d'une vie précaire, marquée par la galère financière, et l'espoir persistant
            de réussir un jour à bien gagner sa vie.
          </p>
          <br />
          <p>
            À travers ces images, je voulais exprimer cette dualité propre à notre génération :
            la misère du présent face à l'ambition et aux rêves d'avenir.
          </p>
        </div>
      </div>
    </section>
  )
}
