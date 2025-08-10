# 📝 Blog Pessoal — Projeto com NestJS + TypeORM

Este é o **Projeto 02** desenvolvido durante o bootcamp da [Generation Brasil](https://brazil.generation.org/), com foco no desenvolvimento de APIs RESTful utilizando **NestJS**, **TypeORM** e **MySQL**.  
O objetivo do projeto é construir um **Blog Pessoal** com relacionamento entre entidades, aplicação de boas práticas de **modularização**, **validação de dados**, **tratamento de exceções** e **persistência em banco de dados relacional**.

---

## 🚀 Tecnologias Utilizadas

- [✔️ Node.js](https://nodejs.org/)
- [✔️ NestJS](https://nestjs.com/)
- [✔️ TypeScript](https://www.typescriptlang.org/)
- [✔️ TypeORM](https://typeorm.io/)
- [✔️ MySQL](https://www.mysql.com/)
- [✔️ Insomnia](https://insomnia.rest/) (para testes de API)
- [✔️ VS Code](https://code.visualstudio.com/) (ambiente de desenvolvimento)

---

## 📚 Funcionalidades e Conteúdos Abordados

Durante o desenvolvimento deste projeto, foram trabalhados os seguintes pontos:

### 🔹 Estrutura Modular:
- Separação do projeto em módulos (`usuario`, `tema` e `postagem`)
- Organização por camada: controller, service, entity

### 🔹 Modelagem de dados:
- Entidades com anotações TypeORM
- Relacionamento entre tabelas (OneToMany / ManyToOne)
- Criação automática de tabelas com `synchronize`

### 🔹 Boas práticas:
- Pipes e validação com `class-validator`
- Mensagens de erro personalizadas
- Tratamento de exceções (`HttpException`)

### 🔹 Segurança:
- Criptografia de senha com **bcrypt**
- **Autenticação JWT** implementada (AuthModule completo)
- Proteção de rotas com **Guards** (`JwtAuthGuard`)
- Senhas nunca são armazenadas em texto puro no banco
- Suporte a criação e validação de token de acesso para áreas protegidas

---

## 📂 Estrutura de Pastas

```bash
    src/
    ├── auth/
    │   ├── bcrypt/
    │   └── auth.module.ts
    ├── postagem/
    │   ├── controllers/
    │   ├── entities/
    │   ├── services/
    │   └── postagem.module.ts
    ├── tema/
    │   ├── controllers/
    │   ├── entities/
    │   ├── services/
    │   └── tema.module.ts
    ├── usuario/
    │   ├── controllers/
    │   ├── entities/
    │   ├── services/
    │   └── usuario.module.ts
    ├── app.module.ts
    └── main.ts
```


## 🧪 Como testar a API
```
npm install
```
```
Configure o acesso ao banco de dados no app.module.ts ou usando variáveis de ambiente.
```
```
npm run start:dev
```
```
Use o Insomnia ou Postman para fazer requisições.
```


## 🧪 Testes Automatizados
Este projeto possui testes e2e (end-to-end) utilizando Jest e Supertest, cobrindo o fluxo principal de Usuário e Autenticação.

Como rodar os testes
```bash
    npm run test:e2e
```

## 💡 Dica
Certifique-se de criar primeiro um Usuário e um Tema antes de criar uma Postagem, pois ela depende dos dois via chave estrangeira (usuario_id, tema_id).

## 🧑‍💻 Autoria
Projeto desenvolvido por Maeli Palharini durante o bootcamp da Generation Brasil 💜

## 📌 Licença
Este projeto está sob a licença MIT — sinta-se livre para usar, aprender e contribuir!