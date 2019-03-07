import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { HttpStrategy } from './http-strategy.service';

@Module({
  imports: [
    PassportModule,
  ],
  providers: [AuthService, HttpStrategy]
})
export class AuthModule {
}
