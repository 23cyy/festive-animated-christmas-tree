/* --- Christmas script--- */
const colors = [
  "#ff3333",
  "#33ff33",
  "#ffff33",
  "#ff69b4",
  "#33ffff",
  "#ff8c00",
  "#ff00ff",
];

const treeContainer = document.querySelector(".tree-container");
const treeHeight = 400;
const numLights = 70;

// Create lights
for (let i = 0; i < numLights; i++) {
  const light = document.createElement("div");
  light.className = "light";

  const angle = (i / numLights) * Math.PI * 10;
  const radius = 150 * (1 - i / numLights);
  const height = i * (treeHeight / numLights);

  const x = Math.cos(angle) * radius + 150;
  const y = treeHeight - height;

  light.style.left = `${x}px`;
  light.style.top = `${y}px`;
  light.style.backgroundColor = colors[i % colors.length];
  light.style.animationDelay = `${(i / numLights) * 2}s`;
  light.style.boxShadow = `0 0 15px ${colors[i % colors.length]}`;

  treeContainer.appendChild(light);
}

// Create white glow particles
for (let i = 0; i < 30; i++) {
  const particle = document.createElement("div");
  particle.className = "glow-particle";

  // Random size between 3 and 8 pixels
  const size = Math.random() * 5 + 3;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Position particles around the tree
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 100 + 50; // 50-150px from center
  const x = Math.cos(angle) * distance + 150;
  const y = Math.random() * 400; // Along tree height

  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // Add random animation delay
  particle.style.animationDelay = `${Math.random() * 2}s`;

  // Add random blur effect
  particle.style.filter = `blur(${Math.random() * 2}px)`;

  treeContainer.appendChild(particle);
}

// Click interaction for lights
treeContainer.addEventListener("click", () => {
  const lights = document.querySelectorAll(".light");
  lights.forEach((light, index) => {
    light.style.backgroundColor = colors[(index + 1) % colors.length];
    light.style.boxShadow = `0 0 15px ${colors[(index + 1) % colors.length]}`;
    light.style.transform = "scale(1.5)";
    setTimeout(() => {
      light.style.transform = "scale(1)";
    }, 300);
  });
});

// Random light twinkle effect
setInterval(() => {
  const lights = document.querySelectorAll(".light");
  const randomLight = lights[Math.floor(Math.random() * lights.length)];
  randomLight.style.transform = "scale(1.5)";
  setTimeout(() => {
    randomLight.style.transform = "scale(1)";
  }, 200);
}, 100);

// --- Snow effect ---
function createSnow() {
  const snow = document.createElement("div");
  snow.className = "snow";
  // Random horizontal start position
  snow.style.left = `${Math.random() * 100}vw`;
  // Random opacity for subtle variation
  snow.style.opacity = Math.random();
  // Random fall duration between 2s and 5s
  snow.style.animationDuration = `${Math.random() * 3 + 2}s`;

  document.body.appendChild(snow);

  snow.addEventListener("animationend", () => {
    snow.remove();
  });
}

const message = document.querySelector(".message");

setInterval(() => {
  message.style.transform = `translateX(-50%) translateY(${Math.random() * 10 - 5}px)`;
}, 500);


// Continuously create snowflakes every 150ms
setInterval(createSnow, 150);
