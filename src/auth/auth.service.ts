import { Injectable } from '@nestjs/common';
import { AuthBody } from './auth.interfaces';
import { RestService } from '../shared/rest/rest.service';
import { SpeechService } from '../speech/speech.service';

@Injectable()
export class AuthService {

    constructor(
        private restService: RestService,
        private speechService: SpeechService
    ) { }

    async postAuth(auth: AuthBody) {
        if (auth.audio) await this.speechService.verifySpeaker(auth.phone, auth.audio).toPromise();
        if (auth.cpf) await this.restService.postUsers(auth).toPromise();
        else await this.restService.putUsers(auth).toPromise();
    }

}
