// Add copy buttons to all code blocks
document.addEventListener('DOMContentLoaded', function() {
  // Find all code blocks
  const codeBlocks = document.querySelectorAll('pre.highlight, div.highlight pre, figure.highlight pre');
  
  codeBlocks.forEach(function(codeBlock) {
    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'code-copy-button-container';
    
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'code-copy-button';
    copyButton.textContent = 'Copy';
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    
    // Add click event
    copyButton.addEventListener('click', function() {
      // Get the code text
      const code = codeBlock.textContent || codeBlock.innerText;
      
      // Copy to clipboard
      navigator.clipboard.writeText(code).then(function() {
        // Success feedback
        copyButton.textContent = 'Copied!';
        copyButton.classList.add('copied');
        
        // Reset after 2 seconds
        setTimeout(function() {
          copyButton.textContent = 'Copy';
          copyButton.classList.remove('copied');
        }, 2000);
      }).catch(function(err) {
        // Error feedback
        copyButton.textContent = 'Failed';
        setTimeout(function() {
          copyButton.textContent = 'Copy';
        }, 2000);
      });
    });
    
    buttonContainer.appendChild(copyButton);
    
    // Insert button before the code block
    const parent = codeBlock.parentElement;
    if (parent.tagName === 'FIGURE' || parent.classList.contains('highlight')) {
      // If wrapped in figure/highlight div, add to that container
      parent.style.position = 'relative';
      parent.insertBefore(buttonContainer, parent.firstChild);
    } else {
      // Otherwise wrap the pre tag
      codeBlock.style.position = 'relative';
      codeBlock.parentNode.insertBefore(buttonContainer, codeBlock);
    }
  });
});
