import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('tb_postagens')
export class Postagem {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty()
  @IsNotEmpty()
  texto: string;

  @ApiProperty({ type: String, format: 'date-time' })
  @CreateDateColumn({
    name: 'data',
    type: 'timestamp',
    precision: 0,
  })
  data: Date;

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.postagens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ApiProperty({ type: () => Tema })
  @ManyToOne(() => Tema, (tema) => tema.postagens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tema_id' })
  tema: Tema;
}
