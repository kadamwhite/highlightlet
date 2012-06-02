# highlightlet.js

Bookmarklet to add syntax highlighting to files viewed in-browser, using Highlight.js. The script can digest any source code rendered within a single `<pre>` tag, autodetect the language of the code using Highlight.js, apply the Zenburn stylesheet, and append line numbers to the rendered source.

## Usage

[dist/highlight.min.js](https://github.com/kadamwhite/highlightlet/blob/master/dist/highlightlet.min.js) contains a minified version of the bookmarklet source. To install,
* Create a new bookmark in your browser
* Edit the bookmarklet
* Copy the minified, one-line of code (excluding the comments) from `dist/highlightlet.min.js` into the bookmarklet, prepended with `javascript:`

## Why would you do this to yourself?

It seemed useful at the time.