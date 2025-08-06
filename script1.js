// Chocolate animations
function createMeltingEffect(element) {
  const melt = document.createElement("div");
  melt.className = "melt-effect";
  // melt.style.background = `url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/melting-drop.gif') center/contain no-repeat`;
  melt.style.width = "50px";
  melt.style.height = "50px";
  element.appendChild(melt);
  setTimeout(() => melt.remove(), 3000);
}

document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    createMeltingEffect(card);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Create floating chocolate chips
  function createChocoChips() {
    const chips = document.createElement("div");
    chips.className = "choco-chip";
    chips.style.left = Math.random() * 100 + "vw";
    chips.style.animationDuration = Math.random() * 3 + 2 + "s";
    chips.style.opacity = Math.random() * 0.7 + 0.3;
    document.body.appendChild(chips);

    setTimeout(() => {
      chips.remove();
      createChocoChips();
    }, 5000);
  }

  // Create multiple chips
  for (let i = 0; i < 15; i++) {
    setTimeout(createChocoChips, i * 300);
  }
  // Animation for scrolling to sections
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Simple product hover effect enhancement
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const img = this.querySelector("img");
      img.style.transitionDuration = "0.3s";
    });

    card.addEventListener("mouseleave", function () {
      const img = this.querySelector("img");
      img.style.transitionDuration = "0.5s";
    });
  });

  // Testimonial carousel functionality
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll(".testimonial-card");

  function rotateTestimonials() {
    testimonials.forEach((testimonial, index) => {
      testimonial.style.display =
        index === currentTestimonial ? "block" : "none";
    });

    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }

  // Auto-rotate testimonials every 5 seconds
  setInterval(rotateTestimonials, 5000);
});
