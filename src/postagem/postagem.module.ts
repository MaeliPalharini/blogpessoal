import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Postagem } from '.entites/postagem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  controllers: [],
  providers: [],
  exports: [],
})
export class PostagemModule {}
