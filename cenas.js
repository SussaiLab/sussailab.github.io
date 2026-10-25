/* SussaiLab – 🛒 LOJA DE CENAS EXTRAS do site (rev66u)
   • Todos VEEM a vitrine (foto, nome, descrição) – a lista vem ao vivo da planilha.
   • BAIXAR: entrar com a conta Google + ter licença PAGA válida do SussaiLab CLP.
   • O arquivo baixado vem criptografado e preso ao e-mail – só abre no SussaiLab CLP dessa conta. */
(function () {
  'use strict';
  var SRV = 'https://script.google.com/macros/s/AKfycbzUmiNAeX4wbS7guwxjm8zCPOKOhLBbbenZhcpfXmEKk3cpC1--naS5TjsgfWDqY3ggTw/exec', CID = '15890667708-hnm6mo385c0j1ud8om40glo2mf7mor05.apps.googleusercontent.com', TX = {"pt": {"title": "Cenas extras – SussaiLab CLP", "desc": "Loja de cenas extras do SussaiLab CLP: máquinas novas para programar. Veja todas; baixar é exclusivo da licença paga.", "h1": "🛒 Cenas extras do SussaiLab CLP", "sub": "Máquinas novas para você programar em Ladder, publicadas sempre. <b>Veja todas à vontade</b> – para <b>baixar</b>, entre com a sua conta Google: o download é exclusivo de quem tem <b>licença paga válida</b>.", "total": "cenas publicadas", "comoH": "Como instalar uma cena", "segH": "🔐 Cenas protegidas", "seg": "Cada cena baixada vem <b>criptografada (AES-256)</b>, <b>assinada</b> e <b>presa ao seu e-mail</b>: abre só no SussaiLab CLP da sua conta e funciona enquanto a licença estiver em dia. Não adianta copiar para outra pessoa.", "statusIni": "Entre com a sua conta Google para baixar as cenas.", "conferindo": "Conferindo a sua licença...", "podeOk": "Conta %E com licença <b>%P</b> – pode baixar todas as cenas.", "verPlanos": "Ver planos e comprar", "btLogin": "Entre para baixar", "btBaixar": "Baixar cena", "btPaga": "Licença paga para baixar", "nova": "NOVA", "todas": "Todas", "vazio": "Nenhuma cena extra publicada ainda – volte em breve!", "nadaFiltro": "Nenhuma cena neste assunto.", "carregando": "Carregando as cenas...", "semNet": "Sem conexão com o servidor. Tente de novo.", "semGoogle": "Não foi possível carregar o login do Google.", "baixando": "Baixando...", "relogar": "Sua sessão do Google expirou – entre de novo.", "erro": "Não foi possível baixar agora.", "baixou": "Baixado: %A – no SussaiLab CLP use Cena ▸ ➕ Adicionar cena nova (.cena).", "nav": "🛒 Cenas extras", "dl": "🛒 Cenas extras (loja)"}, "en": {"title": "Extra scenes – SussaiLab CLP", "desc": "SussaiLab CLP extra scenes store: new machines to program. Browse them all; downloading is exclusive to the paid license.", "h1": "🛒 SussaiLab CLP extra scenes", "sub": "New machines for you to program in Ladder, published regularly. <b>Browse them all freely</b> – to <b>download</b>, sign in with your Google account: downloads are exclusive to a <b>valid paid license</b>.", "total": "scenes published", "comoH": "How to install a scene", "segH": "🔐 Protected scenes", "seg": "Each downloaded scene is <b>encrypted (AES-256)</b>, <b>signed</b> and <b>tied to your e-mail</b>: it only opens in the SussaiLab CLP of your account and works while your license is valid. Copying it to someone else does not work.", "statusIni": "Sign in with your Google account to download scenes.", "conferindo": "Checking your license...", "podeOk": "Account %E with <b>%P</b> license – you can download all scenes.", "verPlanos": "See plans and buy", "btLogin": "Sign in to download", "btBaixar": "Download scene", "btPaga": "Paid license to download", "nova": "NEW", "todas": "All", "vazio": "No extra scenes published yet – come back soon!", "nadaFiltro": "No scenes in this subject.", "carregando": "Loading scenes...", "semNet": "No connection to the server. Try again.", "semGoogle": "Could not load Google sign-in.", "baixando": "Downloading...", "relogar": "Your Google session expired – sign in again.", "erro": "Could not download now.", "baixou": "Downloaded: %A – in SussaiLab CLP use Scene ▸ ➕ Add new scene (.cena).", "nav": "🛒 Extra scenes", "dl": "🛒 Extra scenes (store)"}, "es": {"title": "Escenas extra – SussaiLab CLP", "desc": "Tienda de escenas extra de SussaiLab CLP: máquinas nuevas para programar. Véalas todas; descargar es exclusivo de la licencia paga.", "h1": "🛒 Escenas extra de SussaiLab CLP", "sub": "Máquinas nuevas para programar en Ladder, publicadas siempre. <b>Véalas todas libremente</b> – para <b>descargar</b>, entre con su cuenta Google: la descarga es exclusiva de quien tiene <b>licencia paga vigente</b>.", "total": "escenas publicadas", "comoH": "Cómo instalar una escena", "segH": "🔐 Escenas protegidas", "seg": "Cada escena descargada viene <b>cifrada (AES-256)</b>, <b>firmada</b> y <b>vinculada a su correo</b>: abre solo en el SussaiLab CLP de su cuenta y funciona mientras la licencia esté vigente. Copiarla a otra persona no funciona.", "statusIni": "Entre con su cuenta Google para descargar las escenas.", "conferindo": "Verificando su licencia...", "podeOk": "Cuenta %E con licencia <b>%P</b> – puede descargar todas las escenas.", "verPlanos": "Ver planes y comprar", "btLogin": "Entre para descargar", "btBaixar": "Descargar escena", "btPaga": "Licencia paga para descargar", "nova": "NUEVA", "todas": "Todas", "vazio": "Aún no hay escenas extra publicadas – ¡vuelva pronto!", "nadaFiltro": "No hay escenas en este tema.", "carregando": "Cargando escenas...", "semNet": "Sin conexión con el servidor. Intente de nuevo.", "semGoogle": "No fue posible cargar el inicio de sesión de Google.", "baixando": "Descargando...", "relogar": "Su sesión de Google expiró – entre de nuevo.", "erro": "No fue posible descargar ahora.", "baixou": "Descargado: %A – en SussaiLab CLP use Escena ▸ ➕ Agregar escena nueva (.cena).", "nav": "🛒 Escenas extra", "dl": "🛒 Escenas extra (tienda)"}};
  var LG = String(document.documentElement.lang || 'pt').slice(0, 2).toLowerCase(); if (!TX[LG]) LG = 'pt';
  var X = TX[LG], SUF = LG === 'pt' ? '' : '-' + LG;
  var cred = null, pode = null, LISTA = [], filtro = '';
  function $(id) { return document.getElementById(id); }
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function post(q) { q.lang = LG; return fetch(SRV, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(q), redirect: 'follow' }).then(function (r) { return r.json(); }); }
  function status(html, cls) { var e = $('cnStatus'); e.innerHTML = html; e.className = 'cn-status ' + (cls || ''); }
  function fotoOk(f) { return /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+\/=]+$/.test(f || '') ? f : ''; }
  function render() {
    var G = $('cnGrade'), novo = Date.now() - 30 * 864e5;
    var L = LISTA.filter(function (c) { return !filtro || c.assunto === filtro; });
    if (!LISTA.length) { G.innerHTML = '<div class="cn-vazio">' + X.vazio + '</div>'; return; }
    G.innerHTML = L.map(function (c) {
      var i = LISTA.indexOf(c), f = fotoOk(c.foto);
      var bt = !cred ? '<button class="cn-bt lk" data-i="' + i + '" data-a="login">🔐 ' + X.btLogin + '</button>'
        : pode && pode.ok ? '<button class="cn-bt" data-i="' + i + '" data-a="baixar">⬇ ' + X.btBaixar + '</button>'
        : '<a class="cn-bt lk" href="clp' + SUF + '.html#planos">🔒 ' + X.btPaga + '</a>';
      return '<article class="cn-card"><div class="cn-foto"' + (f ? ' style="background-image:url(' + f + ')"' : '') + '>' + (f ? '' : '🧩') +
        (c.data > novo ? '<span class="cn-nova">' + X.nova + '</span>' : '') + '<span class="cn-cad">🔒</span></div>' +
        '<div class="cn-corpo"><h3>' + esc(c.nome) + '</h3><div class="cn-tags">' + [c.assunto, c.nivel, c.es, 'v' + c.versao].filter(Boolean).map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') +
        '</div><p>' + esc(c.desc) + '</p>' + bt + '<div class="cn-ms" id="cnMs' + i + '"></div></div></article>';
    }).join('') || '<div class="cn-vazio">' + X.nadaFiltro + '</div>';
    var as = {}; LISTA.forEach(function (c) { if (c.assunto) as[c.assunto] = 1; });
    $('cnFiltro').innerHTML = '<button class="' + (filtro ? '' : 'on') + '" data-f="">' + X.todas + ' (' + LISTA.length + ')</button>' +
      Object.keys(as).sort().map(function (a) { return '<button class="' + (filtro === a ? 'on' : '') + '" data-f="' + esc(a) + '">' + esc(a) + '</button>'; }).join('');
  }
  function carregar() {
    $('cnGrade').innerHTML = '<div class="cn-vazio">⏳ ' + X.carregando + '</div>';
    post({ acao: 'cenas_lista' }).then(function (r) { LISTA = (r && r.cenas) || []; $('cnTotal').textContent = LISTA.length; render(); },
      function () { $('cnGrade').innerHTML = '<div class="cn-vazio">⚠ ' + X.semNet + '</div>'; });
  }
  function aoEntrar(resp) {
    cred = resp.credential; status('⏳ ' + X.conferindo);
    post({ acao: 'cena_pode', loginGoogle: cred }).then(function (r) {
      pode = r || { ok: false };
      if (pode.relogar) { cred = null; status('⚠ ' + esc(pode.msg), 'er'); render(); return; }
      $('cnBotao').hidden = true;
      if (pode.ok) status('✔ ' + X.podeOk.replace('%E', '<b>' + esc(pode.email) + '</b>').replace('%P', esc(pode.plano || '')), 'ok');
      else status('🔒 <b>' + esc(pode.email || '') + '</b>: ' + esc(pode.msg || '') + ' <a href="clp' + SUF + '.html#planos">' + X.verPlanos + '</a>', 'no');
      render();
    }, function () { status('⚠ ' + X.semNet, 'er'); });
  }
  function salvar(nome, texto) {
    var b = new Blob([texto], { type: 'application/octet-stream' }), u = URL.createObjectURL(b), a = document.createElement('a');
    a.href = u; a.download = nome; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(u); }, 4000);
  }
  function baixar(i, b) {
    var c = LISTA[i], m = $('cnMs' + i); b.disabled = true; m.textContent = '⏳ ' + X.baixando; m.className = 'cn-ms';
    post({ acao: 'cena_site', loginGoogle: cred, id: c.id }).then(function (r) {
      b.disabled = false;
      if (r && r.relogar) { cred = null; pode = null; $('cnBotao').hidden = false; status('🔐 ' + X.relogar, 'no'); render(); return; }
      if (!r || !r.ok) { m.textContent = '⚠ ' + ((r && r.msg) || X.erro); m.className = 'cn-ms er'; return; }
      salvar(r.arquivo, JSON.stringify(r.cena)); m.innerHTML = '✔ ' + X.baixou.replace('%A', '<b>' + esc(r.arquivo) + '</b>'); m.className = 'cn-ms ok';
    }, function () { b.disabled = false; m.textContent = '⚠ ' + X.semNet; m.className = 'cn-ms er'; });
  }
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target.closest('[data-a],[data-f]') : null; if (!t) return;
    if (t.hasAttribute('data-f')) { filtro = t.getAttribute('data-f'); render(); return; }
    var a = t.getAttribute('data-a'), i = +t.getAttribute('data-i');
    if (a === 'login') { $('cnLogin').scrollIntoView({ behavior: 'smooth', block: 'center' }); try { google.accounts.id.prompt(); } catch (x) { } return; }
    if (a === 'baixar') baixar(i, t);
  });
  function iniciar(n) {
    if (!window.google || !google.accounts || !google.accounts.id) { if ((n || 0) < 100) setTimeout(function () { iniciar((n || 0) + 1); }, 200); else status('⚠ ' + X.semGoogle, 'er'); return; }
    google.accounts.id.initialize({ client_id: CID, callback: aoEntrar, auto_select: true, cancel_on_tap_outside: true });
    google.accounts.id.renderButton($('cnBotao'), { theme: 'filled_blue', size: 'large', text: 'signin_with', shape: 'pill', locale: { pt: 'pt-BR', en: 'en', es: 'es-419' }[LG] });
  }
  status('🔐 ' + X.statusIni);
  carregar(); iniciar(0);
  window.SussaiCenas = { aoEntrar: aoEntrar, carregar: carregar, estado: function () { return { cred: cred, pode: pode, LISTA: LISTA }; } };
})();
