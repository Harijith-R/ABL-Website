# 🏸 Amateur Badminton League (ABL) - Season 5

**Competitive Spirit. Structured Governance.**

Welcome to the official repository for the Amateur Badminton League (Season 5) web platform. This project is a premium, high-performance, interactive multi-page application built to showcase the league's franchises, official governance, and live tournament data. 

All matches for Season 5 are held at the premier **Muthoot Alwin’s Badminton Academy**.

## 🌟 About the League
Founded by **Binu Philip**, the Amateur Badminton League sets the gold standard for professional, team-based badminton competitions. 
- **Season 5 Organizing Committee:** Harijith, Siyad, and Ajas.
- **Scale:** 8 Elite Franchises | 80 Registered Athletes.
- **Format:** Group Stage → Semi-Finals → Finals.

## 🚀 Key Features
- **Cinematic 3D WebGL Experience (Home):** Features a custom 3D rendering of a Yonex Mavis 350 shuttlecock tied directly to the user's scrollbar for a dynamic storytelling effect.
- **Live Fixtures & Standings Hub:** A dedicated dashboard (`fixtures.html`) featuring interactive, expanding match cards with custom fire CSS animations and live Group A & B points tables.
- **Interactive Particle System:** A procedural, glowing 3D spark/ember background running on an additive blending matrix to complement the fiery ABL theme.
- **The Elite 8 Showcase:** A horizontal, snap-scrolling franchise gallery detailing full rosters and captains for all 8 teams.
- **Official Rulebook Page:** A dedicated, mobile-optimized page (`rules.html`) detailing the full 14-point governance structure, including Regular and Trump match scoring systems.

## 🛠️ Tech Stack & Hosting
This project is a completely front-end application optimized for zero-latency edge delivery.
- **Frontend:** HTML5, CSS3 (Glassmorphism, CSS variables), Vanilla JavaScript (ES6+).
- **3D Graphics:** Three.js (WebGL, GLTFLoader), GSAP & ScrollTrigger.
- **Hosting Pipeline:** Code pushed to **GitHub**, continuously deployed and cached globally via **Cloudflare Pages** at a custom HTTPS subdomain.

## 📁 Repository Structure
```text
📦 ABL-Website
 ┣ 📜 index.html            # Main landing page (3D Engine & Team Rosters)
 ┣ 📜 fixtures.html         # Live dashboard for matches, scores, and standings
 ┣ 📜 rules.html            # Comprehensive 14-point official rulebook
 ┣ 📜 style.css             # Global UI styling and glassmorphism effects
 ┣ 📜 app.js                # Three.js 3D logic and GSAP scroll animations
 ┣ 📜 badminton.glb         # The 3D model file for the shuttlecock
 ┣ 📜 abl_logo.png          # Main ABL Season 5 logo & Favicon
 ┣ 📜 [Team Logos].jpeg     # The 8 Franchise Logos
 ┗ 📜 README.md             # Project documentation
