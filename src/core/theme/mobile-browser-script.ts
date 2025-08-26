import { SURFACE_DARK, SURFACE_LIGHT } from '@/constants/colors'

// This script sets mobile browsers' background color to match the background color
// of the active theme (light or dark).
export const MOBILE_BROWSER_THEME = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  function updateThemeColor() {
    var isDark = html.classList.contains('dark');
    meta.setAttribute('content', isDark ? '${SURFACE_DARK}' : '${SURFACE_LIGHT}');
  }
  var observer = new MutationObserver(updateThemeColor);
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
  updateThemeColor();
})();`
