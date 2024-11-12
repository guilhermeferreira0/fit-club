# Welcome
Este projeto foi desenvolvido como parte de um desafio para uma vaga de Desenvolvedor Web. O objetivo foi criar um site interativo de uma academia, utilizando javascript.

## Tecnologias Utilizadas

- **Vite**: Ferramenta de build e bundler de próxima geração, ideal para desenvolvimento rápido e eficiente com React.
- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript**: Superset do JavaScript, adicionando tipagem estática ao código.
- **Framer Motion**: Biblioteca para animações em React, criando transições e interações fluídas.
- **Tailwind**: Dá mais velocidade ao criar estilos, além de facilitar a estilização por meio da classe.

## Como Rodar o Projeto Localmente

### Usando npm
* Instalando as dependencias
``
  npm install
``
* Rodando o vite server
``
  npm run dev
``

### Utilizando docker
* Buildando a Imagem
``
  docker build -t fit-club .
``

* Rodando Container
``
  docker run --rm -d -p 5173:5173 --name fit-app  fit-club
``

### Url de Acesso
``http://localhost:5173/``
