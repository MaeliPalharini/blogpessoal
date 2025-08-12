import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';
import { UsuarioModule } from './usuario/usuario.module';
import * as process from 'node:process';
import { ProdService } from './data/services/prod.services';
import { DevService } from './data/services/dev.service';

let isProd = process.env.NODE_ENV === 'production';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    process.env.NODE_ENV === 'production'
      ? TypeOrmModule.forRootAsync ({
      useClass: ProdService,
      })
      : TypeOrmModule.forRootAsync ({
      useClass: DevService,
      }),

    PostagemModule,
    TemaModule,
    UsuarioModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
