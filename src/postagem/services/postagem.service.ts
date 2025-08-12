import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Postagem } from '../entities/postagem.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TemaService } from '../../tema/services/tema.service';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
    private temaService: TemaService,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return await this.postagemRepository.find({
      relations: {
        tema: true,
      },
      select:{
        id: true,
        titulo: true,
        texto: true,
        data: true,
        tema: {
          id: true,
          descricao: true,
        },
      }
    });
  }

  async findById(id: number): Promise<Postagem> {
    const postagem = await this.postagemRepository.findOne({
      where: {
        id,
      },
      relations: {
        tema: true,
      },
    });

    if (!postagem) {
      throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
    }

    return postagem;
  }

  async findAllByTitulo(titulo: string): Promise<Postagem[]> {
    return await this.postagemRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
      relations: {
        tema: true,
      },
    });
  }

  async create(postagem: Postagem): Promise<Postagem> {
    if (!postagem.tema || !postagem.tema.id) {
      throw new HttpException('Tema é obrigatório', HttpStatus.BAD_REQUEST);
    }

    await this.temaService.findById(postagem.tema.id);
    return this.postagemRepository.save(postagem);
  }

  async update(postagem: Postagem): Promise<Postagem> {
    await this.findById(postagem.id);

    if (!postagem.tema || !postagem.tema.id) {
      throw new HttpException('Tema é obrigatório', HttpStatus.BAD_REQUEST);
    }

    await this.temaService.findById(postagem.tema.id);
    return this.postagemRepository.save(postagem);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return this.postagemRepository.delete(id);
  }
}
