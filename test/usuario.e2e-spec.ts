import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../src/auth/auth.module';
import { UsuarioModule } from '../src/usuario/usuario.module';
import { Postagem } from '../src/postagem/entities/postagem.entity';
import { Tema } from '../src/tema/entities/tema.entity';
import { Usuario } from '../src/usuario/entities/usuario.entity';

describe('Testes dos Módulos Usuario e Auth (e2e)', () => {
  let app: INestApplication;
  let token: string;
  let usuarioId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [Postagem, Tema, Usuario],
          synchronize: true,
          dropSchema: true,
          logging: false,
        }),
        AuthModule,
        UsuarioModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('01a - Deve Cadastrar um novo Usuário', async () => {
    const res = await request(app.getHttpServer())
      .post('/usuarios')
      .send({
        nome: 'Root',
        usuario: 'root@root.com',
        senha: 'rootroot',
        foto: '-',
      })
      .expect(201);

    usuarioId = res.body.id as number;
  });

  it('02 - Não Deve Cadastrar um Usuário Duplicado', async () => {
    await request(app.getHttpServer())
      .post('/usuarios')
      .send({
        nome: 'Root',
        usuario: 'root@root.com',
        senha: 'rootroot',
        foto: '-',
      })
      .expect(400);
  });

  it('03 - Deve Autenticar o Usuário (Login)', async () => {
    const res = await request(app.getHttpServer())
      .post('/auth/logar')
      .send({
        usuario: 'root@root.com',
        senha: 'rootroot',
      })
      .expect(200);

    token = res.body.token as string;
  });

  it('04 - Deve Listar todos os Usuários', async () => {
    await request(app.getHttpServer())
      .get('/usuarios/all')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('05 - Deve Atualizar um Usuário', async () => {
    const res = await request(app.getHttpServer())
      .put('/usuarios')
      .set('Authorization', `Bearer ${token}`)
      .send({
        id: usuarioId,
        nome: 'Root Atualizado',
        usuario: 'root@root.com',
        senha: 'rootroot',
        foto: '-',
      })
      .expect(200);

    expect(res.body.nome).toBe('Root Atualizado');
  });
});
