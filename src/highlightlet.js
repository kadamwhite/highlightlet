// This script is intended to be a bookmarklet which can add syntax highlighting
// to JavaScript and CSS files when they are viewed directly within the browser
// (i.e. not viewed through "view source" or developer tools--Sometimes it's just
// easier to be able to open up somebody's script directly.

// Prepend with "javascript:" to make this function as a bookmarklet
(function(){

  // Base directory for remotely-hosted highlightJS library
  // (see http://softwaremaniacs.org/soft/highlight/en/download/)
  var pathRoot = '//yandex.st/highlightjs/6.2/';

  // Make our DOM elements
  var codeTag = document.createElement('code');
  var preTag = document.createElement('pre');
  var script = document.createElement('script');
  var link = document.createElement('link');

  // Set up our scripts
  link.rel = 'stylesheet';
  link.href = pathRoot + 'styles/zenburn.min.css';
  script.type = 'text/javascript';
  script.src = pathRoot + 'highlight.min.js';

  // Nest a <code> within our <pre> tag
  codeTag.innerHTML = document.getElementsByTagName('pre')[0].innerHTML;
  preTag.appendChild(codeTag);

  // Out with the old
  document.body.removeChild(document.body.firstChild);

  // In with the new
  document.head.appendChild(link);
  document.body.appendChild(preTag);
  document.body.appendChild(script);

  // Initialize highlighting once script is loaded
  script.onload = function() {
    hljs.initHighlighting();
  };
})();
