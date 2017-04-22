// ==UserScript==
// @run-at document-start
// @name        Bing to duckduckgo
// @namespace   bingtoduckduckgo
// @description redirects bing searches to duck duck go
// @include     http://*.bing.com/search?*
// @include     https://*.bing.com/search?*
// @version     1
// @grant       none
// ==/UserScript==

var newurl = "https://duckduckgo.com/?"+document.URL.match(/q\=[^&]*/);
if (newurl != document.URL) location.replace(newurl);