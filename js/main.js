// LUMEN DADOS - JavaScript
// Partes: 1. Acessibilidade  2. Menu  3. Abas  4. Pesquisa  5. Carrossel  6. Formulários


// 1. ACESSIBILIDADE: tema e tamanho da fonte
var html = document.documentElement;
var tamanho = 1;

function trocarTema(botao) {
  var escuro = html.dataset.tema === 'escuro';
  html.dataset.tema = escuro ? 'claro' : 'escuro';
  botao.textContent = escuro ? 'Modo escuro' : 'Modo claro';
}

function mudarFonte(valor) {
  tamanho = Math.min(1.5, Math.max(0.875, tamanho + valor));
  html.style.setProperty('--fonte', tamanho);
}

var botaoTema = document.getElementById('botao-tema');
if (botaoTema) {
  botaoTema.onclick = function () { trocarTema(botaoTema); };
  document.getElementById('fonte-maior').onclick = function () { mudarFonte(0.125); };
  document.getElementById('fonte-menor').onclick = function () { mudarFonte(-0.125); };
}


// 2. MENU (celular)
var botaoMenu = document.getElementById('botao-menu');
if (botaoMenu) {
  botaoMenu.onclick = function () {
    var aberto = document.getElementById('menu').classList.toggle('aberto');
    botaoMenu.setAttribute('aria-expanded', aberto);
  };
}


// 3. ABAS 
var botoesAba = document.querySelectorAll('.abas button');

botoesAba.forEach(function (botao) {
  botao.onclick = function () {
    // desativa todas as abas e painéis
    botoesAba.forEach(function (b) { b.classList.remove('ativo'); b.setAttribute('aria-selected', 'false'); });
    document.querySelectorAll('.painel').forEach(function (p) { p.classList.remove('ativo'); });
    // ativa a aba clicada e o painel dela
    botao.classList.add('ativo');
    botao.setAttribute('aria-selected', 'true');
    document.getElementById(botao.dataset.painel).classList.add('ativo');
    pesquisar();
  };
});


// 4. PESQUISA 
var campoBusca = document.getElementById('busca');

function pesquisar() {
  var texto = campoBusca.value.toLowerCase();
  var itens = document.querySelectorAll('.painel.ativo .item');
  var encontrados = 0;

  itens.forEach(function (item) {
    var combina = item.textContent.toLowerCase().includes(texto);
    item.hidden = !combina;
    if (combina) encontrados++;
  });

  document.getElementById('resultado').textContent = encontrados + ' resultado(s) nesta aba';
}

if (campoBusca) {
  campoBusca.oninput = pesquisar;
  pesquisar();
}


// 5. CARROSSEL 
var slides = document.querySelectorAll('.slide');
var atual = 0;

function mostrarSlide(numero) {
  slides[atual].classList.remove('ativo');
  atual = (numero + slides.length) % slides.length;   // volta ao início/fim
  slides[atual].classList.add('ativo');
}

if (slides.length > 0) {
  document.querySelector('.anterior').onclick = function () { mostrarSlide(atual - 1); };
  document.querySelector('.proximo').onclick  = function () { mostrarSlide(atual + 1); };
}


// 6. FORMULÁRIOS (contato e login)
document.querySelectorAll('form').forEach(function (form) {
  form.onsubmit = function (evento) {
    evento.preventDefault();
    form.classList.add('validado');
    var aviso = form.querySelector('.aviso');

    if (form.checkValidity()) {
      aviso.className = 'aviso ok';
      aviso.textContent = form.dataset.sucesso;
      form.reset();
      form.classList.remove('validado');
    } else {
      aviso.className = 'aviso erro-geral';
      aviso.textContent = 'Preencha os campos destacados.';
    }
  };
});