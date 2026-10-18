/* SUSSAI – página inicial: capa com imagens reais passando, galeria, formulário de compra */
(function () {
  'use strict';
  var C = window.SUSSAI_CENAS || [], $ = function (id) { return document.getElementById(id); };
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var img = function (c) { return 'imagens/cena' + c.n + '.jpg'; };

  /* ---------- menu no celular ---------- */
  var bg = $('burger'), mn = $('menu');
  if (bg && mn) { bg.onclick = function () { mn.classList.toggle('aberto'); }; mn.addEventListener('click', function (e) { if (e.target.tagName === 'A') mn.classList.remove('aberto'); }); }

  /* ---------- capa: as 14 máquinas passando (imagens reais) ---------- */
  var sl = $('slides'), k = 0, T = 7000, t0 = Date.now(), parado = false, ims = [];
  if (sl && C.length) {
    C.forEach(function (c, i) { var im = document.createElement('img'); im.alt = c.nome; if (i < 2) im.src = img(c); else im.dataset.src = img(c); sl.appendChild(im); ims.push(im); });
    var pts = $('lgPontos');
    C.forEach(function (c, i) { var b = document.createElement('button'); b.title = c.n + ' – ' + c.nome; b.onclick = function () { mostra(i); }; pts.appendChild(b); });
  }
  function mostra(i) {
    k = (i + C.length) % C.length; t0 = Date.now();
    ims.forEach(function (im, j) { if (j === k) { if (im.dataset.src) { im.src = im.dataset.src; delete im.dataset.src; } im.classList.remove('on'); void im.offsetWidth; im.classList.add('on'); } else im.classList.remove('on'); });
    var nx = ims[(k + 1) % ims.length]; if (nx && nx.dataset.src) { nx.src = nx.dataset.src; delete nx.dataset.src; }   // pré-carrega a próxima
    var c = C[k];
    $('lgNum').textContent = 'CENA ' + c.n + (c.teste ? ' · NO TESTE GRÁTIS' : '');
    $('lgNome').textContent = c.ic + '  ' + (c.tit || c.nome);
    $('lgCap').textContent = c.cap || c.desc;
    Array.prototype.forEach.call($('lgPontos').children, function (b, j) { b.classList.toggle('on', j === k); });
  }
  if (C.length) mostra(0);
  var leg = $('legenda');
  if (leg) { leg.onmouseenter = function () { parado = true; }; leg.onmouseleave = function () { parado = false; t0 = Date.now() - (parseFloat($('lgBarra').style.width) || 0) / 100 * T; }; }
  setInterval(function () {
    if (!C.length || parado || document.hidden) return;
    var p = (Date.now() - t0) / T;
    if (p >= 1) { mostra(k + 1); p = 0; }
    $('lgBarra').style.width = (p * 100).toFixed(1) + '%';
  }, 100);
  /* vídeo da capa (opcional): se existir video/vitrine.mp4 ou .webm, ele substitui as imagens */
  var v = $('bgVideo');
  if (v) {
    ['mp4', 'webm'].forEach(function (x) { var s = document.createElement('source'); s.src = 'video/vitrine.' + x; s.type = 'video/' + x; v.appendChild(s); });
    v.addEventListener('playing', function () { v.classList.add('ok'); sl.style.display = 'none'; leg.style.display = 'none'; });
    v.load(); var pr = v.play(); if (pr && pr.catch) pr.catch(function () { });
  }

  /* ---------- galeria ---------- */
  var gal = $('galeria');
  if (gal) {
    gal.innerHTML = C.map(function (c, i) {
      return '<div class="card" data-i="' + i + '"><img src="' + img(c) + '" alt="' + esc(c.nome) + '" loading="lazy"><div>' +
        (c.teste ? '<span class="tag">no teste grátis</span>' : '') + '<span class="n">CENA ' + c.n + '</span><b>' + esc(c.ic + ' ' + c.nome) + '</b>' +
        '<span class="d">' + esc(c.desc) + '</span><div class="info">' + c.ent + ' entradas · ' + c.sai + ' saídas · ' + c.prog + ' programas · ' + c.def + ' defeitos</div></div></div>';
    }).join('');
    gal.addEventListener('click', function (e) { var c = e.target.closest('.card'); if (c) abreLb(+c.dataset.i); });
  }
  var li = 0;
  function abreLb(i) {
    li = (i + C.length) % C.length; var c = C[li];
    $('lbImg').src = img(c); $('lbImg').alt = c.nome;
    $('lbCap').innerHTML = '<b>Cena ' + c.n + ' – ' + esc(c.nome) + '</b>' + esc(c.desc) + (c.cap ? '<br><span style="color:#8b949e">' + esc(c.cap) + '</span>' : '');
    $('lb').hidden = false;
  }
  if ($('lb')) {
    $('lbX').onclick = function () { $('lb').hidden = true; };
    $('lbP').onclick = function () { abreLb(li - 1); }; $('lbN').onclick = function () { abreLb(li + 1); };
    $('lb').addEventListener('click', function (e) { if (e.target.id === 'lb') $('lb').hidden = true; });
  }

  /* ---------- formulário de compra: monta o e-mail completo ---------- */
  var PARA = 'contato.sussai@gmail.com', md = $('compra');
  function abreCompra(plano) {
    if (plano) { var s = $('cPlano'); for (var i = 0; i < s.options.length; i++) if (s.options[i].text === plano) s.selectedIndex = i; }
    grupo(); $('cMsg').textContent = ''; md.hidden = false;
    try { var g = JSON.parse(localStorage.getItem('sussai.pedido') || '{}'); ['cNome', 'cDoc', 'cFone', 'cEmail', 'cCidade', 'cInst'].forEach(function (id) { if (g[id] && !$(id).value) $(id).value = g[id]; }); } catch (e) { }
    setTimeout(function () { ($('cNome').value ? $('cFone') : $('cNome')).focus(); }, 50);
  }
  function grupo() { $('cGrupo').hidden = !/Coletiva/.test($('cPlano').value); }
  Array.prototype.forEach.call(document.querySelectorAll('[data-plano]'), function (b) { b.addEventListener('click', function () { abreCompra(b.getAttribute('data-plano')); }); });
  if (md) {
    $('cX').onclick = function () { md.hidden = true; };
    md.addEventListener('click', function (e) { if (e.target === md) md.hidden = true; });
    $('cPlano').onchange = grupo;
    $('cFone').addEventListener('input', function () {
      var d = this.value.replace(/\D/g, '').replace(/^55(?=\d{11})/, '').slice(0, 11);
      this.value = d.length > 6 ? '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7) : d.length > 2 ? '(' + d.slice(0, 2) + ') ' + d.slice(2) : d;
    });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { if (md) md.hidden = true; if ($('lb')) $('lb').hidden = true; } });
  function msg(t, ok) { var m = $('cMsg'); m.textContent = t; m.className = 'ms ' + (ok ? 'ok' : 'er'); }
  function pedido() {
    var v = function (id) { return ($(id).value || '').trim(); }, erro = null;
    ['cNome', 'cFone', 'cEmail', 'cCidade', 'cInst'].forEach(function (id) { $(id).classList.remove('erro'); });
    var marca = function (id, t) { $(id).classList.add('erro'); if (!erro) { erro = t; $(id).focus(); } };
    if (v('cNome').split(/\s+/).length < 2) marca('cNome', 'Escreva o seu nome completo (nome e sobrenome).');
    if (v('cFone').replace(/\D/g, '').length < 10) marca('cFone', 'Informe o celular/WhatsApp com DDD.');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v('cEmail'))) marca('cEmail', 'Informe um e-mail válido (o e-mail Google que vai usar no SUSSAI).');
    if (!v('cCidade')) marca('cCidade', 'Informe a cidade e o estado.');
    var col = /Coletiva/.test(v('cPlano'));
    if (col && !v('cInst')) marca('cInst', 'Informe o nome da escola ou empresa.');
    if (!erro && !$('cOk').checked) erro = 'Marque que você leu e aceita os Termos de uso.';
    if (erro) { msg('✖ ' + erro); return null; }
    try { var g = {}; ['cNome', 'cDoc', 'cFone', 'cEmail', 'cCidade', 'cInst'].forEach(function (id) { g[id] = v(id); }); localStorage.setItem('sussai.pedido', JSON.stringify(g)); } catch (e) { }
    var plano = v('cPlano'), curto = plano.split(' – ')[0];
    var L = ['Olá! Quero comprar uma licença do SUSSAI – Simulador de CLP 3D.', '',
      '=== PEDIDO ===', 'Plano: ' + plano, 'Forma de pagamento: ' + v('cPag'), '',
      '=== MEUS DADOS ===', 'Nome completo: ' + v('cNome'), 'CPF/CNPJ: ' + (v('cDoc') || '(não informado)'), 'Celular/WhatsApp: ' + v('cFone'),
      'E-mail Google para a licença: ' + v('cEmail'), 'Cidade/UF: ' + v('cCidade')];
    if (col) L.push('', '=== LICENÇA COLETIVA ===', 'Escola/empresa: ' + v('cInst'), 'Nº de computadores: ' + (v('cPcs') || '20'), 'E-mails Google dos computadores: ' + (v('cEmails') || '(envio depois)'));
    if (v('cObs')) L.push('', 'Observações: ' + v('cObs'));
    L.push('', 'Li e aceito os Termos de uso e a Política de privacidade (sussai-software.github.io).', '',
      'Aguardo os dados para pagamento. Depois da confirmação, a licença é liberada nesse e-mail Google', 'e eu baixo o SUSSAI Completo em https://sussai-software.github.io/#completo', '', 'Obrigado!', v('cNome'));
    return { assunto: 'Pedido de licença SUSSAI – ' + curto + ' – ' + v('cNome'), corpo: L.join('\n') };
  }
  if (md) {
    $('cGmail').onclick = function () {
      var p = pedido(); if (!p) return;
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(PARA) + '&su=' + encodeURIComponent(p.assunto) + '&body=' + encodeURIComponent(p.corpo), '_blank', 'noopener');
      msg('✔ O Gmail abriu com o pedido pronto. Confira e clique em Enviar.', true);
    };
    $('cMail').onclick = function () {
      var p = pedido(); if (!p) return;
      location.href = 'mailto:' + PARA + '?subject=' + encodeURIComponent(p.assunto) + '&body=' + encodeURIComponent(p.corpo);
      msg('✔ Abrindo o seu programa de e-mail… Se nada abrir, use “Enviar pelo Gmail” ou “Copiar mensagem”.', true);
    };
    $('cCopiar').onclick = function () {
      var p = pedido(); if (!p) return;
      var txt = 'Para: ' + PARA + '\nAssunto: ' + p.assunto + '\n\n' + p.corpo;
      var ok = function () { msg('✔ Mensagem copiada. Cole num e-mail para ' + PARA + '.', true); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(ok, function () { prompt('Copie a mensagem:', txt); });
      else { prompt('Copie a mensagem:', txt); ok(); }
    };
  }
  /* abrir o formulário direto por link: ...github.io/#comprar */
  if (location.hash === '#comprar' && md) abreCompra();
  window.SUSSAI_SITE = { abreCompra: abreCompra, pedido: pedido, mostra: mostra };
})();
