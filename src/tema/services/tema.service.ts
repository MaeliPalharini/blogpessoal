<<<<<<< HEAD
import { Tema } from "./../entities/tema.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
=======
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Tema } from '../entities/tema.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
>>>>>>> 60cc552 (feat: implementa serviços e atualiza estrutura do projeto)

@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Tema)
    private temaRepository: Repository<Tema>,
  ) {}

  async findAll(): Promise<Tema[]> {
<<<<<<< HEAD
    return await this.temaRepository.find({
      relations: {
        postagem: true,
      },
    });
=======
    return await this.temaRepository.find({ relations: ['postagem'] });
>>>>>>> 60cc552 (feat: implementa serviços e atualiza estrutura do projeto)
  }

  async findById(id: number): Promise<Tema> {
    const tema = await this.temaRepository.findOne({
<<<<<<< HEAD
      where: {
        id,
      },
      relations: {
        postagem: true,
      },
    });

    if (!tema)
      throw new HttpException("Tema não encontrado!", HttpStatus.NOT_FOUND);
=======
      where: { id },
      relations: ['postagem'],
    });

    if (!tema) {
      throw new HttpException('Tema não encontrado', HttpStatus.NOT_FOUND);
    }
>>>>>>> 60cc552 (feat: implementa serviços e atualiza estrutura do projeto)

    return tema;
  }

<<<<<<< HEAD
  async findAllByDescricao(descricao: string): Promise<Tema[]> {
    return await this.temaRepository.find({
      where: {
        descricao: ILike(`%${descricao}%`),
      },
      relations: {
        postagem: true,
      },
=======
  async findByDescricao(descricao: string): Promise<Tema[]> {
    return await this.temaRepository.find({
      where: { descricao: ILike(`%${descricao}%`) },
      relations: ['postagem'],
>>>>>>> 60cc552 (feat: implementa serviços e atualiza estrutura do projeto)
    });
  }

  async create(tema: Tema): Promise<Tema> {
    return await this.temaRepository.save(tema);
  }

  async update(tema: Tema): Promise<Tema> {
    await this.findById(tema.id);
    return await this.temaRepository.save(tema);
  }

<<<<<<< HEAD
  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.temaRepository.delete(id);
=======
  async delete(id: number): Promise<void> {
    await this.temaRepository.delete(id);
>>>>>>> 60cc552 (feat: implementa serviços e atualiza estrutura do projeto)
  }
}
