/* SussaiLab – 🎥 "SEU VÍDEO AQUI" (rev66v)
   • Mostra os vídeos aprovados (lista ao vivo da planilha). YouTube/Vimeo tocam aqui (clique para carregar);
     Instagram, TikTok, Facebook e LinkedIn abrem na rede social.
   • Formulário: entrar com Google → mandar o link → fica aguardando aprovação do SussaiLab. */
(function () {
  'use strict';
  var SRV = 'https://script.google.com/macros/s/AKfycbzUmiNAeX4wbS7guwxjm8zCPOKOhLBbbenZhcpfXmEKk3cpC1--naS5TjsgfWDqY3ggTw/exec', CID = '15890667708-hnm6mo385c0j1ud8om40glo2mf7mor05.apps.googleusercontent.com', TX = {"pt": {"title": "Seu vídeo aqui – SussaiLab", "desc": "Vídeos de professores, alunos e empresas usando o SussaiLab. Mande o seu vídeo e apareça no site!", "h1": "🎥 Seu vídeo aqui", "sub": "Professores, alunos, escolas e empresas mostrando o <b>SussaiLab</b> em ação. Gravou uma aula, um desafio resolvido ou um projeto? <b>Mande o link e apareça aqui!</b>", "total": "vídeos publicados", "mande": "📤 Mande o seu vídeo", "participar": "Quero participar", "comoH": "Como participar", "dicasH": "💡 Dicas para um vídeo legal", "l_link": "Link do vídeo *", "l_titulo": "Título *", "l_autor": "Seu nome ou canal *", "l_escola": "Escola / empresa", "l_cidade": "Cidade / UF", "l_desc": "Sobre o vídeo (opcional)", "l_ok": "Autorizo a SussaiLab a exibir este vídeo (com o meu nome, escola e cidade) no site e nas redes sociais da SussaiLab. Declaro que tenho direito de divulgar o vídeo.", "bt": "📤 Enviar para aprovação", "entrarP": "Entre com a sua conta Google para mandar o seu vídeo (evita spam – não publicamos o seu e-mail).", "assistir": "Assistir", "verNa": "Ver no %P", "abrir": "Abrir no %P", "destaque": "Destaque", "todos": "Todos", "vazio": "Ainda não há vídeos publicados – o seu pode ser o primeiro!", "carregando": "Carregando os vídeos...", "semNet": "Sem conexão com o servidor. Tente de novo.", "entre": "Entre com a sua conta Google primeiro.", "marque": "Marque a autorização para enviar.", "enviando": "Enviando...", "relogar": "Sua sessão do Google expirou – entre de novo.", "erro": "Não foi possível enviar agora.", "nav": "🎥 Seu vídeo aqui", "compartilhar": "Compartilhar:", "copiar": "Copiar link", "via": "Compartilhar no %R", "maisApps": "Mais apps do seu celular", "copiado": "Link copiado!", "naoCopiou": "Copie este link:", "colar": "Agora cole no %R (Stories, Reels, bio ou mensagem). Dica: marque @sussailab e use #SussaiLab.", "shPag": "🎥 Vídeos de quem usa o SussaiLab – simulador de CLP, comandos elétricos e mais! Assista e mande o seu: #SussaiLab", "shTxt": "🎥 \"%T\" – %A usando o SussaiLab CLP! Assista: #SussaiLab", "sharePag": "📣 Compartilhe esta página com seus alunos e colegas:"}, "en": {"title": "Your video here – SussaiLab", "desc": "Videos from teachers, students and companies using SussaiLab. Send your video and get featured!", "h1": "🎥 Your video here", "sub": "Teachers, students, schools and companies showing <b>SussaiLab</b> in action. Recorded a class, a solved challenge or a project? <b>Send the link and get featured here!</b>", "total": "videos published", "mande": "📤 Send your video", "participar": "I want to take part", "comoH": "How to take part", "dicasH": "💡 Tips for a great video", "l_link": "Video link *", "l_titulo": "Title *", "l_autor": "Your name or channel *", "l_escola": "School / company", "l_cidade": "City / State", "l_desc": "About the video (optional)", "l_ok": "I authorize SussaiLab to show this video (with my name, school and city) on the SussaiLab website and social media. I declare I have the right to share this video.", "bt": "📤 Send for approval", "entrarP": "Sign in with your Google account to send your video (prevents spam – we never publish your e-mail).", "assistir": "Watch", "verNa": "Watch on %P", "abrir": "Open on %P", "destaque": "Featured", "todos": "All", "vazio": "No videos published yet – yours can be the first!", "carregando": "Loading videos...", "semNet": "No connection to the server. Try again.", "entre": "Sign in with your Google account first.", "marque": "Check the authorization to send.", "enviando": "Sending...", "relogar": "Your Google session expired – sign in again.", "erro": "Could not send now.", "nav": "🎥 Your video here", "compartilhar": "Share:", "copiar": "Copy link", "via": "Share on %R", "maisApps": "More apps on your phone", "copiado": "Link copied!", "naoCopiou": "Copy this link:", "colar": "Now paste it on %R (Stories, Reels, bio or message). Tip: tag @sussailab and use #SussaiLab.", "shPag": "🎥 Videos from people using SussaiLab – PLC, electrical controls simulator and more! Watch and send yours: #SussaiLab", "shTxt": "🎥 \"%T\" – %A using SussaiLab CLP! Watch: #SussaiLab", "sharePag": "📣 Share this page with your students and colleagues:"}, "es": {"title": "Su video aquí – SussaiLab", "desc": "Videos de profesores, alumnos y empresas usando SussaiLab. ¡Envíe su video y aparezca en el sitio!", "h1": "🎥 Su video aquí", "sub": "Profesores, alumnos, escuelas y empresas mostrando <b>SussaiLab</b> en acción. ¿Grabó una clase, un desafío resuelto o un proyecto? <b>¡Envíe el enlace y aparezca aquí!</b>", "total": "videos publicados", "mande": "📤 Envíe su video", "participar": "Quiero participar", "comoH": "Cómo participar", "dicasH": "💡 Consejos para un buen video", "l_link": "Enlace del video *", "l_titulo": "Título *", "l_autor": "Su nombre o canal *", "l_escola": "Escuela / empresa", "l_cidade": "Ciudad / Estado", "l_desc": "Sobre el video (opcional)", "l_ok": "Autorizo a SussaiLab a mostrar este video (con mi nombre, escuela y ciudad) en el sitio y en las redes sociales de SussaiLab. Declaro que tengo derecho a divulgar el video.", "bt": "📤 Enviar para aprobación", "entrarP": "Entre con su cuenta Google para enviar su video (evita spam – nunca publicamos su correo).", "assistir": "Ver", "verNa": "Ver en %P", "abrir": "Abrir en %P", "destaque": "Destacado", "todos": "Todos", "vazio": "Aún no hay videos publicados – ¡el suyo puede ser el primero!", "carregando": "Cargando videos...", "semNet": "Sin conexión con el servidor. Intente de nuevo.", "entre": "Entre con su cuenta Google primero.", "marque": "Marque la autorización para enviar.", "enviando": "Enviando...", "relogar": "Su sesión de Google expiró – entre de nuevo.", "erro": "No fue posible enviar ahora.", "nav": "🎥 Su video aquí", "compartilhar": "Compartir:", "copiar": "Copiar enlace", "via": "Compartir en %R", "maisApps": "Más apps de su celular", "copiado": "¡Enlace copiado!", "naoCopiou": "Copie este enlace:", "colar": "Ahora péguelo en %R (Stories, Reels, bio o mensaje). Consejo: etiquete @sussailab y use #SussaiLab.", "shPag": "🎥 Videos de quien usa SussaiLab – ¡simulador de PLC, mandos eléctricos y más! Mire y envíe el suyo: #SussaiLab", "shTxt": "🎥 \"%T\" – %A usando SussaiLab CLP! Mire: #SussaiLab", "sharePag": "📣 Comparta esta página con sus alumnos y colegas:"}};
  var LG = String(document.documentElement.lang || 'pt').slice(0, 2).toLowerCase(); if (!TX[LG]) LG = 'pt';
  var X = TX[LG], cred = null, LISTA = [], filtro = '';
  var NAV = (typeof navigator !== 'undefined' && navigator) || {};
  var ICO = { YouTube: '▶️', Vimeo: '🎬', Instagram: '📸', TikTok: '🎵', Facebook: '📘', LinkedIn: '💼' };
  function $(id) { return document.getElementById(id); }
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function post(q) { q.lang = LG; return fetch(SRV, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(q), redirect: 'follow' }).then(function (r) { return r.json(); }); }
  function idOk(v) { return v.p === 'YouTube' ? /^[A-Za-z0-9_-]{11}$/.test(v.id) : v.p === 'Vimeo' ? /^\d{5,12}$/.test(v.id) : false; }
  function linkOk(u) { return /^https:\/\/(www\.)?(youtube\.com|vimeo\.com|instagram\.com|tiktok\.com|vm\.tiktok\.com|vt\.tiktok\.com|facebook\.com|fb\.watch|linkedin\.com)\//i.test(u || ''); }
  /* ---------- rev66w: COMPARTILHAR ---------- */
  function hash(s) { var h = 5381; s = String(s || ''); for (var i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0; return h.toString(36); }
  function chave(v) { return String(v.p || 'v').toLowerCase() + '-' + (v.id ? String(v.id).replace(/[^\w-]/g, '') : hash(v.u)); }
  function pagina() { return 'https://sussailab.com.br/videos' + (LG === 'pt' ? '' : '-' + LG) + '.html'; }
  function linkDe(v) { return v ? pagina() + '#v-' + chave(v) : pagina(); }
  function textoDe(v) { return v ? X.shTxt.replace('%T', v.t).replace('%A', v.a) : X.shPag; }
  var REDES = [
    ['wa', 'WhatsApp', '#25d366', function (u, t) { return 'https://wa.me/?text=' + encodeURIComponent(t + ' ' + u); }],
    ['li', 'LinkedIn', '#0a66c2', function (u) { return 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(u); }],
    ['fb', 'Facebook', '#1877f2', function (u) { return 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(u); }],
    ['ig', 'Instagram', 'linear-gradient(45deg,#feda75,#d62976,#4f5bd5)', null],
    ['tt', 'TikTok', '#111', null],
    ['x', 'X', '#000', function (u, t) { return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(t) + '&url=' + encodeURIComponent(u) + '&hashtags=SussaiLab'; }],
    ['tg', 'Telegram', '#229ed9', function (u, t) { return 'https://t.me/share/url?url=' + encodeURIComponent(u) + '&text=' + encodeURIComponent(t); }],
    ['em', 'E-mail', '#57606a', function (u, t) { return 'mailto:?subject=' + encodeURIComponent(t) + '&body=' + encodeURIComponent(t + '\n\n' + u); }],
    ['cp', X.copiar, '#30363d', null]];
  var SVG = {
    wa: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4z"/>',
    li: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/>',
    fb: '<path d="M14 8V6c0-.9.6-1.1 1-1.1h2.6V1h-3.6C10 1 9.3 3.9 9.3 5.8V8H7v4h2.3v11H14V12h3.3l.4-4z"/>',
    ig: '<path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zM17 5.8a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 3.6c2.7 0 3 0 4.1.1 2.8.1 4 1.4 4.2 4.2v8.2c-.1 2.8-1.4 4-4.2 4.2H7.9c-2.8-.1-4-1.4-4.2-4.2V7.9c.1-2.8 1.4-4 4.2-4.2zM12 2C9.3 2 8.9 2 7.9 2 4.2 2.2 2.2 4.2 2 7.9v8.2c.2 3.7 2.2 5.7 5.9 5.9h8.2c3.7-.2 5.7-2.2 5.9-5.9V7.9C21.8 4.2 19.8 2.2 16.1 2z"/>',
    tt: '<path d="M16.6 2h-3.3v13.4a2.9 2.9 0 1 1-2-2.8V9.2a6.3 6.3 0 1 0 5.3 6.2V8.6a7.4 7.4 0 0 0 4.4 1.4V6.7a4.4 4.4 0 0 1-4.4-4.4z"/>',
    x: '<path d="M17.8 2H21l-7 8 8.2 12h-6.4l-5-6.6L5 22H1.8l7.5-8.6L1.4 2h6.6l4.5 6zm-1.1 18h1.8L7.4 3.9H5.5z"/>',
    tg: '<path d="M21.5 3.2 2.6 10.5c-1.3.5-1.3 1.3-.2 1.6l4.8 1.5 1.9 5.7c.2.6.4.8.9.8.4 0 .6-.2.9-.4l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8L23 4.6c.3-1.3-.5-1.9-1.5-1.4zM8.9 13.3l9.6-6c.5-.3.9-.1.5.2l-8 7.2-.3 3.3z"/>',
    em: '<path d="M2 5h20v14H2zm2 2v.5l8 5 8-5V7zm0 3v7h16v-7l-8 5z"/>',
    cp: '<path d="M8 2h12v14H8zm2 2v10h8V4zM4 7h2v11h10v2H4z"/>' };
  function botoes(k) {
    return '<div class="vd-share" data-k="' + k + '"><span class="vd-sht">' + X.compartilhar + '</span>' + (NAV.share ? '<button class="vd-sb nat" data-s="nat" data-k="' + k + '" title="' + esc(X.maisApps) + '">📲</button>' : '') +
      REDES.map(function (r) { return '<button class="vd-sb" data-s="' + r[0] + '" data-k="' + k + '" title="' + esc(X.via.replace('%R', r[1])) + '" aria-label="' + esc(X.via.replace('%R', r[1])) + '" style="background:' + r[2] + '"><svg viewBox="0 0 24 24" width="17" height="17" fill="#fff" aria-hidden="true">' + SVG[r[0]] + '</svg></button>'; }).join('') + '</div>';
  }
  function toast(t) {
    var d = $('vdToast'); if (!d) return; d.innerHTML = t; d.className = 'vd-toast on'; clearTimeout(toast.t); toast.t = setTimeout(function () { d.className = 'vd-toast'; }, 6000);
  }
  function copiar(txt) {
    try { if (NAV.clipboard && NAV.clipboard.writeText) return NAV.clipboard.writeText(txt).then(function () { return true; }, function () { return copiar2(txt); }); } catch (e) { }
    return Promise.resolve(copiar2(txt));
  }
  function copiar2(txt) { try { var a = document.createElement('textarea'); a.value = txt; a.setAttribute('readonly', ''); a.style.position = 'fixed'; a.style.opacity = '0'; document.body.appendChild(a); a.select(); var ok = document.execCommand('copy'); a.remove(); return ok; } catch (e) { return false; } }
  function compartilhar(s, k) {
    var v = k === 'pag' ? null : LISTA[+k], u = linkDe(v), t = textoDe(v), r = REDES.filter(function (x) { return x[0] === s; })[0];
    try { post({ acao: 'evento', ev: 'compartilhar', det: s + ':' + (v ? chave(v) : 'pagina'), d: /Mobile|Android|iPhone/i.test(NAV.userAgent || '') ? 'celular' : 'pc' }).catch(function () { }); } catch (e) { }
    if (s === 'nat') { NAV.share({ title: v ? v.t : X.shPag, text: t, url: u }).catch(function () { }); return; }
    if (r && r[3]) { var w = window.open(r[3](u, t), s === 'em' ? '_self' : '_blank', 'noopener,width=640,height=640'); if (!w && s !== 'em') location.href = r[3](u, t); return; }
    copiar(t + ' ' + u).then(function (ok) {
      if (s === 'cp') { toast(ok ? '✔ ' + X.copiado : '⚠ ' + X.naoCopiou + ' ' + esc(u)); return; }
      if (NAV.share && /Android|iPhone|iPad|Mobile/i.test(NAV.userAgent || '')) { NAV.share({ title: v ? v.t : X.shPag, text: t, url: u }).catch(function () { }); return; }
      toast((ok ? '✔ ' + X.copiado + ' ' : '') + X.colar.replace('%R', s === 'ig' ? 'Instagram' : 'TikTok'));
      window.open(s === 'ig' ? 'https://www.instagram.com/' : 'https://www.tiktok.com/upload', '_blank', 'noopener');
    });
  }
  function irParaHash() {
    var h = ''; try { h = String(location.hash || '').replace(/^#/, ''); } catch (x) { } if (!/^v-[\w-]+$/.test(h)) return;
    var e = $(h); if (!e) return;
    e.classList.add('alvo'); try { e.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (x) { }
  }
  function capa(v) {
    if (v.p === 'YouTube' && idOk(v)) return '<button class="vd-play" data-i="' + LISTA.indexOf(v) + '" style="background-image:url(https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg)" aria-label="' + esc(X.assistir) + '"><span>▶</span></button>';
    if (v.p === 'Vimeo' && idOk(v)) return '<button class="vd-play vm" data-i="' + LISTA.indexOf(v) + '" aria-label="' + esc(X.assistir) + '"><span>▶</span><em>Vimeo</em></button>';
    return '<a class="vd-ext ' + esc(v.p).toLowerCase() + '" href="' + esc(v.u) + '" target="_blank" rel="noopener"><b>' + (ICO[v.p] || '🎥') + '</b><span>' + X.verNa.replace('%P', esc(v.p)) + '</span></a>';
  }
  function render() {
    var G = $('vdGrade'), L = LISTA.filter(function (v) { return !filtro || v.p === filtro; });
    $('vdTotal').textContent = LISTA.length;
    if (!LISTA.length) { G.innerHTML = '<div class="vd-vazio">🎥 ' + X.vazio + '</div>'; $('vdFiltro').innerHTML = ''; return; }
    G.innerHTML = L.filter(function (v) { return linkOk(v.u); }).map(function (v) {
      return '<article class="vd-card' + (v.x ? ' dest' : '') + '" id="v-' + esc(chave(v)) + '"><div class="vd-mid" id="vdM' + LISTA.indexOf(v) + '">' + capa(v) + (v.x ? '<span class="vd-star">⭐ ' + X.destaque + '</span>' : '') + '</div>' +
        '<div class="vd-corpo"><h3>' + esc(v.t) + '</h3><div class="vd-quem">' + (ICO[v.p] || '🎥') + ' <b>' + esc(v.a) + '</b>' + (v.e ? ' · ' + esc(v.e) : '') + (v.c ? ' · 📍 ' + esc(v.c) : '') + '</div>' +
        (v.d ? '<p>' + esc(v.d) + '</p>' : '') + '<a class="vd-link" href="' + esc(v.u) + '" target="_blank" rel="noopener">' + X.abrir.replace('%P', esc(v.p)) + ' ↗</a>' + botoes(LISTA.indexOf(v)) + '</div></article>';
    }).join('');
    irParaHash();
    var ps = {}; LISTA.forEach(function (v) { ps[v.p] = 1; });
    $('vdFiltro').innerHTML = Object.keys(ps).length < 2 ? '' : '<button class="' + (filtro ? '' : 'on') + '" data-f="">' + X.todos + ' (' + LISTA.length + ')</button>' +
      Object.keys(ps).sort().map(function (p) { return '<button class="' + (filtro === p ? 'on' : '') + '" data-f="' + esc(p) + '">' + (ICO[p] || '') + ' ' + esc(p) + '</button>'; }).join('');
  }
  function tocar(i) {
    var v = LISTA[i], m = $('vdM' + i); if (!v || !m || !idOk(v)) return;
    var src = v.p === 'YouTube' ? 'https://www.youtube-nocookie.com/embed/' + v.id + '?autoplay=1&rel=0' : 'https://player.vimeo.com/video/' + v.id + '?autoplay=1';
    m.innerHTML = '<iframe src="' + src + '" title="' + esc(v.t) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>';
  }
  function carregar() {
    $('vdGrade').innerHTML = '<div class="vd-vazio">⏳ ' + X.carregando + '</div>';
    post({ acao: 'videos_lista' }).then(function (r) { LISTA = (r && r.videos) || []; render(); }, function () { $('vdGrade').innerHTML = '<div class="vd-vazio">⚠ ' + X.semNet + '</div>'; });
  }
  function msg(t, c) { var e = $('vdMsg'); e.innerHTML = t; e.className = 'ms ' + (c || ''); }
  function aoEntrar(resp) {
    cred = resp.credential; $('vdBotao').hidden = true; $('vdForm').hidden = false;
    var n = ''; try { n = JSON.parse(decodeURIComponent(Array.prototype.map.call(atob(cred.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')), function (c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join(''))).name || ''; } catch (e) { }
    if (n && !$('vAutor').value) $('vAutor').value = n;
    msg('', '');
  }
  function enviar() {
    var b = $('vEnviar');
    if (!cred) { msg('🔐 ' + X.entre, 'er'); return; }
    if (!$('vOk').checked) { msg('⚠ ' + X.marque, 'er'); return; }
    b.disabled = true; msg('⏳ ' + X.enviando, '');
    post({ acao: 'video_enviar', loginGoogle: cred, link: $('vLink').value.trim(), titulo: $('vTitulo').value, autor: $('vAutor').value, escola: $('vEscola').value, cidade: $('vCidade').value, desc: $('vDesc').value, autorizo: true })
      .then(function (r) {
        b.disabled = false;
        if (r && r.relogar) { cred = null; $('vdBotao').hidden = false; $('vdForm').hidden = true; msg('🔐 ' + X.relogar, 'er'); return; }
        if (r && r.ok) { msg('✔ ' + esc(r.msg), 'ok'); if (!r.ja) { $('vLink').value = ''; $('vTitulo').value = ''; $('vDesc').value = ''; } }
        else msg('⚠ ' + esc((r && r.msg) || X.erro), 'er');
      }, function () { b.disabled = false; msg('⚠ ' + X.semNet, 'er'); });
  }
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target.closest('[data-s],[data-f],.vd-play,#vEnviar') : null; if (!t) return;
    if (t.id === 'vEnviar') { enviar(); return; }
    if (t.hasAttribute('data-s')) { compartilhar(t.getAttribute('data-s'), t.getAttribute('data-k')); return; }
    if (t.hasAttribute('data-f')) { filtro = t.getAttribute('data-f'); render(); return; }
    tocar(+t.getAttribute('data-i'));
  });
  function iniciar(n) {
    if (!window.google || !google.accounts || !google.accounts.id) { if ((n || 0) < 100) setTimeout(function () { iniciar((n || 0) + 1); }, 200); return; }
    google.accounts.id.initialize({ client_id: CID, callback: aoEntrar, auto_select: false, cancel_on_tap_outside: true });
    google.accounts.id.renderButton($('vdBotao'), { theme: 'filled_blue', size: 'large', text: 'signin_with', shape: 'pill', locale: { pt: 'pt-BR', en: 'en', es: 'es-419' }[LG] });
  }
  if ($('vdSharePag')) $('vdSharePag').innerHTML = botoes('pag');
  carregar(); iniciar(0);
  window.SussaiVideos = { aoEntrar: aoEntrar, chave: chave, linkDe: linkDe, compartilhar: compartilhar, estado: function () { return { cred: cred, LISTA: LISTA }; } };
})();
