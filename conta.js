/* SussaiLab – conta única do site (rev66m).
   index*.html  (data-sl="hub")    : tela de LOGIN com Google → tela dividida em 4 programas
   páginas      (data-sl="pagina") : só abrem com login; downloads e "avise-me" usam a conta */
(function () {
  'use strict';
  var SRV = 'https://script.google.com/macros/s/AKfycbzUmiNAeX4wbS7guwxjm8zCPOKOhLBbbenZhcpfXmEKk3cpC1--naS5TjsgfWDqY3ggTw/exec', CID = '15890667708-hnm6mo385c0j1ud8om40glo2mf7mor05.apps.googleusercontent.com', TX = {"pt": {"sair": "Sair", "enviando": "Enviando…", "avisoOk": "✔ Pronto! Avisaremos você por e-mail no lançamento.", "avisoJa": "✔ Você já está na lista – avisaremos no lançamento.", "erro": "Não foi possível agora. Tente de novo.", "semNet": "Sem conexão com a internet.", "ola": "Olá, %N! Escolha o programa:", "zapRuim": "WhatsApp inválido. Use DDD + celular, ex.: (11) 98765-4321.", "nomeFalta": "Escreva o seu nome completo.", "erroGoogle": "Não foi possível confirmar a sua conta Google. Entre de novo.", "primeira": "Primeiro acesso: complete o cadastro (só uma vez, vale para todos os programas).", "bemvindo": "Bem-vindo(a), %N!", "conferindo": "Conferindo a sua conta…", "aceite": "Aceite os termos de uso e a política de privacidade.", "semGoogle": "O login do Google não carregou. Verifique a internet ou desative o bloqueador."}, "en": {"sair": "Sign out", "enviando": "Sending…", "avisoOk": "✔ Done! We will e-mail you at launch.", "avisoJa": "✔ You are already on the list – we will let you know at launch.", "erro": "Not possible right now. Try again.", "semNet": "No internet connection.", "ola": "Hi, %N! Choose the program:", "zapRuim": "Invalid WhatsApp. Use area code + mobile, e.g.: (11) 98765-4321.", "nomeFalta": "Type your full name.", "erroGoogle": "Could not confirm your Google account. Sign in again.", "primeira": "First access: complete your sign-up (only once, valid for all programs).", "bemvindo": "Welcome, %N!", "conferindo": "Checking your account…", "aceite": "Accept the terms of use and the privacy policy.", "semGoogle": "Google sign-in did not load. Check the internet or disable the blocker."}, "es": {"sair": "Salir", "enviando": "Enviando…", "avisoOk": "✔ ¡Listo! Le avisaremos por correo en el lanzamiento.", "avisoJa": "✔ Ya está en la lista – le avisaremos en el lanzamiento.", "erro": "No fue posible ahora. Intente de nuevo.", "semNet": "Sin conexión a internet.", "ola": "¡Hola, %N! Elija el programa:", "zapRuim": "WhatsApp inválido. Use código de área + celular, ej.: (11) 98765-4321.", "nomeFalta": "Escriba su nombre completo.", "erroGoogle": "No fue posible confirmar su cuenta de Google. Inicie sesión de nuevo.", "primeira": "Primer acceso: complete el registro (solo una vez, vale para todos los programas).", "bemvindo": "¡Bienvenido(a), %N!", "conferindo": "Verificando su cuenta…", "aceite": "Acepte los términos de uso y la política de privacidad.", "semGoogle": "El inicio de sesión de Google no cargó. Revise internet o desactive el bloqueador."}};
  var LG = String(document.documentElement.lang || 'pt').slice(0, 2).toLowerCase(); if (!TX[LG]) LG = 'pt';
  var X = TX[LG], SUF = LG === 'pt' ? '' : '-' + LG, K = 'sussailab.conta', DIAS = 30;
  function $(id) { return document.getElementById(id); }
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function conta() { try { var c = JSON.parse(localStorage.getItem(K) || 'null'); if (c && c.email && c.exp > Date.now()) return c; } catch (e) { } return null; }
  function guardar(c) { c.exp = Date.now() + DIAS * 864e5; try { localStorage.setItem(K, JSON.stringify(c)); } catch (e) { } }
  function sair() { try { localStorage.removeItem(K); } catch (e) { } try { google.accounts.id.disableAutoSelect(); } catch (e) { } location.href = 'index' + SUF + '.html'; }
  function post(q) { return fetch(SRV, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(q), redirect: 'follow' }).then(function (r) { return r.json(); }); }
  function aqui() { return (location.pathname.split('/').pop() || 'index.html') + (location.hash || ''); }
  function irLogin() { location.replace('index' + SUF + '.html?volta=' + encodeURIComponent(aqui())); }
  function chip() {
    var e = $('slConta'), c = conta(); if (!e) return;
    if (!c) { e.innerHTML = ''; return; }
    e.innerHTML = '<span class="sl-nome" title="' + esc(c.email) + '">👤 ' + esc(c.nome || c.email) + '</span> <a href="#" id="slSair">' + X.sair + '</a>';
    $('slSair').onclick = function (ev) { ev.preventDefault(); sair(); };
  }
  window.SussaiConta = { conta: conta, sair: sair, post: post, lang: LG };
  var modo = document.body.getAttribute('data-sl');
  if (modo === 'cenas' || modo === 'videos') { chip(); return; }   // rev66v: vídeos – página pública                       // rev66u: loja de cenas – vitrine pública

  /* ---------------- páginas dos programas ---------------- */
  if (modo === 'pagina') {
    if (!conta()) { irLogin(); return; }
    chip();
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[download]') : null;
      if (a && !conta()) { e.preventDefault(); irLogin(); }
    }, true);
    var av = $('slAvisar');
    if (av) av.onclick = function () {
      var m = $('slAvisarMsg'); av.disabled = true; m.textContent = X.enviando; m.className = 'ms';
      post({ acao: 'avisar', email: conta().email, programa: av.getAttribute('data-prog'), lang: LG }).then(function (r) {
        if (r && r.ok) { m.textContent = r.ja ? X.avisoJa : X.avisoOk; m.className = 'ms ok'; }
        else { av.disabled = false; m.textContent = X.erro; m.className = 'ms er'; }
      }, function () { av.disabled = false; m.textContent = X.semNet; m.className = 'ms er'; });
    };
    return;
  }

  /* ---------------- index: login → 4 programas ---------------- */
  var q = {}; location.search.replace(/[?&]([^=&]+)=([^&]*)/g, function (m, k, v) { q[k] = decodeURIComponent(v); });
  var cred = '', nomeGoogle = '';
  function msg(t, cls) { var e = $('slMsg'); e.textContent = t || ''; e.className = 'ms ' + (cls || ''); }
  function mostrarHub() { $('slLogin').hidden = true; $('slHub').hidden = false; chip(); var c = conta(); if (c) $('slOla').textContent = X.ola.replace('%N', (c.nome || c.email).split(' ')[0]); window.scrollTo(0, 0); }
  function mostrarLogin() { $('slHub').hidden = true; $('slLogin').hidden = false; $('slForm').hidden = true; $('slBotao').hidden = false; }
  function volta() { var v = q.volta || ''; if (/^[a-z0-9-]+\.html(#[\w-]*)?$/i.test(v) && !/^index/.test(v)) { location.href = v; return true; } return false; }
  function tratar(r) {
    if (!r || !r.ok) { if (r && r.pedirZap) { $('fZap').focus(); return msg('✖ ' + X.zapRuim, 'er'); } return msg('✖ ' + (r && r.msg === 'Informe o seu nome.' ? X.nomeFalta : X.erroGoogle), 'er'); }
    if (!r.cadastro) { $('slBotao').hidden = true; $('slForm').hidden = false; $('slMail').textContent = r.email; if (!$('fNome').value) $('fNome').value = nomeGoogle; msg(X.primeira, ''); $('fNome').focus(); return; }
    guardar({ email: r.email, nome: r.nome || '' }); msg('✔ ' + X.bemvindo.replace('%N', r.nome || r.email), 'ok');
    if (!volta()) mostrarHub();
  }
  function nomeDoToken(t) { try { var p = t.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'); return JSON.parse(decodeURIComponent(Array.prototype.map.call(atob(p), function (c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join(''))).name || ''; } catch (e) { return ''; } }
  function aoEntrar(resp) {
    cred = resp.credential; nomeGoogle = nomeDoToken(cred); msg(X.conferindo, '');
    post({ acao: 'site_login', loginGoogle: cred, lang: LG }).then(tratar, function () { msg('✖ ' + X.semNet, 'er'); });
  }
  window.SussaiConta.aoEntrar = aoEntrar;
  $('fEnviar').onclick = function () {
    var nome = $('fNome').value.trim(), zap = $('fZap').value.replace(/\D/g, ''), cid = $('fCid').value.trim();
    if (nome.length < 3) return msg('✖ ' + X.nomeFalta, 'er');
    if (zap.length < 10 || zap.length > 13) return msg('✖ ' + X.zapRuim, 'er');
    if (!$('fOk').checked) return msg('✖ ' + X.aceite, 'er');
    var b = $('fEnviar'); b.disabled = true; msg(X.enviando, '');
    post({ acao: 'site_login', loginGoogle: cred, nome: nome, whatsapp: $('fZap').value, cidade: cid, lang: LG })
      .then(function (r) { b.disabled = false; tratar(r); }, function () { b.disabled = false; msg('✖ ' + X.semNet, 'er'); });
  };
  if (conta()) { if (!volta()) mostrarHub(); } else mostrarLogin();
  function iniciar(n) {
    if (!window.google || !google.accounts || !google.accounts.id) { if ((n || 0) < 100) setTimeout(function () { iniciar((n || 0) + 1); }, 200); else msg(X.semGoogle, 'er'); return; }
    google.accounts.id.initialize({ client_id: CID, callback: aoEntrar, auto_select: false, cancel_on_tap_outside: false });
    google.accounts.id.renderButton($('slBotao'), { theme: 'filled_blue', size: 'large', text: 'signin_with', shape: 'pill', locale: { pt: 'pt-BR', en: 'en', es: 'es-419' }[LG] });
  }
  if (!conta()) iniciar(0);
})();
