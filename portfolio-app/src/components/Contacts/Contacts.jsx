import './Contacts.css'

export default function Contacts() {
  return (
    <section id="contacts" className="section contacts-section">
      <div className="contacts-inner">

        {/* ── Title ── */}
        <div className="deco-title contacts-title" style={{ fontSize: '11vw' }}>
          <span className="cap">C</span>
          <span className="didone">ontacts :</span>
        </div>

        {/* ── Info ── */}
        <div className="contacts-info">
          <p className="contacts-line">
            Mail :{' '}
            <a href="mailto:solenn.delacroix1@gmail.com" className="contacts-link">
              solenn.delacroix1@gmail.com
            </a>
          </p>
          <p className="contacts-line">
            Téléphone :{' '}
            <a href="tel:+33789301303" className="contacts-link">
              +33 7 89 30 13 03
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}
