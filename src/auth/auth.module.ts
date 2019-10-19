import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RestService } from '../shared/rest/rest.service';

@Module({
  controllers: [ AuthController ],
  providers: [
    AuthService,
    RestService
  ]
})
export class AuthModule {}
