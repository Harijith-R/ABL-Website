# 🏸 Amateur Badminton League (ABL) - Season 5

**Competitive Spirit. Structured Governance.**

Welcome to the official repository for the Amateur Badminton League (Season 5) web platform. This project is a premium, high-performance, interactive single-page application built to showcase the league's franchises, official governance, and live tournament data. 

All matches for Season 5 are held at the premier **Muthoot Alwin’s Badminton Academy**.

## 🌟 About the League
Founded by **Binu Philip**, the Amateur Badminton League sets the gold standard for professional, team-based badminton competitions. 
* **Season 5 Organizing Committee:** Harijith, Siyad, and Ajas.
* **Scale:** 8 Elite Franchises | 80 Registered Athletes.
* **Format:** Group Stage → Semi-Finals → Finals.

## 🚀 Key Features
* **Cinematic 3D WebGL Experience:** Features a custom 3D rendering of a Yonex Mavis 350 shuttlecock tied directly to the user's scrollbar for a dynamic storytelling effect.
* **Interactive Particle System:** A procedural, glowing 3D spark/ember background running on an additive blending matrix to complement the fiery ABL theme.
* **Glassmorphism UI:** Sleek, frosted-glass interface elements designed to overlay seamlessly atop the 3D canvas.
* **The Elite 8 Showcase:** A horizontal, snap-scrolling franchise gallery detailing full rosters and captains for all 8 teams.
* **Governance Dashboard:** A clean, grid-based breakdown of the official ABL Season 5 rules, including Regular and Trump match scoring systems.

## 🛠️ Tech Stack
This project is completely front-end and uses zero external frameworks (like React or Vue) to ensure lightning-fast load times.
* **HTML5 & CSS3** (Custom Grid/Flexbox layouts, CSS variables, backdrop-filters)
* **Vanilla JavaScript** (ES6+)
* **Three.js** (WebGL 3D rendering, GLTFLoader, procedural particle generation)
* **GSAP (GreenSock) & ScrollTrigger** (High-performance scroll-linked timeline animations)

## 📁 Repository Structure
```text
📦 ABL-Website
 ┣ 📜 index.html            # Main HTML structure
 ┣ 📜 style.css             # UI styling and glassmorphism effects
 ┣ 📜 app.js                # Three.js 3D logic and GSAP scroll animations
 ┣ 📜 badminton.glb         # The 3D model file for the shuttlecock
 ┣ 📜 abl_logo.png          # Main ABL Season 5 logo
 ┣ 📜 Racket Riders.jpeg    # Franchise Logo
 ┣ 📜 TEAM SMASHERS.jpeg    # Franchise Logo
 ┣ 📜 The Defenders.jpeg    # Franchise Logo
 ┣ 📜 SPARTANS.jpeg         # Franchise Logo
 ┣ 📜 Rising Stars.jpeg     # Franchise Logo
 ┣ 📜 SHUTTLE KINGS.jpeg    # Franchise Logo
 ┣ 📜 THUNDERBOLT.jpeg      # Franchise Logo
 ┗ 📜 Shuttle Stormers.jpeg # Franchise Logo

```

## 💻 How to Run Locally (Important)

Because this project utilizes a 3D model (`.glb` file), simply double-clicking the `index.html` file will result in a blank screen due to strict browser **CORS (Cross-Origin Resource Sharing) security policies**.

To run this site on your local machine, you must use a Local Web Server:

**Method 1: Using VS Code (Recommended)**

1. Open this folder in Visual Studio Code.
2. Install the **"Live Server"** extension by Ritwick Dey.
3. Right-click `index.html` and select **"Open with Live Server"**.

**Method 2: Using Mac/Linux Terminal (Python)**

1. Open your terminal and navigate to the project folder.
2. Run the command: `python3 -m http.server 8000`
3. Open your browser and go to `http://localhost:8000`

## 🔜 Upcoming Roadmap (Phase 2)

* Global sticky navigation bar.
* Official downloadable PDF Rulebook integration.
* Live "Fixtures & Results" Hub.
* Dynamic Group A and Group B point standings tables.

---

*Built with passion for ABL Season 5.*