import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
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
  @Column()
  titulo: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ type: 'text' })
  texto: string;

  @ApiProperty()
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data: Date;

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.postagens, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ApiProperty({ type: () => Tema })
  @ManyToOne(() => Tema, (tema) => tema.postagens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tema_id' })
  tema: Tema;
}
