import { HttpException, Injectable } from "@nestjs/common";
import { ILike, Repository } from "typeorm";
import { Postagem } from "../postagem/entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable
export class PostagemService{
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ) {}

    async findAll(): Promisse<Postagem[]> {
        return await this.postagemRepository.find();
    }
    async findById(id: number) : Promisse<Postagem> {
        const postagem = await this.postagemRepository. findOne({
            where: {
                id
            }
        })

        if(!postagem)
            throw new HttpException('Postagem não encontrado', HttpStatus.NOT_FOUND);

        return Postagem;
    }

    async findAllByTitulo(titulo: string): Promisse <Postagem[]> {
        return await this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            }
        })
    }

    async create(postagem : Postagem) : Promise<Postagem> {
        return await this.postagemRepository.save(postagem);

    }

    async update(postagem : Postagem) : Promisse<Postagem>{

        await this.findById(postagem.id)

        return  await this.postagemRepository.save(Postagem);
    }
}