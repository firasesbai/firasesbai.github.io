// Reading Progress Bar
document.addEventListener('DOMContentLoaded', function() {
  // Create progress bar element
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress-bar';
  progressBar.setAttribute('role', 'progressbar');
  progressBar.setAttribute('aria-label', 'Reading progress');
  progressBar.setAttribute('aria-valuemin', '0');
  progressBar.setAttribute('aria-valuemax', '100');
  
  // Insert at top of body
  document.body.insertBefore(progressBar, document.body.firstChild);
  
  // Calculate and update progress
  function updateProgress() {
    // Get scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Get document height minus viewport height
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Calculate percentage
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Update progress bar
    progressBar.style.width = scrollPercent + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(scrollPercent));
  }
  
  // Throttle scroll events for better performance
  let ticking = false;
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateProgress();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Initial update
  updateProgress();
});
