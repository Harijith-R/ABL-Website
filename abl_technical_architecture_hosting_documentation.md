# Amateur Badminton League (ABL) Season 5 
## Technical Architecture & Deployment Documentation
**Author:** Senior Web Developer / Technical Lead  
**Project Status:** Active / Production  

---

### 1. Architectural Overview
The ABL Season 5 web platform is designed as a high-performance, statically delivered web application. Deliberately avoiding heavy JavaScript frameworks (like React or Angular), the architecture relies on a pure Vanilla JS, HTML5, and CSS3 stack. This decision ensures lightning-fast Time to Interactive (TTI), which is crucial for mobile users checking live sports scores, while still supporting a robust 3D WebGL rendering engine on the homepage.

The application is structured into a multi-page ecosystem (`index.html`, `fixtures.html`, `rules.html`) to isolate the heavy 3D rendering pipeline on the landing page from the data-heavy, interaction-focused dashboard pages.

### 2. Frontend Technology Stack
*   **Core Languages:** HTML5, CSS3, ES6+ JavaScript (Vanilla).
*   **3D Engine (WebGL):** `Three.js` (r128) utilized for rendering a custom `.glb` 3D shuttlecock model and a procedural particle system utilizing additive blending matrices.
*   **Animation Engine:** `GSAP` (GreenSock Animation Platform) paired with `ScrollTrigger` to bind the 3D model's rotation and positional vectors directly to the user's scroll timeline.
*   **UI/UX Design Paradigm:** 
    *   **Glassmorphism:** Achieved via `backdrop-filter: blur()` and semi-transparent RGBA backgrounds.
    *   **Hardware Acceleration:** CSS transitions utilizing `transform` and `opacity` to ensure smooth 60fps animations on mobile devices without triggering layout repaints.
    *   **Responsive Data Tables:** Overflow wrappers with touch-scrolling enabled for deep matrix data (scores and group standings) on viewport widths under 768px.

### 3. Hosting & CI/CD Infrastructure
The deployment pipeline is built for zero-downtime, continuous deployment utilizing Git-based version control and edge-network caching.

*   **Version Control:** GitHub (`Harijith-R/ABL-Website`)
*   **Hosting Environment:** GitHub Pages (Static site generation and asset delivery).
*   **Continuous Deployment (CD):** Committing directly to the `main` branch automatically triggers the GitHub Pages build workflow, publishing structural and score updates in under 60 seconds.

### 4. Domain & Edge Network (Cloudflare)
The application utilizes Cloudflare as a reverse proxy, CDN, and DNS provider to secure the custom subdomain and cache assets globally.

*   **Root Domain:** `harijith.com`
*   **Application Subdomain:** `abl.harijith.com`
*   **DNS Resolution:** A `CNAME` record points `abl` to `harijith-r.github.io`.
*   **Security (SSL/TLS):** End-to-end encryption enforced. GitHub provisions the origin Let's Encrypt certificate, while Cloudflare proxies the connection providing edge-level SSL (Full Strict mode).
*   **Caching Strategy:** Cloudflare's edge caching is enabled (Orange Cloud / Proxied). Cache invalidation (Purge Everything) is required only when immediate propagation of aggressive CSS updates is necessary.

### 5. Local Development Environment
Due to strict CORS (Cross-Origin Resource Sharing) policies natively enforced by modern browsers when loading local `.glb` 3D models, the application cannot be executed via the `file://` protocol. 

**Standard Dev Workflow:**
1.  Run a local HTTP server (e.g., Python `python3 -m http.server 8000` or VS Code Live Server).
2.  Test WebGL contexts and CSS breakpoints at `http://localhost:8000`.
3.  Commit verified code to Git to trigger the production build.