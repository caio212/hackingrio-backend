import { Injectable } from '@nestjs/common';
import { RestService } from '../shared/rest/rest.service';
import { flatMap } from 'rxjs/operators';

@Injectable()
export class SpeechService {

    constructor(
        private restService: RestService
    ) { }

    createProfile(phone: number) {
        return this.restService.postCreateProfile().pipe(
            flatMap(id => this.restService.postSpeechProfileId(id, phone))
        );
    }

    createEnrollment(phone: number, body: Uint16Array) {
        return this.restService.getSpeechProfileId(phone).pipe(
            flatMap(id => this.restService.postSpeechEnroll(id, body))
        );
    }

    verifySpeaker(phone: number, body: Uint16Array) {
        return this.restService.getSpeechProfileId(phone).pipe(
            flatMap(id => this.restService.postSpeechVerify(id, body))
        );
    }

}
