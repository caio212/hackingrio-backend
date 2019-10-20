import { Controller, Post, Body } from '@nestjs/common';
import { AuthBody } from './auth.interfaces';
import { AuthService } from './auth.service';
import { SpeechService } from '../speech/speech.service';

@Controller()
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @Post()
    postAuth(@Body() body: AuthBody) {
        return this.authService.postAuth(body);
    }

}
