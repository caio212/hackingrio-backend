import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from 'nest-router';
import { routes } from './app.routes';
import { ConfigModule } from './shared/config/config.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    AuthModule,
    ConfigModule
  ]
})
export class AppModule { }
