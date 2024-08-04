import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('google')
  async googleLogin(@Body() body: any) {
    const { name, email } = body;
    let user = await this.usersService.findByEmail(email);
    if (!user) {
      user = await this.usersService.create({ name, email });
    }
    return this.authService.login(user);
  }
}
