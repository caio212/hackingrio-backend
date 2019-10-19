import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from 'nest-router';
import { routes } from './app.routes';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    AuthModule
  ]
})
export class AppModule {}
