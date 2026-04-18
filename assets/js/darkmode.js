(function () {
  var STORAGE_KEY = 'mahi-theme';

  function getPreferred() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀' : '☾';
    if (btn) btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  apply(getPreferred());

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.textContent = getPreferred() === 'dark' ? '☀' : '☾';
    btn.title = getPreferred() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    btn.onclick = function () {
      var current = document.documentElement.getAttribute('data-theme');
      apply(current === 'dark' ? 'light' : 'dark');
    };
    document.body.appendChild(btn);
  });
})();
