import { Injectable } from '@nestjs/common';
import { RestService } from '../shared/rest/rest.service';
import { flatMap } from 'rxjs/operators';

@Injectable()
export class SpeechService {

    constructor(
        private restService: RestService
    ) { }

    createProfile(cpf: number) {
        return this.restService.postCreateProfile().pipe(
            flatMap(id => this.restService.postSpeechProfileId(id, cpf))
        );
    }

    createEnrollment(cpf: number, body: Uint16Array) {
        return this.restService.getSpeechProfileId(cpf).pipe(
            flatMap(id => this.restService.postSpeechEnroll(id, body))
        );
    }

    verifySpeaker(cpf: number, body: Uint16Array) {
        return this.restService.getSpeechProfileId(cpf).pipe(
            flatMap(id => this.restService.postSpeechVerify(id, body))
        );
    }

}
