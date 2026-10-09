# Portfolio — David Maron

Portfolio personnel réalisé dans le cadre de ma formation de développeur web : https://david-maron-portfolio.netlify.app/

## Présentation

Ce portfolio a été conçu pour présenter mon parcours, mes compétences en développement web et les principaux projets réalisés pendant ma formation.

L'objectif était de créer un site professionnel, responsive, accessible et optimisé pour les performances et le référencement naturel.

## Technologies utilisées

- HTML5
- CSS3
- Sass
- JavaScript
- Git
- GitHub
- Netlify
- Netlify Forms

## Fonctionnalités

- Navigation entre les différentes sections du portfolio
- Navigation responsive avec menu mobile
- Mise en évidence de la section active dans la navigation
- Présentation des compétences techniques
- Présentation de trois projets réalisés pendant la formation
- Liens vers les repositories GitHub
- Formulaire de contact
- Réception des messages via Netlify Forms
- Bouton de retour en haut de page
- Design responsive pour desktop, tablette et mobile

## Projets présentés

### Nina Carducci

Optimisation et amélioration d'un site existant avec un travail sur les performances, le référencement naturel, l'accessibilité et le fonctionnement du site.

### Sophie Bluel

Transformation d'un site statique en portfolio dynamique avec JavaScript, communication avec une API REST, authentification JWT et interface d'administration.

### Kasa

Refonte d'une plateforme de location immobilière avec React, Sass, React Router et une API REST.

### Quiz Clash

Création et publication d'une application mobile de quiz de culture générale, développée en JavaScript avec Capacitor.

Le jeu propose des questions chronométrées, la personnalisation du profil avec un pseudo et un avatar, des succès à débloquer, un classement général, le partage des scores et des statistiques personnelles. Un abonnement VIP permet de jouer sans publicité et d'accéder à des avatars exclusifs.

Technologies : HTML, CSS, JavaScript, Capacitor, Firebase, AdMob et Google Play Billing.

## Accessibilité

Une attention particulière a été portée à l'accessibilité du portfolio :

- Structure HTML sémantique
- Navigation au clavier
- Focus visibles
- Contrastes adaptés
- Alternatives textuelles pour les images informatives
- `alt=""` pour les images décoratives
- Labels associés aux champs du formulaire
- Utilisation raisonnée des attributs ARIA
- Messages du formulaire annoncés avec `aria-live`

Les tests réalisés ont permis d'obtenir :

- Lighthouse Accessibilité : **100/100**
- WAVE : **0 erreur**
- WAVE : **0 erreur de contraste**
- AIM Score : **10/10**

## Performances et SEO

Le portfolio a également été optimisé afin d'améliorer sa vitesse de chargement et son référencement :

- Optimisation et conversion des images en WebP
- Redimensionnement des images selon leur utilisation
- Ajout des attributs `width` et `height`
- Optimisation du chargement de l'image principale
- Balise `<title>` optimisée
- Meta description
- Structure des titres HTML
- Contenus adaptés aux mots-clés liés au développement web

Dernier test Lighthouse :

- Performance : **99/100**
- Accessibilité : **100/100**
- Bonnes pratiques : **100/100**
- SEO : **100/100**

## Responsive design

Le site est conçu pour s'adapter aux différentes tailles d'écran :

- Desktop
- Tablette
- Mobile

Les styles sont organisés avec Sass afin de faciliter la maintenance et l'évolution du projet.

## Organisation du projet

```text
portfolio/
├── frontend/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── css/
│   ├── sass/
│   ├── index.html
│   └── script.js
├── backend/
│   ├── routes/
│   └── app.js
├── package.json
├── package-lock.json
└── .gitignore
