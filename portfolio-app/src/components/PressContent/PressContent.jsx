import './PressContent.css'

const SPREADS = [
  'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-54f3c6d8-b59b-4df1-8303-f6f751b4c1a9.png',
  'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-97d01d17-a9e3-4bc4-9306-66a1eb8eed78.png',
  'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-9eee8b91-79cc-4fa3-8f96-017ab647e5fd.png',
  'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-dd936db7-9d05-473d-b53e-ba5f57c75ba6.png',
  'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-896799e2-d1b6-4025-b7b9-b1b1c92a7773.png',
]

export default function PressContent() {
  const firstFourSpreads = SPREADS.slice(0, 4);
  const fifthSpread = SPREADS[4];

  return (
    <section className="section press-section">
      {/* Le conteneur possède désormais le titre à l'intérieur */}
      <div className="press-grid">
        
        {/* ── Title (Placé ici pour l'overlay absolu) ── */}
        <div className="press-title">
          <div className="deco-title" style={{ fontSize: '10vw' }}>
            <span className="cap">P</span>
            <span className="didone">ress</span>
            <span className="cap" style={{ marginLeft: '0.2em' }}>C</span>
            <span className="didone">ontent</span>
          </div>
        </div>

        {/* Magazine cover */}
        <div className="press-cover-col">
          <img
            src="https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-687c2c8b-4760-4a5b-baa5-c9763931d65d.png"
            alt='Magazine "Memorial" — couverture'
            className="press-cover"
          />
          <span className="label-cyan">
            "Memorial" — Concept magazine pop culture
          </span>
        </div>

        {/* Right Area */}
        <div className="press-right-area">
          {/* Grille de 4 spreads (2x2) */}
          <div className="press-spreads-four">
            {firstFourSpreads.map((src, i) => (
              <img key={i} src={src} alt={`Spread ${i + 1}`} className="press-spread" />
            ))}
          </div>

          {/* Colonne Description + 5ème Spread */}
          <div className="press-sidebar">
            <div className="press-desc">
              <p>
                Ce magazine est né de ma passion pour la pop culture et de l'envie de retranscrire
                cet univers visuel sur papier. Pour y parvenir, je me suis appuyé sur les bases
                techniques acquises lors d'un devoir précédent, qui consistait à réaliser un rapport
                d'activité sur InDesign. J'ai adoré réutiliser ces compétences de mise en page pour
                leur donner une dimension beaucoup plus artistique. C'est un projet qui m'a inspiré
                du début à la fin et j'ai pris énormément de plaisir à le concevoir !
              </p>
            </div>
            {fifthSpread && (
              <img 
                src={fifthSpread} 
                alt="Spread 5" 
                className="press-spread press-fifth-spread" 
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}