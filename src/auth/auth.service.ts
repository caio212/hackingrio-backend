import { Injectable } from '@nestjs/common';
import { AuthBody } from './auth.interfaces';
import { RestService } from '../shared/rest/rest.service';

@Injectable()
export class AuthService {

    constructor(
        private restService: RestService
    ) { }

    postAuth(auth: AuthBody) {
        // auth logic
        const result = this.restService.postUsers();
        return result;
    }

}
