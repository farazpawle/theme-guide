// The guide's behaviour: search suggestions, the phone page list, light and
// dark mode, "On this page", the look switcher and larger pictures. Every part is optional:
// without this script each page still reads top to bottom.
(function () {
  'use strict';
  var html = document.documentElement;
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  /* ---------- search ---------- */
  var indexUrl = document.currentScript.dataset.index;
  var index = null;
  var loading = null;
  var load = function () {
    if (!loading) {
      loading = fetch(indexUrl)
        .then(function (r) { return r.json(); })
        .then(function (d) { index = d; })
        .catch(function () { index = []; });
    }
    return loading;
  };
  // A short piece of the page text around the first match.
  var snippet = function (text, q) {
    var i = text.toLowerCase().indexOf(q);
    if (i < 0) return '';
    var start = Math.max(0, i - 40);
    var part = text.slice(start, i + q.length + 60);
    var at = part.toLowerCase().indexOf(q);
    return (start ? '…' : '') + esc(part.slice(0, at)) + '<mark>' + esc(part.slice(at, at + q.length)) + '</mark>' + esc(part.slice(at + q.length)) + '…';
  };
  var find = function (q) {
    var hits = [];
    index.forEach(function (p) {
      var inTitle = p.t.toLowerCase().indexOf(q) >= 0;
      var inText = p.c.toLowerCase().indexOf(q) >= 0;
      if (inTitle || inText) hits.push({ p: p, rank: inTitle ? 0 : 1 });
    });
    return hits.sort(function (a, b) { return a.rank - b.rank; }).slice(0, 8);
  };

  var setupSearch = function (input) {
    var box = document.getElementById(input.getAttribute('aria-controls'));
    var run = function () {
      var raw = input.value.trim();
      var q = raw.toLowerCase();
      if (!q) { box.hidden = true; return; }
      load().then(function () {
        if (input.value.trim().toLowerCase() !== q) return;
        var hits = find(q);
        box.innerHTML = hits.length
          ? hits.map(function (h) {
              return '<a href="' + esc(h.p.u) + '"><b>' + esc(h.p.t) + '</b><span>' + (snippet(h.p.c, q) || '') + '</span></a>';
            }).join('')
          : '<p>Nothing matches “' + esc(raw) + '”. Try <button type="button" data-try="color">color</button>, ' +
            '<button type="button" data-try="header">header</button> or <button type="button" data-try="cart">cart</button>, ' +
            'or <a href="' + esc(document.querySelector('.top .btn').href) + '" target="_blank" rel="noopener">ask support</a>.</p>';
        box.hidden = false;
      });
    };
    input.addEventListener('focus', load);
    input.addEventListener('input', run);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { input.value = ''; box.hidden = true; }
      if (e.key === 'Enter') { var first = box.querySelector('a'); if (first) location.href = first.href; }
      if (e.key === 'ArrowDown') { var a = box.querySelector('a'); if (a) { e.preventDefault(); a.focus(); } }
    });
    box.addEventListener('keydown', function (e) {
      var links = Array.prototype.slice.call(box.querySelectorAll('a'));
      var i = links.indexOf(document.activeElement);
      if (e.key === 'ArrowDown' && i < links.length - 1) { e.preventDefault(); links[i + 1].focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); (i > 0 ? links[i - 1] : input).focus(); }
      if (e.key === 'Escape') { box.hidden = true; input.focus(); }
    });
    box.addEventListener('click', function (e) {
      var t = e.target.closest('[data-try]');
      if (t) { input.value = t.dataset.try; run(); input.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.search')) box.hidden = true;
    });
  };

  /* ---------- light and dark ---------- */
  var setModeLabel = function () {
    var dark = html.dataset.mode === 'dark';
    document.querySelectorAll('.mode-t').forEach(function (b) {
      b.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  };

  /* ---------- on this page ---------- */
  var setupToc = function () {
    var toc = document.querySelector('[data-toc]');
    var grid = document.querySelector('[data-grid]');
    var heads = Array.prototype.slice.call(document.querySelectorAll('.doc h2[id]'));
    if (!toc || heads.length < 2) { if (grid) grid.classList.add('no-toc'); return; }
    var links = heads.map(function (h) {
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      toc.appendChild(a);
      return a;
    });
    toc.hidden = false;
    // The current item is the last heading above the top of the screen (the
    // last one at the page end), so it is right after a jump or a reload too.
    var mark = function () {
      var at = -1;
      heads.forEach(function (h, i) { if (h.getBoundingClientRect().top <= 96) at = i; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) at = heads.length - 1;
      links.forEach(function (a, i) { a.classList.toggle('on', i === at); });
    };
    var busy = false;
    var queue = function () {
      if (busy) return;
      busy = true;
      requestAnimationFrame(function () { busy = false; mark(); });
    };
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    window.addEventListener('load', queue);
    mark();
  };

  /* ---------- looks: switcher and missing pictures ---------- */
  var setupLooks = function (box) {
    box.addEventListener('click', function (e) {
      var b = e.target.closest('[data-look]');
      if (!b) return;
      box.querySelectorAll('[data-look]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      box.querySelectorAll('[data-pane]').forEach(function (p) { p.hidden = p.dataset.pane !== b.dataset.look; });
    });
  };
  // A screenshot not taken yet shows a plain box instead of a broken picture.
  var markMissing = function (img) {
    var box = document.createElement('div');
    box.className = 'missing';
    box.setAttribute('role', 'img');
    box.setAttribute('aria-label', img.alt);
    box.textContent = 'Picture coming soon';
    (img.closest('.zoom-btn') || img).replaceWith(box);
  };

  /* ---------- pictures open larger ---------- */
  var zoom = null;
  var setupZoom = function (img) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'zoom-btn';
    btn.setAttribute('aria-label', 'Open larger: ' + img.alt);
    img.replaceWith(btn);
    btn.appendChild(img);
    btn.addEventListener('click', function () {
      if (!zoom) {
        zoom = document.createElement('dialog');
        zoom.className = 'zoom';
        zoom.setAttribute('aria-label', 'Larger picture');
        zoom.innerHTML = '<button class="ib" type="button" data-close aria-label="Close"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button><img alt="">';
        document.body.appendChild(zoom);
      }
      var big = zoom.querySelector('img');
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      zoom.showModal();
    });
  };

  /* ---------- clip covers ---------- */
  // A poster attribute is always fetched at once, so covers wait in
  // data-poster until the clip comes near the screen.
  var setupCovers = function () {
    var clips = document.querySelectorAll('video[data-poster]');
    var set = function (v) { v.poster = v.dataset.poster; v.removeAttribute('data-poster'); };
    if (!('IntersectionObserver' in window)) { clips.forEach(set); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { set(en.target); io.unobserve(en.target); } });
    }, { rootMargin: '600px 0px' });
    clips.forEach(function (v) { io.observe(v); });
  };

  document.addEventListener('DOMContentLoaded', function () {
    setupCovers();
    document.querySelectorAll('[data-search]').forEach(setupSearch);
    setModeLabel();
    setupToc();
    document.querySelectorAll('[data-looks]').forEach(setupLooks);
    document.querySelectorAll('.shot img').forEach(function (img) {
      setupZoom(img);
      if (img.complete && !img.naturalWidth) markMissing(img);
      else img.addEventListener('error', function () { markMissing(img); });
    });

    document.addEventListener('click', function (e) {
      var open = e.target.closest('[data-open]');
      if (open) { document.getElementById(open.dataset.open).showModal(); return; }
      if (e.target.closest('[data-close]')) { e.target.closest('dialog').close(); return; }
      if (e.target.tagName === 'DIALOG') e.target.close();
      if (e.target.closest('.mode-t')) {
        html.dataset.mode = html.dataset.mode === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem('guide-mode', html.dataset.mode); } catch (err) {}
        setModeLabel();
      }
    });

    // "/" jumps to the search box that is showing.
    document.addEventListener('keydown', function (e) {
      if (e.key !== '/' || /input|textarea|select/i.test(document.activeElement.tagName)) return;
      var input = Array.prototype.slice.call(document.querySelectorAll('[data-search]')).filter(function (i) { return i.offsetParent; })[0];
      if (input) { e.preventDefault(); input.focus(); }
    });
  });
})();
