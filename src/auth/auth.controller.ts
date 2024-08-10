import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
// import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  // @Post('login')
  // async login(@Body() body: any) {
  //   const { name, email } = body;
  //   let user = await this.usersService.findByEmail(email);
  //   if (!user) {
  //     user = await this.usersService.create({ name, email });
  //   }
  //   return this.authService.login(user);
  // }

  // @Post('register')
  // async register(@Body() body: any) {
  //   const { name, email, password } = body;
  //   return this.usersService.create({ name, email, password });
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // async getProfile(@Request() req) {
  //   return this.usersService.findByEmail(req.user.email);
  // }
}
