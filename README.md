# 📚 Ananse

**Ananse** é uma plataforma literária moderna que conecta escritores, leitores e profissionais do mercado literário. Inspirada em plataformas como Wattpad, mas com foco em facilitar a interação entre escritores, leitores e profissionais que oferecem serviços para o mercado literário, como revisores, diagramadores, editores de vídeo e agentes literários.

---

## 🚀 Funcionalidades Principais

- **📖 Histórias em Destaque**: Descubra as histórias mais lidas e populares da plataforma.
- **🎭 Destaques por Gênero**: Explore histórias por gênero e subgênero.
- **✍️ Criação de Livros**: Escritores podem criar livros, séries e mundos compartilhados.
- **🌍 Worldbuilding**: Crie e compartilhe cenários, eventos e personagens em mundos literários.
- **👥 Interação**: Conecte-se com outros escritores, leitores e profissionais do mercado literário.
- **💼 Serviços Profissionais**: Encontre revisores, diagramadores, editores de vídeo e outros profissionais.

---

## 🛠️ Tecnologias Utilizadas

### Frontend (Angular)
- **🅰️ Angular**: Framework para construção da interface do usuário.
- **🎨 Bootstrap**: Framework CSS para estilização responsiva.
- **✨ FontAwesome**: Ícones modernos para a interface.
- **💅 SCSS**: Pré-processador CSS para estilos personalizados.

### Backend (Node.js/Express)
- **🟢 Node.js**: Ambiente de execução JavaScript.
- **🚂 Express**: Framework para construção da API.
- **🍃 MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **🔐 JWT**: Autenticação segura com JSON Web Tokens.

---

## 📂 Estrutura do Projeto

```
Ananse/
├── app/                  # Aplicação Angular (Frontend)
│   ├── src/              # Código-fonte do Angular
│   └── ...               # Configurações do Angular
├── api/                  # API Node.js (Backend)
│   ├── src/              # Código-fonte da API
│   └── ...               # Configurações da API
├── .gitignore            # Arquivos ignorados pelo Git
├── README.md             # Documentação do projeto
└── ...                   # Outros arquivos de configuração
```

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- **Node.js**: Instale a versão LTS mais recente do [Node.js](https://nodejs.org/).
- **MongoDB**: Instale e configure o [MongoDB](https://www.mongodb.com/).
- **Angular CLI**: Instale globalmente com `npm install -g @angular/cli`.

### Passos para Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/ananse.git
   cd ananse
   ```

2. **Instale as dependências**:
   - Para o Frontend (Angular):
     ```bash
     cd app
     npm install
     ```
   - Para o Backend (API):
     ```bash
     cd api
     npm install
     ```

3. **Configure as variáveis de ambiente**:
   - Crie um arquivo `.env` na pasta `api` com as seguintes variáveis:
     ```env
     MONGO_URI=mongodb://localhost:27017/ananse
     JWT_SECRET=sua_chave_secreta_aqui
     PORT=3000
     ```

4. **Inicie o servidor da API**:
   ```bash
   cd api
   npm start
   ```

5. **Inicie o servidor do Angular**:
   ```bash
   cd app
   ng serve
   ```

6. **Acesse a aplicação**:
   - Frontend: `http://localhost:4200`
   - API: `http://localhost:3000`

---

## 🌟 Destaques do Projeto

- **🎨 Design Moderno**: Interface limpa e responsiva com foco na experiência do usuário.
- **🔒 Segurança**: Autenticação JWT para proteger os dados dos usuários.
- **📊 Dados Dinâmicos**: Histórias e gêneros são carregados dinamicamente a partir da API.
- **🚀 Escalável**: Arquitetura modular que facilita a adição de novas funcionalidades.

---

## 🤝 Como Contribuir

1. Faça um **fork** do projeto.
2. Crie uma **branch** para sua feature (`git checkout -b feature/nova-feature`).
3. Faça o **commit** das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça o **push** para a branch (`git push origin feature/nova-feature`).
5. Abra um **Pull Request** para revisão.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- **Escritores e Leitores**: Por tornarem a plataforma viva e cheia de histórias incríveis.
- **Profissionais do Mercado Literário**: Por oferecerem serviços essenciais para a criação de obras de qualidade.
- **Comunidade Open Source**: Pelas tecnologias incríveis que tornaram este projeto possível.

---

Feito com ❤️ por [Rodrigo Zan](https://github.com/rodrigozan).  
📧 **Contato**: [rodrigo.zandonadi.dev@gmail.com](mailto:rodrigo.zandonadi.dev@gmail.com)

---

Se precisar de mais ajustes ou informações, é só pedir! 😊