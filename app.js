gsap.registerPlugin(ScrollTrigger);

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000000, 0.02);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const keyLight = new THREE.SpotLight(0xffffff, 2);
keyLight.position.set(5, 10, 5);
scene.add(keyLight);
const rimLight = new THREE.DirectionalLight(0x4488ff, 1.5);
rimLight.position.set(-5, 2, -5);
scene.add(rimLight);
const warmLight = new THREE.DirectionalLight(0xffae00, 1);
warmLight.position.set(0, -5, 2);
scene.add(warmLight);


// --- ADD BACKGROUND PARTICLES (Sparks/Fiery Dust) ---
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 800; // Number of sparks
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    // Spread particles randomly across a wide 3D area (30 units wide)
    posArray[i] = (Math.random() - 0.5) * 30; 
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// Create the glowing material
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.04, // Size of the sparks
    color: 0xffae00, // Golden/Fiery orange to match your ABL theme
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending, // This makes them glow like fire
    depthWrite: false // Ensures particles behind the shuttlecock look correct
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);
// ----------------------------------------------------


// LOAD THE REAL 3D MODEL (.GLB)
const shuttleGroup = new THREE.Group();
scene.add(shuttleGroup);

const loader = new THREE.GLTFLoader();

// Make sure 'badminton.glb' is in the exact same folder as index.html
loader.load(
    'badminton.glb',
    function (gltf) {
        const model = gltf.scene;
        
        // Scale the model up or down here if it looks too big/small (e.g., 0.5 or 5.0)
        model.scale.set(25, 25, 25); 

        // Center the geometry
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        shuttleGroup.add(model);
    },
    undefined,
    function (error) {
        console.error('Error loading the 3D model:', error);
    }
);

// Animations
let tl = gsap.timeline({
    scrollTrigger: { trigger: ".content-wrapper", start: "top top", end: "bottom bottom", scrub: 1 }
});

tl.to(shuttleGroup.position, { x: 3.5, y: 1, z: -2 }, "scene1")
  .to(shuttleGroup.rotation, { x: 1.2, y: 2.5, z: 0.5 }, "scene1")
  .to(shuttleGroup.position, { x: 0, y: -2, z: -5 }, "scene2")
  .to(shuttleGroup.rotation, { x: 3.5, y: 4, z: 1 }, "scene2")
  .to(shuttleGroup.position, { x: -4, y: 0, z: -3 }, "scene3")
  .to(shuttleGroup.rotation, { x: 0.5, y: 5.5, z: -0.5 }, "scene3")
  .to(shuttleGroup.position, { x: 0, y: -1, z: 3.5 }, "scene4")
  .to(shuttleGroup.rotation, { x: 0, y: 6.5, z: 0 }, "scene4");

// Render Loop
const clock = new THREE.Clock();
function animate() {
    const elapsedTime = clock.getElapsedTime();
    requestAnimationFrame(animate);
    
    // Constant floating motion for the shuttlecock
    shuttleGroup.position.y += Math.sin(elapsedTime * 1.5) * 0.002;
    shuttleGroup.rotation.y += 0.001; 
    
    // Slowly rotate the entire particle field so the sparks drift!
    particlesMesh.rotation.y = elapsedTime * 0.03;
    particlesMesh.rotation.x = elapsedTime * 0.01;

    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});