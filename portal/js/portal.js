/* ============================================================
   City & Hackney IPC Portal — shared chrome + demo behaviours
   In WordPress this maps to header.php / footer.php + a small
   theme script. Pages declare their nav position via
   <body data-nav="…"> (home | gp:pathways | ipc:documents | saved …)
   and data-chrome="banner" to get the demo banner only.
   ============================================================ */

(function () {
  var body = document.body;
  var nav = body.getAttribute('data-nav') || '';
  var chromeMode = body.getAttribute('data-chrome') || 'full';
  var navParent = nav.split(':')[0];
  var navChild = nav.split(':')[1] || '';

  /* ---------- Demo banner (all pages) ---------- */
  var banner =
    '<div class="demo-banner">' +
    '<span>&#9888;&#65039; DESIGN DEMO &mdash; pages, links and content are illustrative only, not the real IPC pages.</span>' +
    '<a href="index.html">Demo launcher &rsaquo;</a>' +
    '</div>';

  /* ---------- Header + nav + legend ---------- */
  function navItem(id, html, href, dropdown) {
    var active = navParent === id ? ' is-active' : '';
    return (
      '<div class="nav-item' + active + '">' +
      '<a href="' + href + '">' + html + (dropdown ? ' <span class="caret">&#9660;</span>' : '') + '</a>' +
      (dropdown || '') +
      '</div>'
    );
  }
  function dd(links) {
    var out = '<div class="dropdown">';
    links.forEach(function (l) {
      out += '<a href="' + l.href + '"' + (navChild === l.id ? ' class="is-current"' : '') + '>' +
        (l.lock ? '<span class="lock">&#128274;</span>' : '') + l.label + '</a>';
    });
    return out + '</div>';
  }

  var gpDrop = dd([
    { id: 'pathways', label: 'Pathways', href: 'pathways.html' },
    { id: 'services', label: 'Services', href: 'services.html' },
    { id: 'topics', label: 'Topics', href: 'topics.html' }
  ]);
  var ipcDrop = dd([
    { id: 'bulletins', label: 'Bulletins', href: 'bulletins.html', lock: true },
    { id: 'contracts', label: 'Contracts', href: 'contracts.html', lock: true },
    { id: 'documents', label: 'Documents', href: 'documents.html', lock: true },
    { id: 'policies', label: 'Policies', href: 'policies.html', lock: true },
    { id: 'staffbank', label: 'Staff Bank', href: 'staff-bank.html', lock: true }
  ]);

  var header =
    '<header class="site-header"><div class="container">' +
    '<a class="site-logo" href="home.html"><img src="assets/cipc-logo-white.png" alt="City and Hackney Integrated Primary Care"></a>' +
    '<span class="login-status"><span class="dot"></span>You are logged in</span>' +
    '<nav class="main-nav" aria-label="Main">' +
    navItem('home', 'HOME', 'home.html') +
    navItem('gp', 'GENERAL PRACTICE', 'pathways.html', gpDrop) +
    navItem('ipc', '&#128274; IPC', 'documents.html', ipcDrop) +
    navItem('saved', '&#9734; SAVED', 'saved.html') +
    '</nav>' +
    '<button class="search-toggle" title="Search" aria-label="Search">&#8981;</button>' +
    '</div></header>' +
    '<div class="legend-strip"><b>&#128274; marks content for member practices.</b> Members see everything seamlessly &mdash; you are only asked to log in when you open a locked item.</div>';

  var footer =
    '<footer class="site-footer"><div class="container">' +
    '<span>&copy; 2026 City &amp; Hackney Integrated Primary Care</span>' +
    '<span><a href="#">Privacy</a> &middot; <a href="#">Accessibility</a> &middot; <a href="#">Terms</a> &middot; <a href="admin.html">Back end (demo)</a></span>' +
    '</div></footer>';

  var chromeEl = document.getElementById('site-chrome');
  if (chromeEl) {
    chromeEl.outerHTML = chromeMode === 'banner' ? banner : banner + header;
  }
  var footEl = document.getElementById('site-footer');
  if (footEl && chromeMode !== 'banner') footEl.outerHTML = footer;
  else if (footEl) footEl.outerHTML = '';

  /* Search toggle focuses the page's search input if there is one */
  var toggle = document.querySelector('.search-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var input = document.querySelector('.search-box input');
      if (input) { input.focus(); }
      else { window.location.href = 'home.html#search'; }
    });
  }

  /* ---------- "Admin: edit this page" demo ---------- */
  if (chromeMode !== 'banner' && !body.hasAttribute('data-no-edit')) {
    var btn = document.createElement('button');
    btn.className = 'admin-edit-btn';
    btn.innerHTML = '&#9998; Admin: edit this page';
    document.body.appendChild(btn);

    var toast = null;
    function showToast(msg, ms) {
      if (toast) toast.remove();
      toast = document.createElement('div');
      toast.className = 'edit-toast';
      toast.textContent = msg;
      document.body.appendChild(toast);
      if (ms) setTimeout(function () { if (toast) { toast.remove(); toast = null; } }, ms);
    }

    btn.addEventListener('click', function () {
      var editing = body.classList.toggle('is-editing');
      btn.classList.toggle('is-editing', editing);
      var regions = document.querySelectorAll('[data-editable]');
      regions.forEach(function (r) { r.contentEditable = editing ? 'true' : 'false'; });
      if (editing) {
        btn.innerHTML = '&#10003; Done editing';
        showToast('Editing on — click any highlighted text and type. This is the same page editors see, no separate back end needed.');
      } else {
        btn.innerHTML = '&#9998; Admin: edit this page';
        showToast('Saved. In the real portal this publishes straight to WordPress.', 3200);
      }
    });
  }

  /* ---------- Star toggle (save/unsave demo) ---------- */
  document.addEventListener('click', function (e) {
    var star = e.target.closest && e.target.closest('.star');
    if (star) {
      e.preventDefault();
      var saved = star.classList.toggle('is-saved');
      star.innerHTML = saved ? '\u2605' : '\u2606';
      star.title = saved ? 'Saved' : 'Save';
    }
  });

  /* ---------- Locked-item prompt (demo of the padlock rule) ---------- */
  document.addEventListener('click', function (e) {
    var lockLink = e.target.closest && e.target.closest('[data-locked-demo]');
    if (lockLink) {
      e.preventDefault();
      alert('\uD83D\uDD12 This item is for member practices.\n\nIn the real portal a non-member would be asked to log in here \u2014 members go straight through without noticing.');
    }
  });
})();
