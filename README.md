# Whisper

Documentação oficial e técnica de _Whisper_, site e API de biblioteca desenvolvida para facilitar o aluguel, compra, empréstimo e conhecimento sobre livros.

---

## 📑 Sumário

- [Whisper](#whisper)
  - [📑 Sumário](#-sumário)
  - [1. Requisitos Funcionais e Não Funcionais](#1-requisitos-funcionais-e-não-funcionais)
    - [1.1 Requisitos Funcionais](#11-requisitos-funcionais)
      - [🔐 1. Gerenciamento de Perfil](#-1-gerenciamento-de-perfil)
      - [📚 2. Gerenciamento de Catálogo](#-2-gerenciamento-de-catálogo)
      - [🔄 3. Gestão de Circulação](#-3-gestão-de-circulação)
      - [📊 4. Relatórios e Análises](#-4-relatórios-e-análises)
      - [🔔 5. Notificações e Alertas](#-5-notificações-e-alertas)
      - [💻 6. Interface do Usuário (UI/UX)](#-6-interface-do-usuário-uiux)
      - [🤖 7. Suporte ao Usuário](#-7-suporte-ao-usuário)
      - [🛠️ 8. Administração](#️-8-administração)
    - [1.2 Requisitos Não Funcionais](#12-requisitos-não-funcionais)
  - [2. TO-DO](#2-to-do)
    - [Back-end](#back-end)
  - [3. Tecnologias Usadas](#3-tecnologias-usadas)
    - [3.1 Back-end](#31-back-end)
    - [3.2 Front-end](#32-front-end)

---

## 1. Requisitos Funcionais e Não Funcionais

### 1.1 Requisitos Funcionais

#### 🔐 1. Gerenciamento de Perfil

- **RF1.1**: O sistema deve permitir que os usuários se cadastrem com autenticação segura.  
- **RF1.2**: O sistema deve permitir que os usuários façam login.  
- **RF1.3**: O sistema deve permitir que os usuários atualizem suas informações pessoais.  

#### 📚 2. Gerenciamento de Catálogo

- **RF2.1**: O sistema deve permitir que os usuários pesquisem itens por título, autor, ISBN e palavras-chave.  
- **RF2.2**: O sistema deve permitir que os usuários naveguem por categorias como gênero, autor ou data de publicação.  

#### 🔄 3. Gestão de Circulação

- **RF3.1**: O sistema deve permitir que os usuários retirem e devolvam itens, com controle de datas de vencimento.  
- **RF3.2**: O sistema deve permitir que os usuários façam reservas de itens indisponíveis.  
- **RF3.3**: O sistema deve permitir que os usuários renovem itens emprestados, caso não haja reservas.  

#### 📊 4. Relatórios e Análises

- **RF4.1**: O sistema deve fornecer estatísticas sobre os itens mais populares.  

#### 🔔 5. Notificações e Alertas

- **RF5.1**: O sistema deve notificar os usuários sobre datas de vencimento próximas.  

#### 💻 6. Interface do Usuário (UI/UX)

- **RF6.1**: O sistema deve fornecer uma navegação intuitiva para usuários e funcionários.  
- **RF6.2**: O sistema deve ser acessível por dispositivos móveis (design responsivo).  

#### 🤖 7. Suporte ao Usuário

- **RF7.1**: O sistema deve oferecer um chatbot para auxiliar o usuário.  
- **RF7.2**: O sistema deve permitir que o usuário envie mensagens ao administrador se o chatbot não for suficiente.  

#### 🛠️ 8. Administração

- **RF8.1**: O sistema deve permitir que o administrador realize operações de CRUD no catálogo (criar, editar, excluir itens).  
- **RF8.2**: O sistema deve permitir que o administrador visualize e responda mensagens dos usuários.  

---

### 1.2 Requisitos Não Funcionais

- **RNF1**: O sistema deve garantir a segurança das informações do usuário, especialmente nos processos de login e autenticação.  
- **RNF2**: O sistema deve ter alta disponibilidade e desempenho, mesmo com múltiplos acessos simultâneos.  
- **RNF3**: O sistema deve ser responsivo e funcionar adequadamente em diferentes tamanhos de tela e dispositivos.  
- **RNF4**: O tempo de resposta para ações críticas (como login, busca ou empréstimo) não deve exceder 2 segundos.  
- **RNF5**: A interface do sistema deve seguir boas práticas de usabilidade e acessibilidade.  
- **RNF6**: O sistema deve armazenar dados com backups regulares para evitar perdas.  
- **RNF7**: O sistema deve ser compatível com os principais navegadores modernos.  
- **RNF8**: O chatbot deve responder em tempo real, com tempo de resposta inferior a 3 segundos.  

---

## 2. TO-DO

### Back-end

- [x] Configurar ambiente inicial do servidor (Express).  
- [x] Definir estrutura de pastas (routes, controllers, models, middlewares, config).  
- [x] Configurar conexão com o banco (Sequelize + MySQL).  
- [ ] Criar models e migrations iniciais:
  - [x] Usuário  
  - [ ] Livro  
  - [ ] Empréstimo/Reserva  
  - [ ] Mensagens/Suporte  
- [ ] Implementar autenticação:
  - [ ] Cadastro de usuários (senha criptografada com Bcrypt).  
  - [ ] Login (JWT para sessão).  
  - [ ] Middleware para autenticação/roles (admin, técnico, usuário).  
- [ ] Criar rotas para catálogo:
  - [ ] CRUD de livros (apenas admin).  
  - [ ] Busca e filtros de livros (usuários).  
- [ ] Criar rotas de circulação:
  - [ ] Registrar empréstimos.  
  - [ ] Devoluções.  
  - [ ] Renovação.  
  - [ ] Reservas.  
- [ ] Implementar sistema de notificações (ex.: cron jobs para vencimentos).  
- [ ] Criar rotas de suporte:
  - [ ] Mensagens de usuários → admin.  
  - [ ] Estrutura inicial para chatbot (mock).  
- [ ] Criar relatórios básicos (estatísticas de uso, livros populares).  
- [ ] Configurar testes (Jest ou Mocha/Chai).  
<!-- - [ ] Documentar API (Swagger ou outra solução).   -->

---

## 3. Tecnologias Usadas

### 3.1 Back-end

- **Express**  
- **Json Web Token**  
- **Cors**  
- **Bcrypt**  
- **Sequelize**  
- **MySQL**  

### 3.2 Front-end

- **Next.js**  
- **TailwindCSS**  
- **Shadcn**  
- **Tweakcn**  
