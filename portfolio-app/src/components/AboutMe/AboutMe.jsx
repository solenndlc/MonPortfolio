import './AboutMe.css'
import aboutMePicture from '../../assets/about-me-picture.png'

export default function AboutMe() {
  return (
    <section id="about" className="section about-section">
      <div className="about-grid">

        {/* ── Left: collage ── */}
        <div className="about-collage">
          <img
            className="about-picture"
            src={aboutMePicture}
            alt="A propos de moi photo"
          />
        </div>

        {/* ── Center: title ── */}
        <div className="about-title-col">
          <div className="deco-title about-main-title" style={{ fontSize: '11vw' }}>
            <span className="cap">A</span>
            <span className="didone">bout</span>
          </div>
          <div className="deco-title about-main-title" style={{ fontSize: '11vw' }}>
            <span className="cap" style={{ marginLeft: '1.2em' }}>M</span>
            <span className="didone">e</span>
          </div>
        </div>

        {/* ── Right: bio text ── */}
        <div className="about-bio">
          <p>
            Bonjour !<br /><br />
            je m'appelle Solenn Delacroix et j'ai 19 ans. Mon univers est un mélange fascinant d'art
            manuel et de technologie numérique. J'ai une passion profonde pour la mode et la peinture,
            mais je mets aussi un point d'honneur à maîtriser les outils modernes : je manipule
            quotidiennement des logiciels comme Photoshop, Illustrator, InDesign, DaVinci Resolve et CapCut.
            <br /><br />
            Mon parcours créatif a commencé très jeune avec le montage vidéo sur ma Nintendo 3DS, une
            expérience qui a évolué vers une expertise technique solide. Ce qui me motive le plus dans
            mon travail, c'est la volonté de mettre en lumière les cultures issues de la diaspora, et
            particulièrement les richesses culturelles africaines.
            <br /><br />
            Ma créativité est constamment nourrie par une écoute musicale éclectique, allant de SZA,
            Drake, Tyler the creator et Childish Gambino à Sade, Marvin Gaye et Rihanna. Pour garder
            l'énergie nécessaire à cette vie intense, je pratique régulièrement le sport en salle et
            je projette d'entamer la pratique de l'escalade dès l'année prochaine.
          </p>
        </div>
      </div>
    </section>
  )
}
