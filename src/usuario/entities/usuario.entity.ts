import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';
import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty({ example: 'email@email.com.br' })
  usuario: string;

  @Length(8, 100, { message: 'A senha deve ter no mínimo 8 caracteres' })
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  senha: string;

  @Column({ length: 5000 })
  @ApiProperty()
  foto: string;

  @OneToMany(() => Postagem, (postagem) => postagem.usuario, { cascade: true })
  @ApiProperty()
  postagens: Postagem[];
}
