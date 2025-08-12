import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from '../guard/local-auth-guard';
import { AuthService } from '../services/auth.service';
import { Request } from '@nestjs/common';
import { UsuarioLogin } from '../entities/usuariologin.entity';

@ApiTags('Usuario')
@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/logar')
  @HttpCode(200)
  login(@Body() login: UsuarioLogin) {
    return this.authService.login(login);
  }
}
