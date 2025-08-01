import { Tema } from "../entities/tema.entity";
import { TemaService } from "./../services/tema.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";

@Controller("/temas")
export class TemaController {
  constructor(private readonly temaService: TemaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Tema[]> {
    return this.temaService.findAll();
  }

  @Get("/:id")
  @HttpCode(HttpStatus.OK)
  findById(@Param("id", ParseIntPipe) id: number): Promise<Tema> {
    return this.temaService.findById(id);
  }

  @Get("/descricao/:descricao")
  @HttpCode(HttpStatus.OK)
  findAllByDescricao(@Param("descricao") descricao: string): Promise<Tema[]> {
    return this.temaService.findAllByDescricao(descricao);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() tema: Tema): Promise<Tema> {
    return this.temaService.create(tema);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() tema: Tema): Promise<Tema> {
    return this.temaService.update(tema);
  }

  @Delete("/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.temaService.delete(id);
  }
}
