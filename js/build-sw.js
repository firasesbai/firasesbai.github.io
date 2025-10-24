const { generateSW } = require('workbox-build');
const workboxConfig = require('../workbox-config');

generateSW(workboxConfig).then(({ count, size, warnings }) => {
  if (warnings.length > 0) {
    console.warn(
      'Warnings encountered while generating a service worker:',
      warnings.join('\n')
    );
  }

  console.log(`Generated service worker, which will precache ${count} files, totaling ${size} bytes.`);
}).catch((error) => {
  console.error('Service worker generation failed:', error);
  process.exit(1);
});
