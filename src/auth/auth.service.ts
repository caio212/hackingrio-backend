import { Injectable } from '@nestjs/common';
import { AuthBody } from './auth.interfaces';
import { RestService } from 'src/shared/rest/rest.service';

@Injectable()
export class AuthService {

    constructor(
        private restService: RestService
    ) { }

    async postAuth(auth: AuthBody) {
        // auth logic
        const result = await this.restService.postUsers();
        return result;
    }

}
