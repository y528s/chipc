/* CHIPC portal prototype — front-end admin editing demo.
   Demonstrates the editing model for the WordPress build: admins toggle an
   edit mode on the page itself, click any highlighted region and type.
   In this static prototype, saves persist to this browser (localStorage).
   In WordPress the same interaction saves to the database. */
(function () {
  'use strict';

  var KEY = 'chipc-edit:' + location.pathname.split('/').pop();
  var editing = false;

  var regions = Array.prototype.slice.call(document.querySelectorAll('[data-edit]'));
  regions.forEach(function (el, i) { if (!el.dataset.editId) el.dataset.editId = 'e' + i; });

  // Restore any saved edits from this browser
  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    regions.forEach(function (el) {
      if (saved[el.dataset.editId] != null) el.innerHTML = saved[el.dataset.editId];
    });
  } catch (e) { /* ignore corrupt state */ }

  // Build the edit bar + floating toggle
  var bar = document.createElement('div');
  bar.className = 'edit-bar';
  bar.innerHTML =
    '<span>✎ Admin editing is ON — click any outlined text and type. ' +
    'Demo saves to this browser only; the WordPress build saves for everyone.</span>' +
    '<span class="btns">' +
    '<button type="button" class="save">Save changes</button>' +
    '<button type="button" class="reset">Reset page</button>' +
    '</span>';

  var toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'edit-toggle';
  toggle.innerHTML = '<span class="pen">✎</span><span class="lbl">Admin: edit this page</span>';

  document.body.appendChild(bar);
  document.body.appendChild(toggle);

  function setEditing(on) {
    editing = on;
    document.body.classList.toggle('editing', on);
    regions.forEach(function (el) { el.contentEditable = on ? 'true' : 'false'; });
    toggle.querySelector('.lbl').textContent = on ? 'Done editing' : 'Admin: edit this page';
    if (on) bar.scrollIntoView({ block: 'nearest' });
  }

  function flash(msg) {
    var f = document.createElement('div');
    f.className = 'edit-saved-flash';
    f.textContent = msg;
    document.body.appendChild(f);
    setTimeout(function () { f.remove(); }, 2200);
  }

  toggle.addEventListener('click', function () { setEditing(!editing); });

  bar.querySelector('.save').addEventListener('click', function () {
    var out = {};
    regions.forEach(function (el) { out[el.dataset.editId] = el.innerHTML; });
    localStorage.setItem(KEY, JSON.stringify(out));
    flash('✓ Saved — your edits will show on this page in this browser');
  });

  bar.querySelector('.reset').addEventListener('click', function () {
    localStorage.removeItem(KEY);
    location.reload();
  });
})();
