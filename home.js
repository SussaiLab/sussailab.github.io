/* SUSSAI – página inicial: cenas passando, legenda e fundo animado */
(function () {
  'use strict';
  var CENAS = [
    ['📦', 'Esteira simples (sensor + caixa)', 'A caixa no sensor B1 liga a esteira; ao cair no recipiente (B2), ela desliga. A primeira lógica de todo aluno.'],
    ['🌀', 'Ventilador industrial (partida direta)', 'Partida direta com selo, sinalização e relé térmico – o clássico do comando elétrico.'],
    ['🧪', 'Tanque misturador (bomba + agitador)', 'A bomba enche, o agitador mistura por tempo e o produto pronto sai pela válvula.'],
    ['🚸', 'Semáforo de uma via com travessia de pedestres', 'Semáforo sob demanda: os carros ficam no verde até o pedestre apertar a botoeira.'],
    ['🚦', 'Semáforo de duas vias com pedestres', 'Dois semáforos e travessia por botoeira. Se as duas vias abrirem juntas, há colisão!'],
    ['✳', 'Cruzamento de 4 vias (4 semáforos)', 'Duas avenidas de mão dupla, semáforos de carros e de pedestres com botoeiras.'],
    ['🚧', 'Cancela de estacionamento', 'Cancela articulada: o carro chega, o laço detecta, a cancela abre e fecha depois da passagem.'],
    ['🍾', 'Envase de garrafas (silo + válvula)', 'A garrafa para sob o silo, a válvula enche, o sensor de cheio fecha e a próxima chega.'],
    ['🏢', 'Caixa d\'água de prédio (bombas A/B)', 'Cisterna e caixa superior com boia: automático ou manual, com bomba reserva.'],
    ['🔄', 'Mesa giratória (separa por tamanho)', 'Sensores identificam a caixa e a mesa gira para separar peças altas e baixas.'],
    ['🛤', '4 esteiras em cascata + operador', 'Acúmulo de caixas: as esteiras param em cascata enquanto o operador empilha no palete.'],
    ['🗜', 'Prensa hidráulica – bimanual e cortina de luz (NR-12)', 'A prensa só desce com as duas mãos nos botões ao mesmo tempo; a cortina de luz para tudo.'],
    ['🏭', 'Esteira com separação (avançado)', 'Linha completa: alimentador pneumático, sensores, desviador, quadro elétrico e emergência.'],
    ['🛗', 'Elevador de pessoas (4 andares)', 'Chamadas com registro, sensores de andar, porta automática com cortina de luz e relé térmico.']
  ];
  var n2 = function (i) { return (i < 9 ? '0' : '') + (i + 1); };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  /* ---- trilho de cenas (2 voltas para o movimento contínuo) ---- */
  var tr = document.getElementById('trilho');
  if (tr) {
    var html = '';
    for (var v = 0; v < 2; v++) CENAS.forEach(function (c, i) {
      html += '<div class="cena"' + (v ? ' aria-hidden="true"' : '') + '>' +
        '<img src="imagens/cena' + n2(i) + '.jpg" alt="' + esc(c[1]) + '" loading="lazy" data-ic="' + c[0] + '">' +
        '<div class="t"><span class="n">CENA ' + n2(i) + '</span><b>' + esc(c[1]) + '</b><span>' + esc(c[2]) + '</span></div></div>';
    });
    tr.innerHTML = html;
    // sem foto da cena? mostra o ícone no lugar
    Array.prototype.forEach.call(tr.querySelectorAll('img'), function (im) {
      im.onerror = function () { var d = document.createElement('div'); d.className = 'ic'; d.textContent = im.getAttribute('data-ic'); im.replaceWith(d); };
    });
  }

  /* ---- vídeo de fundo: se existir, aparece; se não, fica a animação ---- */
  var vid = document.getElementById('bgVideo'), cv = document.getElementById('bgFabrica'), leg = document.getElementById('legenda');
  var usandoVideo = false;
  if (vid) {
    vid.addEventListener('playing', function () { usandoVideo = true; vid.classList.add('ok'); if (cv) cv.style.display = 'none'; if (leg) leg.style.display = 'none'; });
    var src = vid.querySelector('source');
    if (src) src.addEventListener('error', function () { vid.remove(); vid = null; });
  }

  /* ---- legenda com o nome das cenas (como na vitrine do programa) ---- */
  var k = 0, T = 5000, t0 = Date.now();
  var lgNum = document.getElementById('lgNum'), lgNome = document.getElementById('lgNome'), lgBarra = document.getElementById('lgBarra');
  function trocaLegenda() {
    if (!lgNome) return;
    lgNome.style.opacity = 0;
    setTimeout(function () { lgNum.textContent = 'CENA ' + n2(k); lgNome.textContent = CENAS[k][0] + '  ' + CENAS[k][1]; lgNome.style.opacity = 1; }, 350);
  }
  trocaLegenda();

  /* ---- fundo animado: linha industrial (esteira, caixas, sensor, tanque, semáforo, Ladder) ---- */
  var cx = cv && cv.getContext ? cv.getContext('2d') : null, W = 0, H = 0, DPR = 1;
  function tam() { if (!cv) return; DPR = Math.min(window.devicePixelRatio || 1, 2); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * DPR; cv.height = H * DPR; }
  window.addEventListener('resize', tam); tam();
  var caixas = [0, 0.33, 0.66], quieto = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function ret(x, y, w, h, c) { cx.fillStyle = c; cx.fillRect(x, y, w, h); }
  function luz(x, y, r, c, on) {
    cx.beginPath(); cx.arc(x, y, r, 0, 7); cx.fillStyle = on ? c : '#1d242c'; cx.fill();
    if (on) { cx.save(); cx.globalAlpha = 0.25; cx.beginPath(); cx.arc(x, y, r * 2.6, 0, 7); cx.fill(); cx.restore(); }
  }
  function quadro(t) {
    if (!cx || usandoVideo) return;
    var s = H / 900, base = H * 0.72, x0 = W * 0.38, x1 = W * 0.98;
    cx.setTransform(DPR, 0, 0, DPR, 0, 0);
    var g = cx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#0b1420'); g.addColorStop(1, '#05080c'); cx.fillStyle = g; cx.fillRect(0, 0, W, H);
    // grade do piso (perspectiva)
    cx.strokeStyle = '#ffffff0d'; cx.lineWidth = 1;
    for (var i = 0; i < 26; i++) { var yy = base + 40 * s + Math.pow(i / 25, 2) * (H - base); cx.beginPath(); cx.moveTo(0, yy); cx.lineTo(W, yy); cx.stroke(); }
    for (i = -12; i <= 12; i++) { cx.beginPath(); cx.moveTo(W * 0.66 + i * 40 * s, base + 40 * s); cx.lineTo(W * 0.66 + i * 220 * s, H); cx.stroke(); }
    // Ladder ao fundo (linhas acendendo)
    var lx = W * 0.42, ly = H * 0.12, lw = W * 0.5, lh = H * 0.3;
    cx.strokeStyle = '#2f81f733'; cx.lineWidth = 2 * s;
    cx.beginPath(); cx.moveTo(lx, ly); cx.lineTo(lx, ly + lh); cx.moveTo(lx + lw, ly); cx.lineTo(lx + lw, ly + lh); cx.stroke();
    for (i = 0; i < 4; i++) {
      var ry = ly + (i + 0.5) * lh / 4, on = ((t / 1400 + i * 0.7) % 3) < 1.6;
      cx.strokeStyle = on ? '#56d36488' : '#2f81f733'; cx.beginPath(); cx.moveTo(lx, ry); cx.lineTo(lx + lw, ry); cx.stroke();
      for (var c = 0; c < 2; c++) { var cxp = lx + lw * (0.18 + c * 0.25); ret(cxp - 10 * s, ry - 12 * s, 3 * s, 24 * s, on ? '#56d364aa' : '#2f81f755'); ret(cxp + 7 * s, ry - 12 * s, 3 * s, 24 * s, on ? '#56d364aa' : '#2f81f755'); }
      cx.beginPath(); cx.arc(lx + lw * 0.86, ry, 12 * s, 0, 7); cx.strokeStyle = on ? '#56d364cc' : '#2f81f755'; cx.stroke();
    }
    // tanque
    var tx = W * 0.44, ty = base - 250 * s, tw = 90 * s, th = 170 * s, nv = (Math.sin(t / 2600) * 0.5 + 0.5);
    ret(tx, ty, tw, th, '#1b2733'); ret(tx + 6 * s, ty + 6 * s + (th - 12 * s) * (1 - nv), tw - 12 * s, (th - 12 * s) * nv, nv > 0.6 ? '#2ea043aa' : '#1f6febaa');
    ret(tx + tw * 0.45, ty - 30 * s, 8 * s, 30 * s, '#3a4856');
    // semáforo
    var sx = W * 0.92, sy = base - 290 * s, f = (t / 1000) % 9;
    ret(sx - 3 * s, sy + 90 * s, 6 * s, 200 * s, '#3a4856'); ret(sx - 18 * s, sy, 36 * s, 96 * s, '#11161c');
    luz(sx, sy + 16 * s, 10 * s, '#ff4d4d', f >= 6); luz(sx, sy + 48 * s, 10 * s, '#ffcc00', f >= 4.5 && f < 6); luz(sx, sy + 80 * s, 10 * s, '#3fdc5a', f < 4.5);
    // esteira
    var ey = base - 20 * s, eh = 26 * s;
    ret(x0, ey, x1 - x0, eh, '#20262d'); ret(x0, ey, x1 - x0, 4 * s, '#3a4856');
    cx.strokeStyle = '#ffffff12'; var off = (t / 12) % (30 * s);
    for (var xx = x0 + off; xx < x1; xx += 30 * s) { cx.beginPath(); cx.moveTo(xx, ey + 6 * s); cx.lineTo(xx, ey + eh); cx.stroke(); }
    for (i = 0; i < 8; i++) ret(x0 + i * (x1 - x0) / 7.3, ey + eh, 8 * s, 60 * s, '#2b333c');
    // sensor B1 (feixe acende quando a caixa passa)
    var bx = x0 + (x1 - x0) * 0.55, det = false;
    // caixas
    for (i = 0; i < caixas.length; i++) {
      if (!quieto) caixas[i] = (caixas[i] + 0.0009) % 1;
      var px = x0 + (x1 - x0 + 120 * s) * caixas[i] - 120 * s, bw = 64 * s;
      if (px + bw < x0 || px > x1) continue;
      if (px < bx && px + bw > bx) det = true;
      ret(px, ey - 54 * s, bw, 54 * s, '#b07a3c'); ret(px, ey - 54 * s, bw, 8 * s, '#c99050'); ret(px + bw * 0.42, ey - 54 * s, bw * 0.16, 54 * s, '#9a6a33');
    }
    ret(bx - 4 * s, ey - 110 * s, 8 * s, 50 * s, '#3a4856');
    cx.strokeStyle = det ? '#ff5c5ccc' : '#ff5c5c33'; cx.lineWidth = 2 * s; cx.beginPath(); cx.moveTo(bx, ey - 62 * s); cx.lineTo(bx, ey - 2 * s); cx.stroke();
    luz(bx, ey - 116 * s, 6 * s, '#ffcc00', det);
    // painel com botões
    var px2 = W * 0.6, py2 = base - 210 * s;
    ret(px2, py2, 90 * s, 120 * s, '#d9dde1'); ret(px2 + 4 * s, py2 + 4 * s, 82 * s, 112 * s, '#c3c8cd');
    luz(px2 + 25 * s, py2 + 30 * s, 9 * s, '#3fdc5a', true); luz(px2 + 65 * s, py2 + 30 * s, 9 * s, '#ff4d4d', false);
    luz(px2 + 45 * s, py2 + 80 * s, 16 * s, '#e5322d', true); ret(px2 + 25 * s, py2 + 98 * s, 40 * s, 6 * s, '#ffcc00');
  }
  function loop() {
    var agora = Date.now(), p = (agora - t0) / T;
    if (p >= 1) { t0 = agora; k = (k + 1) % CENAS.length; trocaLegenda(); p = 0; }
    if (lgBarra) lgBarra.style.width = (p * 100).toFixed(1) + '%';
    quadro(agora);
    if (!usandoVideo || leg) requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
