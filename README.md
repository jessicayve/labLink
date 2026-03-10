# LabLink Frontend

Frontend do projeto **LabLink**, uma aplicação full stack de rede social desenvolvida para portfólio, com foco em uma experiência visual moderna inspirada em plataformas como **Reddit, Threads e Twitter**.

## Deploy

🔗 Frontend: [ADICIONE_AQUI_O_LINK_DO_DEPLOY](ADICIONE_AQUI_O_LINK_DO_DEPLOY)  
🔗 Backend: [https://lablink-backend-739w.onrender.com](https://lablink-backend-739w.onrender.com)

---

## Sobre o projeto

O **LabLink** é uma rede social simples onde usuários podem:

- criar conta
- fazer login
- visualizar posts no feed
- criar posts
- curtir e descurtir posts
- visualizar contador de comentários

O objetivo do projeto é demonstrar habilidades em desenvolvimento **frontend com React**, integração com API, organização de componentes e construção de interfaces modernas.

---

## Tecnologias utilizadas

- React
- Vite
- Styled Components
- Context API
- Axios
- Material UI Icons
- React Router DOM

---

## Funcionalidades

- Cadastro de usuário
- Login com autenticação JWT
- Feed de posts
- Criação de posts
- Likes e dislikes
- Contador de comentários
- Header com navegação
- Layout inspirado em redes sociais modernas
- Sidebar com seções visuais complementares

---

## Estrutura do projeto

```bash
src
 ┣ assets
 ┣ components
 ┣ constants
 ┣ context
 ┣ pages
 ┣ routes
 ┣ services
 ┗ App.jsx
```

O frontend consome o backend deployado no Render.

Exemplo de constante de base URL:

export const BASE_URL = "https://lablink-backend-739w.onrender.com"
Observação importante

⚠️ Este projeto não possui persistência de dados garantida no ambiente de deploy.

Isso significa que alguns dados podem ser perdidos, resetados ou não permanecer salvos permanentemente, dependendo do comportamento do serviço gratuito utilizado no backend e no banco.

O projeto foi desenvolvido com foco em estudo, prática e portfólio, e não como produto final de produção.

>Melhorias visuais implementadas 

- Background com pattern suave
- Header com logo e navegação
- Cards de posts com visual mais moderno
- Sidebar com seções de apoio
- Layout mais próximo de uma rede social real

>Melhorias futuras  

- Página de detalhes do post
- Comentários completos
- Edição e exclusão de posts
- Perfil de usuário
- Responsividade mais refinada
- Estados de loading e empty state mais elaborados
- Melhor tratamento visual de erros

Autora

Desenvolvido por Jessica Yve
GitHub: https://github.com/jessicayve
