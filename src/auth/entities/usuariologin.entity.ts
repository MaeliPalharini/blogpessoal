import { ApiProperty } from '@nestjs/swagger';

export class UsuarioLogin {
  @ApiProperty()
  public usuario: string;

  @ApiProperty({ example: 'minhasenha123' })
  public senha: string;
}
