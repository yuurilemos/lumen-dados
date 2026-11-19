# Lumen Dados

Site de uma empresa fictícia de dados, feito para o Projeto Final de Desenvolvimento de Interfaces (2/2026). É feito só com HTML, CSS e JavaScript, sem bibliotecas. A estrutura de classes (container, linha, cartão, botão, abas, carrossel) foi escrita no próprio CSS, no estilo do Bootstrap.

## Como rodar

Baixe a pasta e abra o arquivo `index.html` no navegador. Não precisa de servidor nem de instalação. Para publicar de graça, ative o GitHub Pages no repositório (Settings, Pages, branch main).

## Arquivos

```
index.html    página principal
login.html    página de login
estilo.css    cores, layout e componentes
script.js     tema, fonte, menu, abas, pesquisa, carrossel e formulários
img/          três ilustrações SVG do carrossel
```

## Passo a passo da construção

### 1. Ideia e cores

Escolhi uma empresa fictícia de dados, a Lumen Dados. Defini três cores: azul-marinho (confiança), verde-azulado (ação) e âmbar (destaque).

### 2. Estrutura do CSS

Em vez de usar uma biblioteca, escrevi no `estilo.css` os blocos que o Bootstrap oferece, em cinco partes:

1. Cores: variáveis como `--marinho`, `--verde` e `--ambar`. O modo escuro só troca o valor das variáveis.
2. Base: fonte, cores do texto e foco visível.
3. Layout: `.container` limita a largura e `.linha` usa CSS Grid para criar colunas que se ajustam à tela.
4. Componentes: `.botao`, `.cartao`, `.abas`, `.carrossel` e `.campo` (formulário).
5. Partes da página: topo, início, rodapé e a regra do celular (`@media`).

### 3. HTML

Montei a página em seções, nesta ordem: topo e menu, barra de acessibilidade, início, serviços (cartões), método (cartões explicativos), pesquisa (abas), destaques (carrossel), contato (formulário) e rodapé. Usei as marcas `header`, `nav`, `main`, `section` e `footer`, texto alternativo nas imagens e `label` em todos os campos.

### 4. JavaScript

O `script.js` tem seis partes, cada uma com uma função curta:

1. Acessibilidade: o botão de tema troca o atributo `data-tema` entre `claro` e `escuro`, e os botões A- e A+ mudam a variável `--fonte`.
2. Menu: no celular, o botão abre e fecha o menu.
3. Abas: ao clicar, a aba e o painel dela recebem a classe `ativo`.
4. Pesquisa: ao digitar, esconde os cartões da aba atual que não contêm o texto e mostra quantos sobraram.
5. Carrossel: os botões trocam o slide que tem a classe `ativo`.
6. Formulários: usam a validação do navegador (`required`, `type="email"`, `minlength`) e mostram uma mensagem de sucesso ou de erro.

### 5. Testes

Abri o site em tela de computador e de celular e testei o menu, as abas, a pesquisa, o carrossel, os formulários, o modo escuro e a fonte maior. Conferi também que não há erros no console nem rolagem horizontal no celular.

## Créditos

Ilustrações SVG feitas para este projeto. Estrutura de classes inspirada no Bootstrap. Apoio de IA (Claude, da Anthropic).
