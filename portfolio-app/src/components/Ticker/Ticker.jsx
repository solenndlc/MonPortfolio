import './Ticker.css'

const TEXT = 'Etudiante en 1ère année BUT MMI → '

export default function Ticker() {
  const repeated = TEXT.repeat(8)
  return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
        <span>{repeated}</span>
        <span aria-hidden="true">{repeated}</span>
      </div>
    </div>
  )
}
