/* SussaiLab – conta única do site (rev66z).
   O site é PÚBLICO: qualquer pessoa vê a página inicial, os programas, a loja e os vídeos.
   O login com Google só é pedido para BAIXAR (links .zip / download) e para "Quero ser avisado".
   Login discreto no canto superior direito ("Faça login para baixar os programas") + janela de login. */
(function () {
  'use strict';
  var SRV = 'https://script.google.com/macros/s/AKfycbzUmiNAeX4wbS7guwxjm8zCPOKOhLBbbenZhcpfXmEKk3cpC1--naS5TjsgfWDqY3ggTw/exec', CID = '15890667708-hnm6mo385c0j1ud8om40glo2mf7mor05.apps.googleusercontent.com', TX = {"pt": {"sair": "Sair", "enviando": "Enviando…", "avisoOk": "✔ Pronto! Avisaremos você por e-mail no lançamento.", "avisoJa": "✔ Você já está na lista – avisaremos no lançamento.", "erro": "Não foi possível agora. Tente de novo.", "semNet": "Sem conexão com a internet.", "ola": "Olá, %N! Escolha o programa:", "zapRuim": "WhatsApp inválido. Use DDD + celular, ex.: (11) 98765-4321.", "nomeFalta": "Escreva o seu nome completo.", "erroGoogle": "Não foi possível confirmar a sua conta Google. Entre de novo.", "primeira": "Primeiro acesso: complete o cadastro (só uma vez, vale para todos os programas).", "bemvindo": "Bem-vindo(a), %N!", "conferindo": "Conferindo a sua conta…", "aceite": "Aceite os termos de uso e a política de privacidade.", "semGoogle": "O login do Google não carregou. Verifique a internet ou desative o bloqueador.", "titulo": "Programas SussaiLab", "dica": "Faça login para baixar os programas", "entrar": "Entrar", "mTit": "Entre na sua conta SussaiLab", "mTitDl": "Entre para baixar", "mTxt": "Use a sua conta Google – é grátis e vale para o site e para todos os programas SussaiLab.", "fechar": "Fechar", "form": "<p style=\"margin:0\">Conta Google: <b id=\"slMail\"></b></p>\n      <label for=\"fNome\">Nome completo</label><input type=\"text\" id=\"fNome\" maxlength=\"80\" autocomplete=\"name\">\n      <label for=\"fZap\">Celular / WhatsApp com DDD</label><input type=\"tel\" id=\"fZap\" maxlength=\"20\" placeholder=\"(11) 98765-4321\" autocomplete=\"tel\">\n      <label for=\"fCid\">Cidade / UF (opcional)</label><input type=\"text\" id=\"fCid\" maxlength=\"60\">\n      <label class=\"chk\"><input type=\"checkbox\" id=\"fOk\"> <span>Li e aceito os <a href=\"termos.html\" target=\"_blank\">termos de uso</a> e a <a href=\"privacidade.html\" target=\"_blank\">política de privacidade</a>.</span></label>\n      <button type=\"button\" class=\"btn grande\" id=\"fEnviar\">Criar minha conta SussaiLab</button>", "seg": "🔒 Login seguro com Google. Recebemos só o seu nome e e-mail. Ao ativar um programa num computador novo, enviamos um código de confirmação para o seu e-mail."}, "en": {"sair": "Sign out", "enviando": "Sending…", "avisoOk": "✔ Done! We will e-mail you at launch.", "avisoJa": "✔ You are already on the list – we will let you know at launch.", "erro": "Not possible right now. Try again.", "semNet": "No internet connection.", "ola": "Hi, %N! Choose the program:", "zapRuim": "Invalid WhatsApp. Use area code + mobile, e.g.: (11) 98765-4321.", "nomeFalta": "Type your full name.", "erroGoogle": "Could not confirm your Google account. Sign in again.", "primeira": "First access: complete your sign-up (only once, valid for all programs).", "bemvindo": "Welcome, %N!", "conferindo": "Checking your account…", "aceite": "Accept the terms of use and the privacy policy.", "semGoogle": "Google sign-in did not load. Check the internet or disable the blocker.", "titulo": "SussaiLab programs", "dica": "Sign in to download the programs", "entrar": "Sign in", "mTit": "Sign in to your SussaiLab account", "mTitDl": "Sign in to download", "mTxt": "Use your Google account – it is free and works for the website and all SussaiLab programs.", "fechar": "Close", "form": "<p style=\"margin:0\">Google account: <b id=\"slMail\"></b></p>\n      <label for=\"fNome\">Full name</label><input type=\"text\" id=\"fNome\" maxlength=\"80\" autocomplete=\"name\">\n      <label for=\"fZap\">Mobile / WhatsApp with area code</label><input type=\"tel\" id=\"fZap\" maxlength=\"20\" placeholder=\"(11) 98765-4321\" autocomplete=\"tel\">\n      <label for=\"fCid\">City / State (optional)</label><input type=\"text\" id=\"fCid\" maxlength=\"60\">\n      <label class=\"chk\"><input type=\"checkbox\" id=\"fOk\"> <span>I have read and accept the <a href=\"termos-en.html\" target=\"_blank\">terms of use</a> and the <a href=\"privacidade-en.html\" target=\"_blank\">privacy policy</a>.</span></label>\n      <button type=\"button\" class=\"btn grande\" id=\"fEnviar\">Create my SussaiLab account</button>", "seg": "🔒 Secure Google sign-in. We only receive your name and e-mail. When you activate a program on a new computer, we e-mail you a confirmation code."}, "es": {"sair": "Salir", "enviando": "Enviando…", "avisoOk": "✔ ¡Listo! Le avisaremos por correo en el lanzamiento.", "avisoJa": "✔ Ya está en la lista – le avisaremos en el lanzamiento.", "erro": "No fue posible ahora. Intente de nuevo.", "semNet": "Sin conexión a internet.", "ola": "¡Hola, %N! Elija el programa:", "zapRuim": "WhatsApp inválido. Use código de área + celular, ej.: (11) 98765-4321.", "nomeFalta": "Escriba su nombre completo.", "erroGoogle": "No fue posible confirmar su cuenta de Google. Inicie sesión de nuevo.", "primeira": "Primer acceso: complete el registro (solo una vez, vale para todos los programas).", "bemvindo": "¡Bienvenido(a), %N!", "conferindo": "Verificando su cuenta…", "aceite": "Acepte los términos de uso y la política de privacidad.", "semGoogle": "El inicio de sesión de Google no cargó. Revise internet o desactive el bloqueador.", "titulo": "Programas SussaiLab", "dica": "Inicie sesión para descargar los programas", "entrar": "Entrar", "mTit": "Entre en su cuenta SussaiLab", "mTitDl": "Entre para descargar", "mTxt": "Use su cuenta Google – es gratis y vale para el sitio y para todos los programas SussaiLab.", "fechar": "Cerrar", "form": "<p style=\"margin:0\">Cuenta de Google: <b id=\"slMail\"></b></p>\n      <label for=\"fNome\">Nombre completo</label><input type=\"text\" id=\"fNome\" maxlength=\"80\" autocomplete=\"name\">\n      <label for=\"fZap\">Celular / WhatsApp con código de área</label><input type=\"tel\" id=\"fZap\" maxlength=\"20\" placeholder=\"(11) 98765-4321\" autocomplete=\"tel\">\n      <label for=\"fCid\">Ciudad / Estado (opcional)</label><input type=\"text\" id=\"fCid\" maxlength=\"60\">\n      <label class=\"chk\"><input type=\"checkbox\" id=\"fOk\"> <span>Leí y acepto los <a href=\"termos-es.html\" target=\"_blank\">términos de uso</a> y la <a href=\"privacidade-es.html\" target=\"_blank\">política de privacidad</a>.</span></label>\n      <button type=\"button\" class=\"btn grande\" id=\"fEnviar\">Crear mi cuenta SussaiLab</button>", "seg": "🔒 Inicio de sesión seguro con Google. Solo recibimos su nombre y correo. Al activar un programa en una computadora nueva, le enviamos un código de confirmación por correo."}};
  var LG = String(document.documentElement.lang || 'pt').slice(0, 2).toLowerCase(); if (!TX[LG]) LG = 'pt';
  var X = TX[LG], SUF = LG === 'pt' ? '' : '-' + LG, K = 'sussailab.conta', DIAS = 30;
  function $(id) { return document.getElementById(id); }
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function conta() { try { var c = JSON.parse(localStorage.getItem(K) || 'null'); if (c && c.email && c.exp > Date.now()) return c; } catch (e) { } return null; }
  function guardar(c) { c.exp = Date.now() + DIAS * 864e5; try { localStorage.setItem(K, JSON.stringify(c)); } catch (e) { } }
  function post(q) { return fetch(SRV, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(q), redirect: 'follow' }).then(function (r) { return r.json(); }); }
  function sair() { try { localStorage.removeItem(K); } catch (e) { } try { google.accounts.id.disableAutoSelect(); } catch (e) { } atualizar(); }

  /* ---------- canto superior direito ---------- */
  function chip() {
    var e = $('slConta'), c = conta(); if (!e) return;
    if (!c) {
      e.innerHTML = '<span class="sl-dica">' + X.dica + '</span><button type="button" class="sl-entrar" id="slEntrar"><b>G</b>' + X.entrar + '</button>';
      $('slEntrar').onclick = function () { entrar(null); };
      return;
    }
    e.innerHTML = '<span class="sl-nome" title="' + esc(c.email) + '">👤 ' + esc((c.nome || c.email).split(' ')[0]) + '</span> <a href="#" id="slSair">' + X.sair + '</a>';
    $('slSair').onclick = function (ev) { ev.preventDefault(); sair(); };
  }
  function atualizar() {
    chip();
    var c = conta(), o = $('slOla');
    if (o) o.textContent = c ? X.ola.replace('%N', (c.nome || c.email).split(' ')[0]) : X.titulo;
    var d = $('slDlDica'); if (d) d.hidden = !!c;
  }

  /* ---------- janela de login (só quando precisa) ---------- */
  var depois = null, cred = '', nomeGoogle = '', gsiPronto = false;
  function msg(t, cls) { var e = $('slMsg'); if (e) { e.textContent = t || ''; e.className = 'ms ' + (cls || ''); } }
  function fechar() { var m = $('slModal'); if (m) m.remove(); depois = null; }
  function entrar(fn) {
    if (conta()) { if (fn) fn(); return; }
    fechar(); depois = fn || null;
    var d = document.createElement('div'); d.id = 'slModal'; d.className = 'sl-modal';
    d.innerHTML = '<div class="bx" role="dialog" aria-modal="true"><button type="button" class="fx" id="slFx" aria-label="' + X.fechar + '">✕</button>' +
      '<div class="ic">🔐</div><h2>' + (fn ? X.mTitDl : X.mTit) + '</h2><p>' + X.mTxt + '</p><div id="slBotao" class="gbt"></div>' +
      '<div class="pt-form" id="slForm" hidden>' + X.form + '</div><div class="ms" id="slMsg"></div><p class="pt-seg">' + X.seg + '</p></div>';
    document.body.appendChild(d);
    d.addEventListener('click', function (e) { if (e.target === d) fechar(); });
    $('slFx').onclick = fechar;
    $('fEnviar').onclick = enviarCadastro;
    carregarGoogle(0);
  }
  function carregarGoogle(n) {
    if (window.google && google.accounts && google.accounts.id) {
      if (!gsiPronto) { google.accounts.id.initialize({ client_id: CID, callback: aoEntrar, auto_select: false, cancel_on_tap_outside: false }); gsiPronto = true; }
      var b = $('slBotao'); if (b) google.accounts.id.renderButton(b, { theme: 'filled_blue', size: 'large', text: 'signin_with', shape: 'pill', locale: { pt: 'pt-BR', en: 'en', es: 'es-419' }[LG] });
      return;
    }
    if (!n && !document.querySelector('script[src*="accounts.google.com/gsi/client"]')) {
      var s = document.createElement('script'); s.src = 'https://accounts.google.com/gsi/client'; s.async = true; document.head.appendChild(s);
    }
    if (n < 100) setTimeout(function () { if ($('slModal')) carregarGoogle(n + 1); }, 200); else msg(X.semGoogle, 'er');
  }
  function nomeDoToken(t) { try { var p = t.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'); return JSON.parse(decodeURIComponent(Array.prototype.map.call(atob(p), function (c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join(''))).name || ''; } catch (e) { return ''; } }
  function aoEntrar(resp) {
    cred = resp.credential; nomeGoogle = nomeDoToken(cred); msg(X.conferindo, '');
    post({ acao: 'site_login', loginGoogle: cred, lang: LG }).then(tratar, function () { msg('✖ ' + X.semNet, 'er'); });
  }
  function tratar(r) {
    if (!r || !r.ok) { if (r && r.pedirZap) { $('fZap').focus(); return msg('✖ ' + X.zapRuim, 'er'); } return msg('✖ ' + (r && r.msg === 'Informe o seu nome.' ? X.nomeFalta : X.erroGoogle), 'er'); }
    if (!r.cadastro) { $('slBotao').hidden = true; $('slForm').hidden = false; $('slMail').textContent = r.email; if (!$('fNome').value) $('fNome').value = nomeGoogle; msg(X.primeira, ''); $('fNome').focus(); return; }
    guardar({ email: r.email, nome: r.nome || '' });
    var fn = depois; depois = null; fechar(); atualizar();
    if (fn) fn();
  }
  function enviarCadastro() {
    var nome = $('fNome').value.trim(), zap = $('fZap').value.replace(/\D/g, ''), cid = $('fCid').value.trim();
    if (nome.length < 3) return msg('✖ ' + X.nomeFalta, 'er');
    if (zap.length < 10 || zap.length > 13) return msg('✖ ' + X.zapRuim, 'er');
    if (!$('fOk').checked) return msg('✖ ' + X.aceite, 'er');
    var b = $('fEnviar'); b.disabled = true; msg(X.enviando, '');
    post({ acao: 'site_login', loginGoogle: cred, nome: nome, whatsapp: $('fZap').value, cidade: cid, lang: LG })
      .then(function (r) { b.disabled = false; tratar(r); }, function () { b.disabled = false; msg('✖ ' + X.semNet, 'er'); });
  }

  /* ---------- downloads: só com login ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[download],a[href$=".zip"]') : null;
    if (!a || conta()) return;
    e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    var href = a.getAttribute('href');
    entrar(function () { location.href = href; });
  }, true);

  /* ---------- "Quero ser avisado" nas páginas dos programas ---------- */
  function avisar() {
    var av = $('slAvisar'), m = $('slAvisarMsg'); av.disabled = true; m.textContent = X.enviando; m.className = 'ms';
    post({ acao: 'avisar', email: conta().email, programa: av.getAttribute('data-prog'), lang: LG }).then(function (r) {
      if (r && r.ok) { m.textContent = r.ja ? X.avisoJa : X.avisoOk; m.className = 'ms ok'; }
      else { av.disabled = false; m.textContent = X.erro; m.className = 'ms er'; }
    }, function () { av.disabled = false; m.textContent = X.semNet; m.className = 'ms er'; });
  }
  var av = $('slAvisar'); if (av) av.onclick = function () { entrar(avisar); };

  window.SussaiConta = { conta: conta, sair: sair, post: post, lang: LG, entrar: entrar };
  atualizar();

  /* links antigos "index.html?volta=pagina.html" (launcher/e-mails): abre a página pedida */
  var q = {}; location.search.replace(/[?&]([^=&]+)=([^&]*)/g, function (m, k, v) { q[k] = decodeURIComponent(v); });
  var v = q.volta || '';
  if (/^[a-z0-9-]+\.html(#[\w-]*)?$/i.test(v) && !/^index/.test(v)) location.replace(v);
})();
