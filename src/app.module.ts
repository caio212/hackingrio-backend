import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from 'nest-router';
import { routes } from './app.routes';
import { ConfigModule } from './shared/config/config.module';
import { AliveModule } from './alive/alive.module';
import { SpeechController } from './speech/speech.controller';
import { SpeechModule } from './speech/speech.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    AliveModule,
    AuthModule,
    ConfigModule,
    SpeechModule
  ]
})
export class AppModule { }
