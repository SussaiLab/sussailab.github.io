/* gerado do próprio SUSSAI (nomes, descrições e legendas da capa) */
var SUSSAI_CENAS = [
{
"n": "01",
"ic": "📦",
"nome": "Esteira simples (sensor + caixa)",
"desc": "Uma esteira com dois sensores: B1 no início da esteira e B2 na boca do recipiente. A caixa em B1 liga a esteira; quando ela cai no recipiente e passa por B2, a esteira desliga. Uma caixa por vez.",
"cap": "LIGA liga o sistema M01. A caixa no sensor B1 I03 liga a esteira Q01 com selo. No fim ela cai no recipiente e passa pela barreira B2 I04: o contato NF de I04 abre o selo e a esteira para. Uma caixa por vez.",
"tit": "Esteira: liga no B1, desliga no B2",
"teste": true,
"ent": 6,
"sai": 3,
"prog": 4,
"def": 6
},
{
"n": "02",
"ic": "🌀",
"nome": "Ventilador industrial (partida direta)",
"desc": "Monte a partida direta com selo, sinalização e relé térmico. Para fazer valendo NOTA, use o Modo Gamificação.",
"cap": "Acompanhe a energia (verde): LIGA I01 energiza Q01 e o contato de selo Q01 mantém o motor ligado. DESLIGA I02 e o térmico FT1 I03 são NF no campo e ficam em série – apertando DESLIGA a linha abre e o motor para.",
"tit": "Partida direta com selo e relé térmico",
"teste": true,
"ent": 4,
"sai": 4,
"prog": 3,
"def": 2
},
{
"n": "03",
"ic": "🧪",
"nome": "Tanque misturador (bomba + agitador)",
"desc": "A bomba enche o tanque, o agitador (hélice) bate o líquido – depois de 5 s mexendo ele muda de cor – e o produto pronto sai pela válvula de saída.",
"cap": "Ciclo automático: a bomba enche até o nível alto (LSH), o agitador mistura por 5 s – o líquido muda de azul para verde – e a válvula de saída descarrega o produto. Depois começa o próximo lote.",
"tit": "",
"teste": true,
"ent": 7,
"sai": 6,
"prog": 4,
"def": 7
},
{
"n": "04",
"ic": "🚸",
"nome": "Semáforo de uma via (mão dupla) com travessia de pedestres",
"desc": "Rua de mão dupla (vai e vem) com faixa de pedestres no meio da quadra. É um semáforo SOB DEMANDA: os carros ficam no VERDE o tempo todo e o semáforo só fecha quando um pedestre aperta a botoeira. Depois do verde mínimo, os dois semáforos dos carros vão juntos para o amarelo, fecham, e o boneco fica verde.",
"cap": "M02 guarda o pedido da botoeira (selo); M03 só inicia o ciclo depois do verde mínimo T09. Cascata – o DN de um liga o próximo: T01 verde, T02 amarelo, T03 vermelho geral, T04 boneco verde, T05 mão piscando, T06 fim do ciclo.",
"tit": "Semáforo sob demanda: temporizadores em cascata",
"teste": false,
"ent": 4,
"sai": 6,
"prog": 2,
"def": 3
},
{
"n": "05",
"ic": "🚦",
"nome": "Semáforo de duas vias com pedestres",
"desc": "Cruzamento de duas ruas de mão única com dois semáforos e travessia de pedestres por botoeira. Se as duas vias abrirem juntas, há colisão!",
"cap": "Cruzamento de duas ruas de mão única: verde → amarelo → vermelho geral, alternando as vias A e B – nunca abertas juntas. O pedestre aperta a botoeira e, no fim do ciclo, entra a travessia com boneco verde.",
"tit": "",
"teste": false,
"ent": 5,
"sai": 8,
"prog": 3,
"def": 4
},
{
"n": "06",
"ic": "✳",
"nome": "Cruzamento de 4 vias (4 semáforos) com pedestres",
"desc": "Duas avenidas de mão dupla: 4 semáforos de carros (A1/A2 ligados juntos na via A, B1/B2 na via B) e semáforos de pedestres com botoeiras nas 4 esquinas.",
"cap": "Quatro semáforos em ciclo por temporizadores: verde → amarelo → vermelho geral, alternando as vias A e B. Quando um pedestre aperta a botoeira, entra a fase de pedestres com boneco verde e mão vermelha piscando.",
"tit": "",
"teste": false,
"ent": 5,
"sai": 8,
"prog": 3,
"def": 4
},
{
"n": "07",
"ic": "🚧",
"nome": "Cancela / portão de estacionamento",
"desc": "Cancela ARTICULADA (dois braços) numa ilha no meio da pista, alta o bastante para passar caminhão. O carro chega, o laço detecta, a cancela abre. Com carro embaixo ela não desce; depois que o carro passa, fecha. Os carros chegam com espaçamento aleatório.",
"cap": "O carro no laço B1 I03 liga M02 e a cancela abre Q01 até o fim de curso FA I06. Aberta, T01 conta 5 s e o contato NF T01 derruba M02: a cancela fecha Q02 – mas nunca com carro embaixo (barreira B2 I04).",
"tit": "Cancela com temporizador",
"teste": false,
"ent": 9,
"sai": 5,
"prog": 2,
"def": 5
},
{
"n": "08",
"ic": "🍾",
"nome": "Envase de garrafas (silo + válvula)",
"desc": "A garrafa para embaixo do silo, a válvula abre e enche; o sensor de cheio fecha a válvula e a garrafa segue. Vem a próxima.",
"cap": "A garrafa no bico (B1 I03) abre o contato NF da esteira Q01 e liga a válvula Y1 Q02. O sensor de cheio B2 I04 liga M02 com selo: a válvula fecha e a esteira leva a garrafa embora.",
"tit": "Envase com sensor de posição e de cheio",
"teste": false,
"ent": 7,
"sai": 5,
"prog": 3,
"def": 6
},
{
"n": "09",
"ic": "🏢",
"nome": "Caixa d'água de prédio (bombas A/B)",
"desc": "A cisterna do térreo manda água para a caixa do último andar pela bomba A ou B. Automático pela boia ou manual pelos botões.",
"cap": "Modo AUTOMÁTICO: quando a boia da caixa do último andar pede água, a bomba escolhida (A ou B) recalca da cisterna. O eletrodo da cisterna protege a bomba contra trabalhar a seco; A e B são intertravadas.",
"tit": "",
"teste": false,
"ent": 9,
"sai": 5,
"prog": 3,
"def": 8
},
{
"n": "10",
"ic": "🔄",
"nome": "Mesa giratória (separa por tamanho)",
"desc": "Sensor B4 no fim da esteira segura a caixa até a mesa estar em 0° e livre. Na mesa, o sensor inferior vê que a caixa chegou e o superior vê se ela é alta. Alta → DIREITA, baixa → ESQUERDA.",
"cap": "O sensor B4 segura a caixa no fim da esteira até a mesa estar em 0° e livre. Na mesa, o sensor inferior detecta a chegada e o superior a altura: caixa ALTA gira para a direita, caixa BAIXA para a esquerda.",
"tit": "",
"teste": false,
"ent": 13,
"sai": 6,
"prog": 2,
"def": 9
},
{
"n": "11",
"ic": "🛤",
"nome": "4 esteiras em cascata (acúmulo) + operador",
"desc": "Quatro esteiras em sequência; no fim um operador pega as caixas e empilha no palete. Se as caixas acumulam, as esteiras param em cascata (4 → 3 → 2 → 1) e voltam quando o operador libera a última.",
"cap": "Quatro esteiras levam as caixas até o operador, que empilha no palete. Cada esteira só entrega a caixa se a seguinte estiver andando: com acúmulo, elas param em cascata (4 → 3 → 2 → 1) e voltam em sequência.",
"tit": "",
"teste": false,
"ent": 11,
"sai": 7,
"prog": 3,
"def": 8
},
{
"n": "12",
"ic": "🗜",
"nome": "Prensa hidráulica – comando bimanual e cortina de luz (NR-12)",
"desc": "A prensa só desce com as DUAS mãos nos botões do bimanual (ao mesmo tempo). A cortina de luz para a prensa se alguém colocar a mão na área de prensagem.",
"cap": "T01 (0,5 s) mede a simultaneidade: M02 só liga se as DUAS mãos apertarem antes de T01. Com M02, M03 (segurança OK: cortina livre, emergência, REARME) e sem M04, Y1 desce; chegou em S3 ou soltou as mãos, Y2 sobe.",
"tit": "Bimanual com simultaneidade (NR-12)",
"teste": false,
"ent": 10,
"sai": 7,
"prog": 3,
"def": 4
},
{
"n": "13",
"ic": "🏭",
"nome": "Esteira com separação (avançado)",
"desc": "Linha completa: alimentador pneumático, sensores, desviador, quadro elétrico, emergência NR-12 e relé térmico.",
"cap": "Seletora em AUTO + LIGA: o alimentador pneumático empurra uma caixa a cada 3,5 s, o sensor B4 identifica as caixas ALTAS e o desviador as separa; o contador fecha o lote de 10 caixas. Emergência NR-12 e relé térmico.",
"tit": "",
"teste": false,
"ent": 15,
"sai": 8,
"prog": 4,
"def": 14
},
{
"n": "14",
"ic": "🛗",
"nome": "Elevador de pessoas (4 andares)",
"desc": "Elevador com térreo + 3 andares: chamadas com registro, sensores de andar, porta automática com cortina de luz, máquina de tração com relé térmico. Aperte um botão de chamada: VOCÊ aparece no andar, entra na cabine e escolhe para qual andar quer ir.",
"cap": "Térreo + 3 andares com passageiros: cada chamada acende a lâmpada de registro, a cabine guarda o sentido (subindo/descendo) até atender as chamadas e só anda com a porta fechada. Cortina de luz protege a porta.",
"tit": "",
"teste": false,
"ent": 13,
"sai": 8,
"prog": 2,
"def": 4
}
];

/* SUSSAI – página inicial: capa com imagens reais passando, galeria, formulário de compra */
(function () {
  'use strict';
  var C = (typeof SUSSAI_CENAS !== 'undefined' && SUSSAI_CENAS) || window.SUSSAI_CENAS || [], $ = function (id) { return document.getElementById(id); };
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var img = function (c) { return 'cena' + c.n + '.jpg'; };
  /* imagem não encontrada: tenta a pasta imagens/ (site antigo) e, se faltar, mostra o ícone da máquina */
  document.addEventListener('error', function (e) {
    var im = e.target; if (!im || im.tagName !== 'IMG' || !/cena\d\d\.jpg/.test(im.src || '')) return;
    if (!/imagens\//.test(im.src)) { im.src = 'imagens/' + im.src.split('/').pop(); return; }
    im.removeAttribute('src'); im.classList.add('semfoto');
  }, true);


  /* ---------- estatísticas ANÔNIMAS (só o dono vê, na planilha e no e-mail) ----------
     Manda só: evento, plano clicado, um número aleatório do navegador, de onde veio
     (ex.: linkedin.com) e se é celular. Sem nome, e-mail ou IP.
     O dono não entra na conta: abra uma vez o site com  #dono  no fim do endereço. */
  var STAT_URL = 'https://script.google.com/macros/s/AKfycbzUmiNAeX4wbS7guwxjm8zCPOKOhLBbbenZhcpfXmEKk3cpC1--naS5TjsgfWDqY3ggTw/exec';
  var dono = false, vid = 'anon';
  try {
    if (location.hash === '#dono') { localStorage.setItem('sussai.dono', '1'); alert('Pronto: este navegador não conta mais nas estatísticas do site.'); }
    if (location.hash === '#visitante') { localStorage.removeItem('sussai.dono'); }
    dono = localStorage.getItem('sussai.dono') === '1';
    vid = localStorage.getItem('sussai.vid');
    if (!vid) { vid = (Date.now().toString(36) + Math.random().toString(36).slice(2, 8)).slice(-12); localStorage.setItem('sussai.vid', vid); }
  } catch (e) { }
  function origem() {
    try {
      var m = /[?&]utm_source=([^&#]+)/.exec(location.search || ''); if (m) return decodeURIComponent(m[1]).slice(0, 40);
      var r = document.referrer || ''; if (!r) return 'direto';
      var h = r.split('/')[2] || ''; if (/github\.io$/.test(h)) return 'direto';
      return h.replace(/^www\./, '').replace(/^(l|lnkd)\./, '').replace(/^(m|mobile)\./, '');
    } catch (e) { return 'direto'; }
  }
  function ev(nome, det) {
    if (dono) return;
    try {
      var s = JSON.stringify({ acao: 'evento', ev: nome, det: det || '', v: vid, o: origem(),
        d: /Mobi|Android|iPhone/i.test((navigator && navigator.userAgent) || '') ? 'celular' : 'computador' });
      if (navigator && navigator.sendBeacon && navigator.sendBeacon(STAT_URL, new Blob([s], { type: 'text/plain' }))) return;
      if (typeof fetch === 'function') fetch(STAT_URL, { method: 'POST', mode: 'no-cors', body: s, keepalive: true });
    } catch (e) { }
  }
  ev('visita');
  /* cliques em links: downloads, manual, e-mails */
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a') : null; if (!a) return;
    var h = a.getAttribute('href') || '';
    if (/SUSSAI_Teste_Windows\.zip/.test(h)) ev('download_teste');
    else if (/SUSSAI_Completo\.zip/.test(h)) ev('download_completo');
    else if (/Manual_do_Usuario\.pdf/.test(h)) ev('manual');
    else if (/^mailto:/.test(h)) ev(/avisado/i.test(decodeURIComponent(h)) ? 'aviso' : 'contato');
  }, true);

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
    grupo(); $('cMsg').textContent = ''; md.hidden = false; ev('comprar_abriu', $('cPlano').value);
    try { var g = JSON.parse(localStorage.getItem('sussai.pedido') || '{}'); ['cNome', 'cDoc', 'cFone', 'cEmail', 'cCidade', 'cInst'].forEach(function (id) { if (g[id] && !$(id).value) $(id).value = g[id]; }); } catch (e) { }
    setTimeout(function () { ($('cNome').value ? $('cFone') : $('cNome')).focus(); }, 50);
  }
  function grupo() { $('cGrupo').hidden = !/Coletiva/.test($('cPlano').value); }
  Array.prototype.forEach.call(document.querySelectorAll('[data-plano]'), function (b) { b.addEventListener('click', function () { ev('plano', b.getAttribute('data-plano')); abreCompra(b.getAttribute('data-plano')); }); });
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
      ev('comprar_enviou', $('cPlano').value.split(' – ')[0] + ' (Gmail)');
      msg('✔ O Gmail abriu com o pedido pronto. Confira e clique em Enviar.', true);
    };
    $('cMail').onclick = function () {
      var p = pedido(); if (!p) return;
      location.href = 'mailto:' + PARA + '?subject=' + encodeURIComponent(p.assunto) + '&body=' + encodeURIComponent(p.corpo);
      ev('comprar_enviou', $('cPlano').value.split(' – ')[0] + ' (e-mail)');
      msg('✔ Abrindo o seu programa de e-mail… Se nada abrir, use “Enviar pelo Gmail” ou “Copiar mensagem”.', true);
    };
    $('cCopiar').onclick = function () {
      var p = pedido(); if (!p) return;
      ev('comprar_enviou', $('cPlano').value.split(' – ')[0] + ' (copiou)');
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
