/* SUSSAI – página de login. Aberta pelo SUSSAI numa janelinha.
   Depois do login, devolve a confirmação do Google para a janela do SUSSAI. */
(function () {
  'use strict';
  var CLIENT_ID = '15890667708-hnm6mo385c0j1ud8om40glo2mf7mor05.apps.googleusercontent.com';
  var st = document.getElementById('status');
  function msg(t, cls) { st.textContent = t; st.className = cls || ''; }
  function dadosDoLogin(cred) {
    try {
      var p = cred.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      var json = decodeURIComponent(Array.prototype.map.call(atob(p), function (c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join(''));
      return JSON.parse(json);
    } catch (e) { return {}; }
  }
  function aoEntrar(resp) {
    var d = dadosDoLogin(resp.credential);
    if (!window.opener) { msg('Login feito como ' + (d.email || '?') + '. Para ativar, abra esta página pelo botão "Entrar com Google" do SUSSAI.', 'erro'); return; }
    window.opener.postMessage({ tipo: 'sussai-login', credencial: resp.credential, email: d.email || '', nome: d.name || '' }, '*');
    msg('✔ Conectado como ' + (d.email || '') + '. Voltando ao SUSSAI CLP…', 'ok');
    setTimeout(function () { window.close(); }, 1500);
  }
  function iniciar() {
    if (!window.google || !google.accounts || !google.accounts.id) { setTimeout(iniciar, 200); return; }
    google.accounts.id.initialize({ client_id: CLIENT_ID, callback: aoEntrar, auto_select: false, cancel_on_tap_outside: false });
    google.accounts.id.renderButton(document.getElementById('botao'), { theme: 'filled_blue', size: 'large', text: 'signin_with', shape: 'pill', locale: 'pt-BR' });
  }
  setTimeout(function () { if (!document.querySelector('#botao iframe, #botao div[role=button]')) msg('Carregando o login do Google… Se demorar, verifique a internet.'); }, 4000);
  iniciar();
})();
