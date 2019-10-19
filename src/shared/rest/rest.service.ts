import { Injectable } from '@nestjs/common';

@Injectable()
export class RestService {

    async postUsers() {
        // access http
        return {
            ok: true
        };
    }

}
