# 📝Blog Pessoal

Este é o **Projeto 02** desenvolvido durante o bootcamp da [Generation Brasil](https://brazil.generation.org/), com foco em **NestJS**, **TypeORM** e **MySQL**.  
O objetivo é construir um **blog pessoal com relacionamento entre classes**, aplicando boas práticas de modularização e persistência de dados.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [VS Code](https://code.visualstudio.com/)

---

## 📚 Conteúdo abordado

Neste módulo, desenvolvemos:

1. Apresentação do Módulo `Tema`
2. Criação do Módulo `Tema`
3. Classe entidade `Tema`
4. Classe `TemaModule`
5. Registro do `Tema` no `TemaModule`
6. Registro do `Tema` e `TemaModule` no `AppModule`
7. Relacionamento entre as classes `Postagem` e `Tema`

---

## 🏗️ Estrutura do Projeto

```bash
src/
├── postagem/
│   ├── entities/
│   ├── postagem.controller.ts
│   ├── postagem.module.ts
│   └── postagem.service.ts
├── tema/
│   ├── entities/
│   ├── tema.controller.ts
│   ├── tema.module.ts
│   └── tema.service.ts
├── app.module.ts
└── main.ts
```
