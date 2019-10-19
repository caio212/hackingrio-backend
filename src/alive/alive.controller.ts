import { Controller, Get } from '@nestjs/common';
import { AliveService } from './alive.service';

@Controller()
export class AliveController {

  constructor(
    private aliveService: AliveService
  ) { }

  @Get()
  getAlive() {
    return this.aliveService.getAlive();
  }

}
