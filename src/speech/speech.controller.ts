import { Controller, Post, Body } from '@nestjs/common';
import { SpeechService } from './speech.service';

@Controller()
export class SpeechController {

    constructor(
        private speechService: SpeechService
    ) { }

    @Post()
    postProfile(@Body() body: { cpf: number }) {
        return this.speechService.createProfile(body.cpf);
    }

    @Post()
    postEnrollment(@Body() body: { cpf: number, audio: Uint16Array }) {
        return this.speechService.createEnrollment(body.cpf, body.audio);
    }

}
