/* ============================================
   NEST - Portfolio Detail Page
   Data Loading, Gallery, Lightbox, Before/After
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===== Load Project Data =====
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = parseInt(urlParams.get('id')) || 1;

  fetch('data/projects.json')
    .then(res => res.json())
    .then(data => {
      const project = data.projects.find(p => p.id === projectId);
      if (project) {
        renderProject(project, data.projects);
      }
    })
    .catch(err => {
      console.error('Failed to load project data:', err);
    });

  function renderProject(project, allProjects) {
    // Update page title
    document.title = `NEST - ${project.title}`;

    // Hero
    const heroImg = document.getElementById('projectHeroImg');
    if (heroImg && project.images.length > 0) {
      heroImg.src = project.images[0].url;
      heroImg.alt = project.title;
    }

    setText('projectCategory', project.category);
    setText('projectTitle', project.title);
    setText('projectLocation', project.location);

    // Description
    setText('projectDescription', project.fullDescription);
    setText('projectConcept', project.concept);

    // Highlights
    const highlightsList = document.getElementById('projectHighlights');
    if (highlightsList && project.highlights) {
      highlightsList.innerHTML = project.highlights
        .map(h => `<li>${h}</li>`)
        .join('');
    }

    // Materials
    const materialsContainer = document.getElementById('projectMaterials');
    if (materialsContainer && project.materials) {
      materialsContainer.innerHTML = project.materials
        .map(m => `<span class="material-tag">${m}</span>`)
        .join('');
    }

    // Info Box
    setText('infoCategory', project.category);
    setText('infoLocation', project.location);
    setText('infoArea', project.area);
    setText('infoDuration', project.duration);
    setText('infoDate', project.completedDate);

    // Colors
    const colorsContainer = document.getElementById('infoColors');
    if (colorsContainer && project.colors) {
      colorsContainer.innerHTML = project.colors
        .map(c => `<div class="color-swatch" style="background-color: ${c.code};" title="${c.name}"></div>`)
        .join('');
    }

    // Gallery
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid && project.images) {
      galleryGrid.innerHTML = project.images
        .map((img, idx) => `
          <div class="gallery-item" data-index="${idx}">
            <img src="${img.url}" alt="${img.title}" loading="lazy">
            <div class="gallery-item-overlay">
              <h4>${img.title}</h4>
              <p>${img.description}</p>
            </div>
          </div>
        `)
        .join('');

      // Setup lightbox
      setupLightbox(project.images);
    }

    // Before/After
    const beforeImg = document.getElementById('beforeImg');
    const afterImg = document.getElementById('afterImg');
    if (beforeImg) beforeImg.src = project.beforeImage;
    if (afterImg) afterImg.src = project.afterImage;

    // Setup Before/After slider
    setupBeforeAfter();

    // Navigation
    setupProjectNav(project, allProjects);
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el && text) el.textContent = text;
  }

  // ===== Lightbox =====
  function setupLightbox(images) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    let currentIndex = 0;

    // Open lightbox
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        currentIndex = parseInt(item.getAttribute('data-index'));
        showImage(currentIndex);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Navigate
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      }
      if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      }
    });

    function showImage(index) {
      lightboxImg.src = images[index].url;
      lightboxImg.alt = images[index].title;
      lightboxCaption.textContent = `${images[index].title} - ${images[index].description}`;
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // ===== Before/After Slider =====
  function setupBeforeAfter() {
    const slider = document.getElementById('baSlider');
    const handle = document.getElementById('baHandle');
    const beforeDiv = document.querySelector('.ba-before');

    if (!slider || !handle || !beforeDiv) return;

    let isDragging = false;

    function updateSlider(x) {
      const rect = slider.getBoundingClientRect();
      let position = (x - rect.left) / rect.width;
      position = Math.max(0.05, Math.min(0.95, position));

      beforeDiv.style.clipPath = `inset(0 ${(1 - position) * 100}% 0 0)`;
      handle.style.left = `${position * 100}%`;
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        e.preventDefault();
        updateSlider(e.clientX);
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch events
    slider.addEventListener('touchstart', (e) => {
      isDragging = true;
      updateSlider(e.touches[0].clientX);
    });

    slider.addEventListener('touchmove', (e) => {
      if (isDragging) {
        e.preventDefault();
        updateSlider(e.touches[0].clientX);
      }
    });

    slider.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  // ===== Project Navigation =====
  function setupProjectNav(project, allProjects) {
    const prevLink = document.getElementById('prevProject');
    const nextLink = document.getElementById('nextProject');
    const prevTitle = document.getElementById('prevTitle');
    const nextTitle = document.getElementById('nextTitle');

    if (project.prevProjectId) {
      const prevProject = allProjects.find(p => p.id === project.prevProjectId);
      if (prevProject && prevLink && prevTitle) {
        prevLink.href = `portfolio.html?id=${prevProject.id}`;
        prevTitle.textContent = prevProject.title;
      }
    } else if (prevLink) {
      prevLink.classList.add('hidden');
    }

    if (project.nextProjectId) {
      const nextProject = allProjects.find(p => p.id === project.nextProjectId);
      if (nextProject && nextLink && nextTitle) {
        nextLink.href = `portfolio.html?id=${nextProject.id}`;
        nextTitle.textContent = nextProject.title;
      }
    } else if (nextLink) {
      nextLink.classList.add('hidden');
    }
  }

});
