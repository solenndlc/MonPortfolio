import './ManualWork.css'

const PHOTOS = [
  { src: 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-c72f0542-ce29-473a-bd95-6c9ef090f15a.jpg',  alt: 'Moodboard palette jeans' },
  { src: 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-bfce47b2-86dd-4a24-9339-4f426c826c5c.jpg',  alt: 'Dessin requin' },
  { src: 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-49f17c91-5675-4675-88af-188a69e88802.jpg',  alt: 'Phase de recherche' },
  { src: 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-82e8cd05-bba8-41cd-be03-2ac4fd44d1d6.jpg',  alt: 'Atelier peinture' },
  { src: 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-6cead3b4-903e-41b0-82fc-ecb4eeaa4b95.png',  alt: 'Dessin portrait double' },
  { src: 'https://i-p.rmcdn.net/69ecd11bd8a5eba9310d327f/6298727/image-f3388e7b-9031-4359-8b08-b7ebc1a2cb29.jpg',  alt: 'Travail manuel 6' },
]

export default function ManualWork() {
  return (
    <section className="section manual-section">

      {/* ── Title ── */}
      <div className="manual-title">
        <div className="deco-title" style={{ fontSize: '11vw' }}>
          <span className="cap">M</span>
          <span className="didone">anual</span>
          <span className="cap" style={{ marginLeft: '0.2em' }}>W</span>
          <span className="didone">ork</span>
        </div>
      </div>

      {/* ── 3×2 photo grid ── */}
      <div className="manual-grid">
        {PHOTOS.map(({ src, alt }) => (
          <img key={src} src={src} alt={alt} className="manual-img" />
        ))}
      </div>

      <span className="label-cyan manual-label" style={{ fontSize: '20px' }}>
        Projet scolaire et personnel manuel
      </span>
    </section>
  )
}
