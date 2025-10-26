// Only trigger if service workers are supported in browser.
if ('serviceWorker' in navigator) {
  // Wait until window is loaded before registering.
  window.addEventListener('load', () => {
    // Register the service worker with "/" as its scope.
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(registration => {
        console.debug('Service Worker registered with scope:', registration.scope);

        registration.addEventListener('updatefound', () => {
          console.debug('Service Worker update found');
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            console.debug('Service Worker state changed to:', newWorker.state);
          });
        });
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
