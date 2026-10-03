(() => {
  'use strict';

  const heading = document.querySelector('#main-screen > h1');
  if (!heading) return;

  const link = document.createElement('a');
  link.textContent = 'Codexに頼む ↗';
  link.href = 'https://mac-mini.tail5039ec.ts.net:9443/';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Codexに頼む（別タブで開きます。Tailscale接続が必要です）');
  link.style.cssText = 'display: inline-block; margin-bottom: 16px; color: #aaa; font-size: 13px; line-height: 1.5; text-decoration: underline; text-underline-offset: 3px;';
  heading.insertAdjacentElement('afterend', link);
})();
