/* SussaiLab – página inicial (rev66z): SONS REAIS do SussaiLab CLP
   • vitrine: botão "Ligar o som" – toca o som da máquina que está na tela e troca junto com as imagens
   • "Ouça as máquinas": cada cartão toca o som daquela cena
   • placar do Modo Gamificação (nota subindo) quando a seção aparece na tela */
(function () {
  'use strict';
  var TX = {"pt": {"ligar": "Ligar o som", "desligar": "Som ligado", "tocando": "som da cena", "semSom": "cena sem motor"}, "en": {"ligar": "Turn sound on", "desligar": "Sound on", "tocando": "scene sound", "semSom": "scene without motor"}, "es": {"ligar": "Activar sonido", "desligar": "Sonido activado", "tocando": "sonido de la escena", "semSom": "escena sin motor"}}, SONS = {"1": "s01_ventilador", "2": "s02_esteira", "3": "s03_cancela", "4": "s04_predio", "5": "s02_esteira", "7": "s08_transito", "8": "s08_transito", "9": "s08_transito", "10": "s10_tanque", "11": "s02_esteira", "12": "s12_prensa", "13": "s13_elevador", "14": "s14_envase", "15": "s15_avancada"};
  var LG = String(document.documentElement.lang || 'pt').slice(0, 2).toLowerCase(); if (!TX[LG]) LG = 'pt';
  var X = TX[LG];
  function $(id) { return document.getElementById(id); }
  var VOL = 0.7; try { var v = parseFloat(localStorage.getItem('sussailab.vol')); if (v >= 0 && v <= 1) VOL = v; } catch (e) { }
  var heroOn = false, atual = 0, ativo = null, tile = null;
  function novoAudio(n, loop) { var a = new Audio(SONS[n] + '.wav'); a.loop = !!loop; a.preload = 'auto'; a.volume = 0; return a; }
  function fade(a, alvo, ms, fim) {
    if (!a) { if (fim) fim(); return; }
    var v0 = a.volume, t0 = Date.now();
    (function passo() { var k = Math.min(1, (Date.now() - t0) / ms); try { a.volume = Math.max(0, Math.min(1, v0 + (alvo - v0) * k)); } catch (e) { }
      if (k < 1) setTimeout(passo, 40); else if (fim) fim(); })();
  }
  function parar(a) { if (!a) return; fade(a, 0, 350, function () { try { a.pause(); } catch (e) { } }); }
  function tocarHero(n) {
    var velho = ativo; ativo = null; parar(velho);
    var leg = $('zSomCena');
    if (!heroOn) { if (leg) leg.textContent = ''; return; }
    if (!SONS[n]) { if (leg) leg.textContent = X.semSom; return; }
    var a = novoAudio(n, true); ativo = a;
    var p = a.play(); if (p && p.catch) p.catch(function () { });
    fade(a, VOL, 500);
    if (leg) leg.textContent = '♪ ' + X.tocando + ' ' + ('0' + n).slice(-2);
  }
  function marcarBotao() {
    var b = $('zSom'); if (!b) return;
    b.classList.toggle('on', heroOn);
    b.innerHTML = heroOn ? '<i class="z-eq"><b></b><b></b><b></b><b></b></i>' + X.desligar : '🔊 ' + X.ligar;
    b.setAttribute('aria-pressed', heroOn ? 'true' : 'false');
  }
  function pararTile() { if (tile) { tile.el.classList.remove('tocando'); parar(tile.a); tile = null; } }
  var bs = $('zSom');
  if (bs) bs.onclick = function () { heroOn = !heroOn; pararTile(); marcarBotao(); tocarHero(atual); };
  var vol = $('zVol');
  if (vol) { vol.value = Math.round(VOL * 100); vol.oninput = function () { VOL = vol.value / 100; try { localStorage.setItem('sussailab.vol', VOL); } catch (e) { }
    if (ativo) ativo.volume = VOL; if (tile && tile.a) tile.a.volume = VOL; }; }
  /* a vitrine troca de imagem por CSS: cada imagem avisa quando aparece (animationstart / animationiteration) */
  var SL = document.querySelectorAll('.z-sl');
  for (var i = 0; i < SL.length; i++) (function (el) {
    var n = +el.getAttribute('data-n');
    function vez() { atual = n; if (heroOn) tocarHero(n); }
    el.addEventListener('animationstart', vez); el.addEventListener('animationiteration', vez);
  })(SL[i]);
  atual = SL.length ? +SL[0].getAttribute('data-n') : 1;
  /* cartões "Ouça as máquinas" */
  var TL = document.querySelectorAll('[data-som]');
  for (var j = 0; j < TL.length; j++) (function (el) {
    el.onclick = function () {
      var n = +el.getAttribute('data-som'), mesmo = tile && tile.el === el;
      pararTile();
      if (heroOn) { heroOn = false; marcarBotao(); tocarHero(atual); }
      if (mesmo) return;
      var a = novoAudio(n, false); tile = { el: el, a: a }; el.classList.add('tocando');
      a.onended = function () { if (tile && tile.a === a) { el.classList.remove('tocando'); tile = null; } };
      var p = a.play(); if (p && p.catch) p.catch(function () { });
      fade(a, VOL, 250);
    };
  })(TL[j]);
  document.addEventListener('visibilitychange', function () { if (document.hidden) { pararTile(); if (heroOn) { heroOn = false; marcarBotao(); tocarHero(atual); } } });
  marcarBotao();
  /* placar do Modo Gamificação: a nota sobe quando a seção aparece */
  var hud = $('zHud');
  function animarHud() {
    if (!hud || hud.getAttribute('data-ok')) return; hud.setAttribute('data-ok', '1'); hud.classList.add('vivo');
    var nota = $('zNota'), t0 = Date.now();
    (function passo() { var k = Math.min(1, (Date.now() - t0) / 2600), v = 10 * (1 - Math.pow(1 - k, 3));
      if (nota) nota.textContent = v.toFixed(1).replace('.', LG === 'en' ? '.' : ',');
      if (k < 1) setTimeout(passo, 40); })();
  }
  if (hud) {
    if ('IntersectionObserver' in window) { var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { animarHud(); io.disconnect(); } }); }, { threshold: 0.35 }); io.observe(hud); }
    else animarHud();
  }
  window.SussaiSom = { ligar: function () { if (!heroOn) bs.onclick(); }, get on() { return heroOn; }, get atual() { return atual; }, get tile() { return tile; } };
})();
