import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { resolve } from 'url';
import { first, map } from 'rxjs/operators';
import { AuthBody } from 'src/auth/auth.interfaces';

@Injectable()
export class RestService {

    private readonly PUBLIC_KEY: string;

    constructor(
        private configService: ConfigService,
        private httpService: HttpService
    ) {
        this.PUBLIC_KEY = this.configService.getConfig().PROVIDER_KEY;
    }

    putUsers(body: AuthBody) {
        return this.put('/users/phone', body);
    }

    put(endpoint: string, body: any) {
        const config = this.configService.getConfig();
        const host = `${config.PROVIDER_PROTOCOL}://${config.PROVIDER_HOST}:${config.PROVIDER_PORT}`;
        endpoint = resolve(config.PROVIDER_API, endpoint);
        const url = resolve(host, endpoint);
        return this.httpService.put(url, body, {
            headers: this.getHeaders()
        }).pipe(first(), map(res => res.data));
    }

    private getHeaders() {
        return {
            Authentication: this.PUBLIC_KEY
        };
    }

}
