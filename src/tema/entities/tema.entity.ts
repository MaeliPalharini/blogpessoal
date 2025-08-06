<<<<<<< HEAD
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({ name: "tb_temas" })
=======
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({ name: "tb_tema" })
>>>>>>> 60cc552 (feat: implementa serviços e atualiza estrutura do projeto)
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

<<<<<<< HEAD
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  descricao: string;

  @OneToMany(() => Postagem, (postagem) => postagem.tema)
=======
  @Column({ length: 100, nullable: false })
  descricao: string;

  @OneToMany(() => Postagem, postagem => postagem.tema)
>>>>>>> 60cc552 (feat: implementa serviços e atualiza estrutura do projeto)
  postagem: Postagem[];
}
