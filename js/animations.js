/* ============================================
   NEST - Animations
   Parallax, CountUp, Scroll Effects
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===== Parallax Effect (Hero) =====
  const heroBg = document.querySelector('.hero-bg');

  if (heroBg) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const heroHeight = document.querySelector('.hero').offsetHeight;

          if (scrolled < heroHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ===== Hero Content Fade on Scroll =====
  const heroContent = document.querySelector('.hero-content');

  if (heroContent) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const heroHeight = document.querySelector('.hero').offsetHeight;
      const opacity = 1 - (scrolled / (heroHeight * 0.6));
      const translateY = scrolled * 0.3;

      heroContent.style.opacity = Math.max(0, opacity);
      heroContent.style.transform = `translateY(${translateY}px)`;
    });
  }

  // ===== Count Up Animation =====
  const statNumbers = document.querySelectorAll('.stat-number');

  if (statNumbers.length > 0) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    statNumbers.forEach(el => countObserver.observe(el));
  }

  function animateCount(el) {
    const target = parseFloat(el.getAttribute('data-count'));
    const isDecimal = el.getAttribute('data-decimal') === 'true';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = eased * target;

      if (isDecimal) {
        el.textContent = current.toFixed(1);
      } else {
        el.textContent = Math.floor(current);
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (isDecimal) {
          el.textContent = target.toFixed(1);
        } else {
          el.textContent = target;
        }
      }
    }

    requestAnimationFrame(update);
  }

  // ===== Hero Initial Animation =====
  const heroFadeElements = document.querySelectorAll('.hero .fade-in');

  if (heroFadeElements.length > 0) {
    heroFadeElements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 300 + (i * 200));
    });
  }

});
