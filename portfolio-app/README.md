# Portfolio — DELACROIX SOLENN

Portfolio one-page scroll en React + Vite, reproduction fidèle du design Readymag original.

## Structure des fichiers à copier

```
index.html                          ← remplace l'existant
src/
  index.css                         ← remplace l'existant
  App.jsx                           ← remplace l'existant
  components/
    Navbar.jsx / Navbar.css
    Hero.jsx / Hero.css
    Ticker.jsx / Ticker.css
    AboutMe.jsx / AboutMe.css
    MesOutils.jsx / MesOutils.css
    AudiovisualContent.jsx / AudiovisualContent.css
    PressContent.jsx / PressContent.css
    ConceptShooting.jsx / ConceptShooting.css
    ManualWork.jsx / ManualWork.css
    Contacts.jsx / Contacts.css
```

## Installation & lancement

```bash
npm install
npm run dev
```

## Polices

- **tccs (Acroterion JF)** — chargée via TypeKit CDN dans `index.css`.  
  Si les URL TypeKit sont bloquées (CORS hors du domaine Readymag), les grandes initiales
  tomberont automatiquement sur **Cormorant SC** (Google Fonts, incluse dans `index.html`).
- **Antic Didone**, **Pixelify Sans**, **DotGothic16**, **Inter** — Google Fonts.

## Images

Toutes les images sont servies depuis le CDN Readymag public du projet original  
(`i-p.rmcdn.net`). Elles sont accessibles tant que le projet Readymag est publié.

**Pour héberger les images en local** (recommandé pour la production) :
1. Télécharge chaque URL depuis `i-p.rmcdn.net/...`
2. Place les fichiers dans `public/images/`
3. Remplace les URL dans chaque composant par `/images/nom-du-fichier.jpg`

## Déploiement

### Vercel (recommandé — 1 clic)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Glisse le dossier dist/ dans app.netlify.com
```

### GitHub Pages
```bash
# Dans vite.config.js, ajoute : base: '/nom-du-repo/'
npm run build
npx gh-pages -d dist
```

> Le site est entièrement statique — aucun backend, aucune base de données.
