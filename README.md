# Prompt Claude Code — Site Alex MindFlow

## Contexte

Crée un site web complet pour **Alex MindFlow**, une pratique de coaching en performance et bien-être fondée par Alexandre Zoonekynd, basée à Valenciennes (Hauts-de-France).

La méthode repose sur **3 piliers présentés comme une approche globale** :

1. **Respiration fonctionnelle** — certifications Oxygen Advantage® et Inspire®
2. **Préparation mentale** — méthode ECO2A® (Dr. Sylvain Baert)
3. **Thérapie par contraste chaud/froid**

Le public est large et diversifié : athlètes d'endurance (runners, triathlètes, trail, Hyrox), étudiants, entrepreneurs, entreprises, grand public. Le site doit être polyvalent et parler à tous sans segmenter.

L'objectif du site : faire connaître l'activité, présenter les services clairement, et permettre au visiteur de prendre contact ou réserver facilement. Le site sera présenté à un salon dans 2 jours — il doit être **opérationnel rapidement**.

---

## Stack technique

- **Next.js 14+ avec App Router**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** pour les animations
- Pas de backend requis — site statique exportable
- Déploiement géré manuellement (pas Vercel/Netlify imposé)

---

## Structure des pages

### 1. `/` — Page d'accueil (one-page scrollable)

Sections dans l'ordre :

**Hero**

- Accroche principale forte : quelque chose autour de "performer autrement, sans s'épuiser davantage"
- Sous-titre expliquant la méthode en une phrase
- Deux CTA : "Découvrir la méthode" (scroll vers services) + "Réserver un appel" (lien Cal.com — mettre un placeholder `#` pour l'instant)
- Placeholder visuel pour une photo d'Alex (composant avec initiales "AZ" ou rectangle stylisé)

**Méthode / Les 3 piliers**

- Présentation visuelle des 3 piliers (respiration, mental, froid/chaud)
- Chaque pilier : icône ou pictogramme, nom, 2-3 lignes d'explication
- Sous-titre de section : "Une méthode intégrée pour performer sans se détruire"

**À qui ça s'adresse**

- Quatre profils : Athlètes d'endurance / Étudiants sous pression / Entrepreneurs / Entreprises
- Cards ou grille visuelle courte
- Phrase fil rouge : la méthode s'adapte à chaque contexte de vie

**Pourquoi Alex MindFlow**

- Quelques chiffres ou éléments de crédibilité (certifications, background sportif)
- Courte accroche narrative sur le burnout d'Alex comme point de départ
- Lien vers la page "À propos"

**Appel à l'action final**

- Section CTA centrale : "Prêt à performer autrement ?"
- Bouton principal vers Cal.com + lien secondaire formulaire contact

**Footer**

- Logo / nom
- Lien Instagram (@alex_mindflow)
- Lien Cal.com
- Email placeholder
- Mentions légales (placeholder)

---

### 2. `/a-propos` — Page À propos / Mon parcours

Structure narrative inspirée du storytelling de Maxime Frost (maximefrost.fr/a-propos-de-maxime-frost) :

- Intro directe et humaine — qui est Alex, d'où il vient
- Background sportif : ~20 ans de tennis, puis 10 ans running/trail/triathlon/Hyrox
- Le burnout comme point de bascule fondateur — la prise de conscience
- La découverte des 3 piliers (respiration, mental, froid) comme réponse concrète
- La décision de coacher : "performer autrement, sans ajouter plus"
- Les certifications comme légitimation (Oxygen Advantage®, Inspire®, ECO2A®)
- CTA fin de page : Réserver un appel découverte

Tous les textes sont des **placeholders bien rédigés** à partir des éléments ci-dessus — Alex les remplacera ensuite.

---

### 3. `/services` — Page Services / Offres

Trois offres distinctes à présenter en cards ou sections :

**Offre 1 — Séance découverte / Bilan initial**

- Pour qui : tout profil
- Format : appel 45 min
- CTA : Réserver sur Cal.com

**Offre 2 — Accompagnement individuel**

- Suivi sur mesure combinant les 3 piliers
- Durée : programme de X semaines (placeholder)
- Pour : athlètes, entrepreneurs, étudiants

**Offre 3 — Ateliers / Interventions collectives**

- Format groupe ou entreprise
- Thèmes : gestion du stress, récupération, performance mentale
- CTA : Nous contacter

Section certifications en bas : logos ou badges texte pour Oxygen Advantage®, Inspire®, ECO2A®

---

### 4. `/contact` — Page Contact

- Formulaire simple : Prénom, Nom, Email, Message, bouton Envoyer (formulaire statique pour l'instant — `mailto:` ou simple UI sans backend)
- Lien Cal.com prominent : "Préférez réserver directement un appel ?"
- Lien Instagram : @alex_mindflow
- Pas d'adresse physique requise

---

## Direction design

### Philosophie

Minimaliste, moderne, distinctif. **Pas de design générique IA** — pas d'Inter/Roboto, pas de purple gradients, pas de layouts prévisibles.

### Couleurs

- Fond principal : blanc cassé ou gris très clair `#F7F6F4`
- Typographie principale : noir profond `#0D0D0D`
- Accent primaire : teal/cyan sophistiqué `#0A8F8F` (ou variante plus sombre selon le rendu)
- Accent secondaire : rouge précis `#E8001D` — utilisé avec parcimonie (hover, indicateurs)
- Surfaces légères : gris pâle `#EEEDE9`

### Typographie

Choisir une paire distinctive et non générique :

- Display/titres : quelque chose de fort avec du caractère — ex. **Syne**, **Cabinet Grotesk**, **Clash Display**, ou similaire (via Google Fonts ou Fontsource)
- Corps : quelque chose de lisible mais pas banal — ex. **DM Sans**, **Plus Jakarta Sans**, **Instrument Sans**

### Layout & composition

- Grilles asymétriques sur la home
- Généreux espace négatif
- Éléments qui cassent la grille subtilement
- Sections avec des séparations non conventionnelles (diagonale légère, dégradé de fond subtil)

### Animations (Framer Motion)

- Staggered reveal au scroll pour les sections
- Fade + slide-up sur les cards piliers
- Hover states sur les CTA et cards — élévation subtile ou changement de couleur
- Pas d'animations lourdes — fluidité avant tout

### Composants visuels

- Placeholder photo Alex : rectangle avec ratio portrait, fond gris `#CCCCCC`, initiales "AZ" centrées en typographie display
- Icônes piliers : utiliser **Lucide React** (déjà dans l'écosystème Next.js)
- Pas d'images stock — placeholders propres uniquement

---

## Navigation

- Header fixe, fond blanc/transparent avec blur au scroll
- Logo textuel "Alex MindFlow" à gauche
- Liens : Accueil / La méthode / Services / À propos / Contact
- CTA "Réserver un appel" à droite — bouton teal
- Mobile : hamburger menu avec drawer

---

## Contenu textuel (guidelines)

Tous les textes doivent être rédigés en **français**, dans un registre :

- Direct, humain, sans jargon marketing creux
- Affirmatif sans arrogance
- Qui s'adresse à "toi" (tutoiement naturel) pour les athlètes/grand public, "vous" pour la section entreprises
- Pas d'emojis, pas de bullet points decoratifs dans le corps du texte
- Phrases courtes et percutantes dans les sections hero/CTA

Accroche hero suggérée (placeholder) :

> "Performer autrement. Sans s'épuiser davantage."

Sous-accroche :

> "Alex MindFlow combine respiration fonctionnelle, préparation mentale et thérapie par contraste pour t'aider à atteindre ton plein potentiel — durablement."

---

## Instructions techniques importantes

1. Utiliser **Next.js App Router** avec `src/app/` comme structure
2. Chaque page dans son dossier (`/src/app/page.tsx`, `/src/app/a-propos/page.tsx`, etc.)
3. Composants réutilisables dans `/src/components/`
4. Variables CSS globales dans `/src/app/globals.css` pour les couleurs et typographie
5. Le site doit fonctionner avec `next build && next export` (output: 'export' dans next.config.ts)
6. Pas de dépendances inutiles — garder le projet léger
7. Responsive mobile-first obligatoire
8. Accessibilité de base : aria-labels sur les liens, contraste suffisant, focus visible

---

## Livrables attendus

- Structure complète du projet Next.js prête à `npm run dev`
- Les 4 pages entièrement codées avec leur contenu placeholder
- Un `README.md` avec les instructions pour lancer le projet et le builder pour export statique
- Un fichier `.env.example` avec les variables à configurer (ex: email de contact, URL Cal.com)
