// Typewriter
const text = "Programmer | Dreamer | Future Computer Scientist";
let i = 0;
const target = document.getElementById("typing");

function type() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
window.onload = type;

// Scroll Fade-in
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(f => observer.observe(f));
