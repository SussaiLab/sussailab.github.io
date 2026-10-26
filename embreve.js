/* SussaiLab – MODO "EM BREVE" (antes do lançamento)
   Site completo no ar (login, 4 programas, cenas, vídeos), mas SEM programas para baixar e SEM venda:
   • botões de download (.zip) e de compra mostram "Lançamento em breve" + "Quero ser avisado".
   Para lançar: subir o site normal (2de6) com os programas – este arquivo deixa de existir. */
(function () {
  'use strict';
  var LG = String(document.documentElement.lang || 'pt').slice(0, 2).toLowerCase();
  var T = {
    pt: { bt: '🚀 Lançamento em breve', h: '🚀 Lançamento em breve!', p: 'O <b>SussaiLab CLP</b> está na reta final (registro do software no INPI). Os downloads e as licenças serão liberados em poucos dias.', av: '🔔 Quero ser avisado', ok: '✔ Pronto! Você recebe um e-mail no lançamento.', ja: '✔ Você já está na lista – avisaremos no lançamento.', login: 'Entre com a sua conta Google para ser avisado:', entrar: 'Entrar', fechar: 'Fechar', err: 'Não foi possível agora. Tente de novo.', faixa: '🚀 <b>Lançamento em breve</b> – conheça tudo e seja avisado. Downloads e licenças liberados em poucos dias.' },
    en: { bt: '🚀 Launching soon', h: '🚀 Launching soon!', p: '<b>SussaiLab CLP</b> is in the final stretch (software registration). Downloads and licenses will be released in a few days.', av: '🔔 Notify me', ok: '✔ Done! You will get an e-mail at launch.', ja: '✔ You are already on the list – we will let you know.', login: 'Sign in with your Google account to be notified:', entrar: 'Sign in', fechar: 'Close', err: 'Could not do it now. Try again.', faixa: '🚀 <b>Launching soon</b> – explore everything and get notified. Downloads and licenses in a few days.' },
    es: { bt: '🚀 Lanzamiento pronto', h: '🚀 ¡Lanzamiento pronto!', p: '<b>SussaiLab CLP</b> está en la recta final (registro del software). Las descargas y licencias se liberarán en pocos días.', av: '🔔 Quiero que me avisen', ok: '✔ ¡Listo! Recibirá un correo en el lanzamiento.', ja: '✔ Ya está en la lista – le avisaremos.', login: 'Entre con su cuenta Google para recibir el aviso:', entrar: 'Entrar', fechar: 'Cerrar', err: 'No fue posible ahora. Intente de nuevo.', faixa: '🚀 <b>Lanzamiento pronto</b> – conozca todo y reciba el aviso. Descargas y licencias en pocos días.' }
  }[LG] || null;
  var X = T || { bt: '🚀 Em breve', h: '🚀 Em breve', p: '', av: '🔔', ok: '✔', ja: '✔', login: '', entrar: 'Entrar', fechar: 'Fechar', err: '!', faixa: '🚀' };
  var SUF = LG === 'en' ? '-en' : LG === 'es' ? '-es' : '';
  var SEL = 'a[href$=".zip"],[data-plano],#cqp,#cqc,#cEnviar,.btn-comprar';
  function css() {
    if (document.getElementById('ebCss')) return;
    var s = document.createElement('style'); s.id = 'ebCss';
    s.textContent = '.eb-faixa{position:relative;z-index:40;background:linear-gradient(90deg,#9e6a03,#d29922);color:#111;text-align:center;font-size:14px;padding:8px 14px}' +
      '.eb-bt{opacity:.92;filter:saturate(.6)}' +
      '#ebModal{position:fixed;inset:0;z-index:9999;background:rgba(3,8,16,.8);display:flex;align-items:center;justify-content:center;font-family:Segoe UI,Arial,sans-serif}' +
      '#ebModal .bx{background:#111a24;color:#e6edf3;border:1px solid #d29922;border-radius:16px;max-width:440px;width:92%;padding:24px 26px;text-align:center;box-shadow:0 20px 60px #000c}' +
      '#ebModal h2{margin:0 0 8px;font-size:22px}#ebModal p{color:#c9d1d9;line-height:1.5;margin:0 0 14px}' +
      '#ebModal button,#ebModal a.b{display:inline-block;border:0;border-radius:10px;padding:10px 18px;font-weight:800;font-size:15px;cursor:pointer;margin:4px;text-decoration:none}' +
      '#ebModal .av{background:#d29922;color:#111}#ebModal .fe{background:#30363d;color:#fff}#ebModal .ms{min-height:20px;font-weight:700;margin-top:8px}';
    document.head.appendChild(s);
  }
  function fechar() { var m = document.getElementById('ebModal'); if (m) m.remove(); }
  function modal() {
    css(); fechar();
    var c = window.SussaiConta && SussaiConta.conta ? SussaiConta.conta() : null;
    var d = document.createElement('div'); d.id = 'ebModal';
    d.innerHTML = '<div class="bx" role="dialog"><h2>' + X.h + '</h2><p>' + X.p + '</p>' +
      (c ? '<button class="av" id="ebAv">' + X.av + '</button>' : '<p style="font-size:13px">' + X.login + '</p><button class="av" id="ebEntrar">' + X.entrar + '</button>') +
      '<button class="fe" id="ebFe">' + X.fechar + '</button><div class="ms" id="ebMs"></div></div>';
    document.body.appendChild(d);
    d.addEventListener('click', function (e) { if (e.target === d) fechar(); });
    document.getElementById('ebFe').onclick = fechar;
    var en = document.getElementById('ebEntrar');
    if (en) en.onclick = function () { fechar(); SussaiConta.entrar(modal); };
    var av = document.getElementById('ebAv');
    if (av) av.onclick = function () {
      av.disabled = true;
      SussaiConta.post({ acao: 'avisar', email: c.email, programa: 'clp', lang: LG }).then(function (r) {
        var m = document.getElementById('ebMs');
        if (r && r.ok) { m.textContent = r.ja ? X.ja : X.ok; m.style.color = '#56d364'; } else { av.disabled = false; m.textContent = X.err; m.style.color = '#ff7b72'; }
      }, function () { av.disabled = false; var m = document.getElementById('ebMs'); m.textContent = X.err; m.style.color = '#ff7b72'; });
    };
  }
  // qualquer clique em download/compra → "Em breve" (fase de captura: chega antes do home.js)
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target.closest(SEL) : null;
    if (!t) return;
    e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    modal();
  }, true);
  document.addEventListener('submit', function (e) { var f = e.target; if (f && f.querySelector && f.querySelector('#cPlano')) { e.preventDefault(); e.stopPropagation(); modal(); } }, true);
  function marcar() {
    css();
    var L = document.querySelectorAll('a[href$=".zip"]');
    for (var i = 0; i < L.length; i++) { L[i].textContent = X.bt; L[i].classList.add('eb-bt'); L[i].removeAttribute('download'); L[i].setAttribute('href', '#embreve'); L[i].setAttribute('data-eb', '1'); }
    if (!document.querySelector('.eb-faixa') && document.body) {
      var f = document.createElement('div'); f.className = 'eb-faixa'; f.innerHTML = X.faixa; document.body.insertBefore(f, document.body.firstChild);
    }
  }
  SEL += ',[data-eb]';
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', marcar); else marcar();
  window.SussaiEmBreve = { modal: modal, marcar: marcar };
})();
