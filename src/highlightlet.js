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
  var script = document.createElement('script');
  var link = document.createElement('link');

  // Get the contents of the rendered file
  var code = document.getElementsByTagName('pre')[0].innerHTML;

  // Open the tag to hold the line numbers
  var lineNumbers = '<pre><code style="' + [
    'float:left',
    'margin:0',
    'padding-right:10px',
    'text-align:right',
    'width:40px'
  ].join(';') + '">';

  // Get the line numbers for that rendered source, starting with #1
  for(var i = 1, lines = code.split('\n').length; i < lines + 1; i++) {
    lineNumbers += i + '.\n';
  }

  // Close the lineNumbers tag
  lineNumbers += '</code></pre>';

  // Assemble the final HTML content
  code = lineNumbers + '<pre><code>' + code + '</code></pre>';

  // Out with the old page contents, in with the new
  document.body.innerHTML = code;

  // Add Highlight.js styles & scripts
  link.rel = 'stylesheet';
  link.href = pathRoot + 'styles/zenburn.min.css';
  document.head.appendChild(link);

  script.type = 'text/javascript';
  script.src = pathRoot + 'highlight.min.js';
  document.body.appendChild(script);

  // Initialize highlighting once script is loaded
  script.onload = function() {
    hljs.initHighlighting();
  };
})();
