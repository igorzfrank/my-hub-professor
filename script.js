const raiosContainer = document.getElementById("raiosSol");
for (let i = 0; i < 20; i++) {
  const raio = document.createElement("div");
  raio.className = "raio";
  raio.style.transform = `translate(-50%, -100%) rotate(${i * 18}deg)`;
  raiosContainer.appendChild(raio);
}

// Partículas flutuantes
const particulasContainer = document.getElementById("particulas");
const simbolos = ["🌸", "🔥", "💧", "⚡", "🦋", "🍃", "✨", "💨", "📖", "🖊️"];
for (let i = 0; i < 20; i++) {
  const particula = document.createElement("span");
  particula.className = "particula";
  particula.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
  particula.style.left = Math.random() * 100 + "%";
  particula.style.animationDuration = 8 + Math.random() * 14 + "s";
  particula.style.animationDelay = Math.random() * 10 + "s";
  particula.style.fontSize = 10 + Math.random() * 16 + "px";
  particulasContainer.appendChild(particula);
}
