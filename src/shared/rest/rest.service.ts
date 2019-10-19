import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { resolve } from 'url';

@Injectable()
export class RestService {

    constructor(
        private configService: ConfigService,
        private httpService: HttpService
    ) { }

    async postUsers() {
        // access http
        return {
            ok: true
        };
    }

    post(endpoint: string) {
        const config = this.configService.getConfig();
        const host = `${config.PROVIDER_PROTOCOL}://${config.PROVIDER_HOST}:${config.PROVIDER_PORT}`;
        endpoint = resolve(config.PROVIDER_API, endpoint);
        const url = resolve(host, endpoint);
        return this.httpService.post(url);
    }

}
