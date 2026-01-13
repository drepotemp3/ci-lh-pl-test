import { gsap } from 'gsap';

// Hero animation on load
const animateHero = () => {
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroCta = document.querySelector('.hero-cta');

  if (heroTitle && heroSubtitle && heroCta) {
    gsap.from(heroTitle, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: 'power3.out',
    });

    gsap.from(heroSubtitle, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      delay: 0.2,
      ease: 'power3.out',
    });

    gsap.from(heroCta, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      delay: 0.4,
      ease: 'power3.out',
    });
  }
};

// Feature cards stagger animation
const animateFeatures = () => {
  const featureCards = document.querySelectorAll('.feature-card');

  if (featureCards.length > 0) {
    gsap.from(featureCards, {
      scrollTrigger: {
        trigger: '.features',
        start: 'top 80%',
      },
      duration: 0.6,
      y: 50,
      opacity: 0,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }
};

// Button hover animations
const addButtonAnimations = () => {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1.05,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1,
        ease: 'power2.out',
      });
    });
  });
};

// Initialize animations
const initAnimations = () => {
  animateHero();
  animateFeatures();
  addButtonAnimations();
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}