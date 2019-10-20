import { Controller, Post, Body } from '@nestjs/common';
import { SpeechService } from './speech.service';

@Controller()
export class SpeechController {

    constructor(
        private speechService: SpeechService
    ) { }

    @Post('/profile')
    postProfile(@Body() body: { phone: number }) {
        return this.speechService.createProfile(body.phone);
    }

    @Post('/enrollment')
    postEnrollment(@Body() body: { phone: number, audio: Uint16Array }) {
        return this.speechService.createEnrollment(body.phone, body.audio);
    }

}
