import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Postagem } from '.entites/postagem.entity';
import { PostagemController } from './controllers/postagem.controller';
import { PostagemService } from '../services/postagem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  controllers: [PostagemController],
  providers: [PostagemService],
  exports: [],
})
export class PostagemModule {}
