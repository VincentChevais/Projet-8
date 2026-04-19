# Vincent Chevais — Portfolio

> Portfolio professionnel de développeur front-end, conçu et codé from scratch.  
> **Stack :** React 19 · Vite · Sass/SCSS · React Router · i18next · Netlify  
> **Live :** [vincent-chevais-portfolio.netlify.app](https://vincent-chevais-portfolio.netlify.app)

---

## Table des matières

- [Aperçu](#aperçu)
- [Stack & outils](#stack--outils)
- [Architecture du projet](#architecture-du-projet)
- [Pages & composants](#pages--composants)
- [Hooks personnalisés](#hooks-personnalisés)
- [Internationalisation (i18n)](#internationalisation-i18n)
- [SEO & accessibilité](#seo--accessibilité)
- [CV interactif — fonctionnement](#cv-interactif--fonctionnement)
- [Déploiement](#déploiement)
- [Lancer le projet en local](#lancer-le-projet-en-local)

---

## Aperçu

Portfolio conçu pour mettre en valeur un profil de développeur front-end avec un parcours atypique.  
Il se compose de deux espaces distincts :

- **Home** — présentation classique : hero, à propos, compétences, projets, contact.
- **Resume** — CV interactif gamifié : l'utilisateur choisit un personnage et débloque des étapes biographiques sur une timeline, enrichissant dynamiquement une fiche de profil à la manière d'un RPG.

---

## Stack & outils

| Catégorie | Outil | Rôle |
|---|---|---|
| Framework | React 19 | UI par composants, StrictMode activé |
| Build | Vite 8 | Serveur dev HMR, build Rolldown optimisé |
| Styles | Sass / SCSS | Variables, BEM, modules par composant |
| Routing | React Router Dom v7 | SPA avec deux routes (`/` et `/resume`) |
| i18n | i18next + react-i18next | Bilingue FR / EN, détection auto du navigateur |
| Formulaire | Formspree | Envoi d'emails sans back-end |
| Accessibilité | focus-trap-react | Gestion du piège focus dans les modales |
| Icônes | lucide-react + react-icons | Icônes SVG optimisées |
| Hébergement | Netlify | CI/CD depuis GitHub, HTTPS automatique |

---

## Architecture du projet

```
portfolio/
├── public/
│   ├── cv.pdf                  # CV téléchargeable
│   ├── og-image.jpg            # Image Open Graph (1200×630)
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── projects/           # Images projets (.webp)
│   │   └── resume/             # Avatars des personnages (.webp)
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── ProjectModal/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── LanguageSwitcher/
│   │   ├── Wrapper/
│   │   └── Resume/
│   │       ├── CharacterCard/
│   │       ├── CharacterModal/
│   │       ├── CompletionModal/
│   │       ├── Timeline/
│   │       └── TimelineEvent/
│   ├── data/
│   │   ├── projectsData.js     # Données projets (injectées avec t())
│   │   └── resumeData.js       # Données CV + personnages (injectées avec t())
│   ├── hooks/
│   │   ├── useReveal.js        # Animations au scroll (IntersectionObserver)
│   │   ├── useIsMobile.js      # Détection viewport mobile
│   │   └── useScrollToTop.js   # Remise en haut à la navigation
│   ├── pages/
│   │   ├── Home/Home.jsx
│   │   └── Resume/Resume.jsx
│   ├── router/
│   │   ├── paths.js            # Constantes des routes
│   │   └── routes.jsx          # Configuration React Router
│   ├── styles/
│   │   ├── base/
│   │   │   ├── reset.scss
│   │   │   └── variables.scss  # Variables globales (couleurs, typo, espacements)
│   │   └── main.scss           # Point d'entrée des styles
│   ├── trad/
│   │   ├── i18n/index.js       # Configuration i18next
│   │   └── locales/
│   │       ├── fr/             # Traductions françaises (JSON par namespace)
│   │       └── en/             # Traductions anglaises (JSON par namespace)
│   ├── App.jsx                 # Routing dynamique
│   └── main.jsx                # Point d'entrée React
├── index.html                  # SEO complet (OG, Twitter, JSON-LD, geo)
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## Pages & composants

### Page Home

Parcours linéaire ancré sur une seule page, avec scroll fluide vers les sections :

| Section | Composant | Description |
|---|---|---|
| Hero | `Hero.jsx` | Nom, tagline, photo, liens réseaux, CTA (CV + Resume) |
| À propos | `About.jsx` | Pitch personnel avec lien OpenClassrooms via `<Trans>` |
| Compétences | `Skills.jsx` | Hard skills et soft skills |
| Projets | `Projects.jsx` + `ProjectModal.jsx` | Grille de 6 projets, modal de détail avec navigation prev/next |
| Contact | `Contact.jsx` | Formulaire Formspree avec validation |
| Footer | `Footer.jsx` | Liens réseaux, copyright |

La navigation est gérée par ancres HTML (`href="#section"`) sur la Home, et par `<Link>` React Router pour accéder à `/resume`.

### Page Resume

CV interactif gamifié — voir la section dédiée [ci-dessous](#cv-interactif--fonctionnement).

---

## Hooks personnalisés

### `useReveal(options)`

Détecte quand un élément entre dans le viewport via `IntersectionObserver` et retourne un état `isVisible` pour déclencher une animation CSS.

```js
const { ref, isVisible } = useReveal({
  threshold: 0.15,   // % de visibilité requis
  rootMargin: '0px', // marge autour du viewport
  once: true,        // ne se déclenche qu'une fois
})
```

Le seuil et la marge sont adaptés dynamiquement selon le device grâce à `useIsMobile`, pour garantir des animations cohérentes sur mobile comme sur desktop.

### `useIsMobile()`

Écoute `window.matchMedia` pour détecter un breakpoint mobile. Utilisé par `Projects.jsx` pour ajuster les options de `useReveal`.

### `useScrollToTop()`

Remonte le scroll en haut de page à chaque changement de route. Appelé directement dans `Resume.jsx`.

---

## Internationalisation (i18n)

Le portfolio est entièrement bilingue **FR / EN**. La configuration i18next détecte automatiquement la langue du navigateur et permet un switch manuel via `LanguageSwitcher`.

Les traductions sont organisées par **namespaces** (un fichier JSON par contexte) :

| Namespace | Contenu |
|---|---|
| `common` | Éléments partagés (header, footer, navigation) |
| `home` | Sections Hero, About, Skills, Projects, Contact |
| `projectsData` | Titres, descriptions et tags des projets |
| `resume` | Labels UI de la page CV interactif |
| `resumeData` | Données biographiques (événements, personnages, compétences) |

Les données dynamiques (projets, événements timeline) sont générées par des fonctions (`getProjectsData(t)`, `getResumeData(t)`) qui injectent la fonction de traduction au moment de l'appel, ce qui permet de mettre à jour les contenus à la volée lors du changement de langue.

Pour les textes contenant du JSX (liens, balises `<strong>`), le composant `<Trans>` de react-i18next est utilisé pour injecter des éléments React directement dans les chaînes de traduction.

---

## SEO & accessibilité

### SEO (`index.html`)

- `<title>` descriptif et géolocalisé : *"Vincent Chevais | Front-end Developer | Dax"*
- `<meta name="description">` et `<meta name="keywords">`
- **Open Graph** complet : titre, description, image 1200×630, URL canonique, locale
- **Twitter Cards** : `summary_large_image`
- **JSON-LD Schema.org** (type `Person`) : nom, jobTitle, adresse, profils sociaux, compétences déclarées
- Balises géo : `geo.region`, `geo.placename`, `ICBM` — pour le référencement local à Dax
- `<meta name="robots" content="index, follow">`
- `robots.txt` autorisant l'indexation complète

### Accessibilité

- `lang="fr"` sur `<html>` + détection automatique de la langue
- `aria-label` sur tous les liens et boutons interactifs, traduits en FR/EN
- Sémantique HTML5 : `<section>`, `<article>`, `<nav>`, `<aside>`, `<main>`, `<h1>` → `<h3>`
- `aria-hidden="true"` sur les éléments purement décoratifs
- `aria-modal="true"` + `role="dialog"` + `aria-labelledby` sur les modales
- `aria-expanded` sur les cartes timeline, `aria-pressed` sur les boutons de marqueur
- Gestion du piège focus dans les modales via **focus-trap-react** (WCAG 2.4.3)
- Alt textuels sur toutes les images, traduits

### Performances

- Images au format **WebP** pour tous les visuels
- **Build Vite** : tree-shaking, code splitting, hachage des assets (cache navigateur long)
- Animations via `IntersectionObserver` — ne bloquent pas le thread principal
- **HTTPS** automatique sur Netlify

---

## CV interactif — fonctionnement

La page `/resume` est une expérience interactive inspirée des RPG. Voici son fonctionnement complet :

### 1. Sélection du personnage (`CharacterModal`)

Au chargement, une modale s'affiche avec 3 personnages jouables : **Le Libraire**, **Le Journaliste**, **L'Écrivain**. L'utilisateur choisit celui qui lui ressemble ou l'intéresse. Ce choix n'affecte que l'avatar affiché — les données biographiques sont communes.

### 2. Fiche personnage (`CharacterCard`)

Une fois le personnage choisi, une fiche latérale s'affiche avec plusieurs panneaux : infos de base, diplômes, centres d'intérêt, compétences techniques, soft skills. Tous ces panneaux sont **vides au départ** et se remplissent progressivement au fil des clics sur la timeline.

### 3. Timeline biographique (`Timeline` + `TimelineEvent`)

12 événements de 1993 à "Aujourd'hui", disposés en zigzag gauche/droite sur une ligne verticale. Cliquer sur un événement le **débloque** : sa carte s'étend pour révéler titre, description et tags, et met à jour la fiche personnage avec les données correspondantes.

Chaque événement porte un objet `updates` qui décrit les champs à ajouter dans la fiche :

```js
updates: {
  diplomas: ['Licence de Lettres'],
  hobbies: ['Littérature'],
  hardSkills: ['Écriture'],
}
```

La fiche est recalculée à chaque clic via un `useMemo` qui parcourt tous les événements déjà sélectionnés et agrège leurs `updates`, sans doublons.

### 4. Animation des nouveaux tags (`CharacterCard`)

À chaque mise à jour de la fiche, un `useEffect` compare la liste des tags actuels avec la liste précédente (stockée dans un `useRef`). Les tags qui viennent d'apparaître reçoivent temporairement la classe `--new`, qui déclenche une animation CSS pendant 1,4 secondes.

### 5. Fin de parcours — `CompletionModal` + bannière

Quand l'utilisateur a cliqué sur **tous** les événements ET clique spécifiquement sur le dernier (`"Aujourd'hui"`), la `CompletionModal` s'ouvre : elle affiche une transition visuelle entre le personnage choisi au départ et le personnage final **"Le Développeur"**, accompagnée de l'événement conclusif.

En parallèle, un `useEffect` surveille `isJourneyComplete`. Dès que `true` (déclenché une seule fois grâce à un `useRef` garde-fou) :
- la sidebar scrolle automatiquement dans le viewport
- après 250 ms, la bannière de complétion s'affiche sur la fiche avec un bouton de téléchargement du CV PDF

---

## Déploiement

Le projet est déployé sur **Netlify** via CI/CD connecté au dépôt GitHub.

La configuration (`netlify.toml`) :

```toml
[build]
  base    = "portfolio"
  command = "npm install && npm run build"
  publish = "dist"

[[redirects]]
  from   = "/*"
  to     = "/index.html"
  status = 200
```

La règle de redirection `/*` → `/index.html` est indispensable pour une SPA React Router : sans elle, un accès direct à `/resume` renverrait une 404 côté serveur.

---

## Lancer le projet en local

```bash
# Cloner le dépôt
git clone https://github.com/VincentChevais/<repo>.git
cd <repo>/portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

> **Node.js 18+** requis (Vite 8).

---

*Vincent Chevais — Développeur Front-End — Dax, Nouvelle-Aquitaine*  
[LinkedIn](https://www.linkedin.com/in/vincent-chevais/) · [GitHub](https://github.com/VincentChevais) · [Portfolio](https://vincent-chevais-portfolio.netlify.app)
