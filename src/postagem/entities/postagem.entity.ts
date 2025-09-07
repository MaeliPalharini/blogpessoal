import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('tb_postagens')
export class Postagem {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  @ApiProperty()
  @IsNotEmpty()
  titulo: string;

  @Column({ type: 'text' })
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
  @ManyToOne(() => Usuario, (usuario) => usuario.postagens, { 
    onDelete: 'CASCADE',
    eager: true,  
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ApiProperty({ type: () => Tema })
  @ManyToOne(() => Tema, (tema) => tema.postagens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tema_id' })
  tema: Tema;
}
