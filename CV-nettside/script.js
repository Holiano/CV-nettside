// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ============================================
// COOL BUTTON EFFECTS
// ============================================

const coolButtons = document.querySelectorAll(".btn-cool");

coolButtons.forEach((btn) => {
  // Hover ripple effect
  btn.addEventListener("mouseenter", function (e) {
    this.style.position = "relative";
    createRipple(e, this);
  });

  // Track mouse position for potential future effects
  btn.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.style.setProperty("--mouse-x", x + "px");
    this.style.setProperty("--mouse-y", y + "px");
  });

  // Click particle effect
  btn.addEventListener("click", function (e) {
    createParticleEffect(e, this);
  });
});

/**
 * Creates a ripple effect emanating from click point
 */
function createRipple(e, btn) {
  const ripple = document.createElement("span");
  const rect = btn.getBoundingClientRect();

  // Calculate ripple size based on button dimensions
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  // Style the ripple
  ripple.style.position = "absolute";
  ripple.style.width = size + "px";
  ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.classList.add("ripple");

  btn.appendChild(ripple);

  // Remove ripple after animation completes
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

/**
 * Creates particle burst effect on click
 */
function createParticleEffect(e, btn) {
  // Determine particle color based on button type
  const isSecondaryBtn = btn.classList.contains("btn-secondary");
  const isGithubBtn = btn.classList.contains("btn-github");

  let particleColor;
  if (isSecondaryBtn) {
    particleColor = "rgba(0, 255, 65, 0.8)"; // Green particles
  } else if (isGithubBtn) {
    particleColor = "rgba(255, 255, 255, 0.8)"; // White particles
  } else {
    particleColor = "rgba(0, 255, 65, 0.8)"; // Green particles for primary
  }

  // Create 5 particles
  const particleCount = 5;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("button-particle");

    // Position particle at click point
    const rect = btn.getBoundingClientRect();
    particle.style.position = "absolute";
    particle.style.left = e.clientX - rect.left + "px";
    particle.style.top = e.clientY - rect.top + "px";
    particle.style.background = particleColor;
    particle.style.borderRadius = "50%";
    particle.style.width = "8px";
    particle.style.height = "8px";
    particle.style.pointerEvents = "none";

    // Calculate trajectory
    const angle = (Math.PI * 2 * i) / particleCount;
    const velocity = 2 + Math.random() * 4;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;

    particle.style.setProperty("--vx", vx);
    particle.style.setProperty("--vy", vy);
    particle.style.animation = "particleFloat 0.6s ease-out forwards";

    btn.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
      particle.remove();
    }, 600);
  }
}

// ============================================
// CARD ANIMATIONS ON SCROLL
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".card, .interest-item").forEach((el) => {
  observer.observe(el);
});

// ============================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ============================================

window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.style.color = "var(--accent)";
    } else {
      link.style.color = "var(--secondary)";
    }
  });
});
