import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'usuario', passwordField: 'senha' });
  }

  async validate(usuario: string, senha: string) {
    const user = await this.authService.validateUser(usuario, senha);
    if (!user) throw new UnauthorizedException('Usuário e/ou senha incorretos!');
    return user;
  }
}
