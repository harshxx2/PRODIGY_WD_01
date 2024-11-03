// Change navbar background color on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrollIndicator = document.getElementById('scroll-indicator');
    
    // Add scrolled class
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  
    // Update scroll indicator
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / windowHeight) * 100;
    scrollIndicator.style.width = scrollPercentage + "%";
    
    // Highlight active link
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      const link = document.querySelector(`a[href="#${section.id}"]`);
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  
  // Smooth scrolling
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Mobile Menu Toggle
  document.getElementById('mobile-menu').addEventListener('click', () => {
    document.querySelector('nav#navbar ul').classList.toggle('show');
  });
  