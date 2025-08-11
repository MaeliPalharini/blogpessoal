import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../../usuario/services/usuario.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Bcrypt } from '../bcrypt/bcrypt';
import { UsuarioLogin } from '../entities/usuariologin.entity';
import { jwtConstants } from '../constants/constants';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
    private bcrypt: Bcrypt,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const buscaUsuario = await this.usuarioService.findByUsuario(username);

    if (!buscaUsuario)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    const matchPassword = await this.bcrypt.compararSenhas(
      password,
      buscaUsuario.senha,
    );

    if (buscaUsuario && matchPassword) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { senha, ...resposta } = buscaUsuario;
      return resposta;
    }

    return null;
  }

  async login(usuarioLogin: UsuarioLogin) {
    const buscaUsuario = await this.usuarioService.findByUsuario(
      usuarioLogin.usuario,
    );

    if (!buscaUsuario) {
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
    }

    const senhaOk = await this.bcrypt.compararSenhas(
      usuarioLogin.senha,
      buscaUsuario.senha,
    );

    if (!senhaOk) {
      throw new HttpException('Senha inválida!', HttpStatus.UNAUTHORIZED);
    }

    const payload = { sub: buscaUsuario.id, username: buscaUsuario.usuario };
    const token = this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
      expiresIn: '24h',
    });

    return {
      id: buscaUsuario.id,
      nome: buscaUsuario.nome,
      usuario: buscaUsuario.usuario,
      foto: buscaUsuario.foto,
      token,
    };
  }
}
