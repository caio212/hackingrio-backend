import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RestService } from '../shared/rest/rest.service';
import { RestModule } from '../shared/rest/rest.module';
import { SpeechModule } from '../speech/speech.module';

@Module({
  imports: [
    RestModule,
    SpeechModule
  ],
  controllers: [ AuthController ],
  providers: [
    AuthService,
    RestService
  ]
})
export class AuthModule { }
