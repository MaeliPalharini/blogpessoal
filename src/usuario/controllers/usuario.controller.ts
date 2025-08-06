import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UsuarioService } from "../services/usuario.service";
import { Usuario } from "../entities/usuario.entity";


@Controller("/usuarios")
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService){ }

    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]>{
        return this.usuarioService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario>{
        return this.usuarioService.findById(id)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Usuario[]> {
    return this.usuarioService.findByNome(nome);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.create(usuario)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.update(usuario)
    }

    @Delete('/deletar/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.usuarioService.delete(id);
    }
}