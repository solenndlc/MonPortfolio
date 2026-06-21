import './AudiovisualContent.css'

export default function AudiovisualContent() {
  return (
    <section id="projets" className="section av-section">

      {/* ── Title ── */}
      <div className="av-title">
        <div className="deco-title" style={{ fontSize: '10vw' }}>
          <span className="cap">A</span>
          <span className="didone">udiovisual</span>
          <span className="cap" style={{ marginLeft: '0.2em' }}>C</span>
          <span className="didone">ontent</span>
        </div>
      </div>

      {/* ── Videos grid + description ── */}
      <div className="av-content">
        <div className="av-videos">
          {/* Video 1 — Tutoriel balance des blancs */}
          <div className="av-video-item">
            <div className="av-laptop">
              <img
                src="https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-3a7be44c-e2ae-41a1-a382-1482695de7c5.png"
                alt="Laptop mockup"
                className="av-laptop-img"
              />
              <div className="av-iframe-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/bh-abBiVI0s?autoplay=1&mute=1&loop=1&playlist=bh-abBiVI0s&controls=0&modestbranding=1&rel=0"
                  title="GuideVisuel Solenn 2025"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <span className="label-cyan">Tutoriel Balance des blancs</span>
          </div>

          {/* Video 2 — Apple Music publicité */}
          <div className="av-video-item">
            <div className="av-laptop">
              <img
                src="https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-992bdb26-1d1f-4905-8103-8587e7c4763f.png"
                alt="Laptop mockup"
                className="av-laptop-img"
              />
              <div className="av-iframe-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/c9r7sKn1mnI?autoplay=1&mute=1&loop=1&playlist=c9r7sKn1mnI&controls=0&modestbranding=1&rel=0"
                  title="DELACROIX SOLENN PORTRAIT"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <span className="label-cyan">Apple music — Publicité</span>
          </div>
        </div>

        {/* Description */}
        <div className="av-desc">
          <p>
            Mon parcours audiovisuel s'est d'abord développé à travers deux projets marquants.
            Ma première expérience s'est faite sous la supervision de mon professeur d'audiovisuel,
            avec la réalisation d'un tutoriel technique dédié à la balance des blancs et au triangle
            d'exposition. Ce projet m'a permis de poser des bases solides en capturation et en
            pédagogie par l'image.
          </p>
          <br />
          <p>
            Par la suite, j'ai pu tester ma créativité en réalisant une publicité pour Apple Music.
            La consigne était un véritable défi : promouvoir le service en une minute sans jamais
            montrer le produit lui-même. Cet exercice m'a poussé à développer une narration visuelle
            originale et à jouer sur les émotions et le son pour captiver le spectateur.
          </p>
        </div>
      </div>
    </section>
  )
}