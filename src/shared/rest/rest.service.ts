import { Injectable, HttpService, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { resolve } from 'url';
import { first, map, catchError } from 'rxjs/operators';
import { AuthBody } from 'src/auth/auth.interfaces';
import { Enrollment, Verification } from './rest.interfaces';
import { empty, of } from 'rxjs';

@Injectable()
export class RestService {

    private readonly PUBLIC_KEY: string;
    private readonly SPEECH_KEY: string;

    constructor(
        private configService: ConfigService,
        private httpService: HttpService
    ) {
        const config = this.configService.getConfig();
        this.PUBLIC_KEY = config.PROVIDER_KEY;
        this.SPEECH_KEY = config.SPEECH_KEY;
    }

    postCreateProfile() {
        const url = this.getSpeechUrl('verificationProfiles');
        const headers = this.getSpeechHeaders('application/json');
        return this.httpService.post(url, { }, { headers }).pipe(first(), map(res => res.data.verificationProfileId as string));
    }

    postSpeechEnroll(id: string, data: Uint16Array) {
        const url = this.getSpeechUrl(`verificationProfiles/${id}/enroll`);
        const headers = this.getSpeechHeaders('multipart/form-data');
        return this.httpService.post(url, data, { headers }).pipe(first(), map(res => res.data as Enrollment));
    }

    postSpeechVerify(id: string, data: Uint16Array) {
        const url = this.getSpeechUrl(`verify?verificationProfileId=${id}`);
        const headers = this.getSpeechHeaders('multipart/form-data');
        return this.httpService.post(url, data, { headers }).pipe(first(), map(res => res.data as Verification));
    }

    getSpeechProfileId(phone: number) {
        return this.get<string>(`/speechProfileId/${phone}`);
    }

    postSpeechProfileId(spid: string, phone: number) {
        return this.post('/speechProfileId', { spid, cpf: phone });
    }

    postUsers(body: AuthBody) {
        return this.post(`/users/phone?cpf=${body.cpf}`, body);
    }

    putUsers(body: AuthBody) {
        return this.put('/users/phone', body).pipe(catchError(() => {
            throw new HttpException('', HttpStatus.UNAUTHORIZED)
        }));
    }

    private get<T = any>(endpoint: string, query?: any) {
        const url = this.getUrl(endpoint);
        return this.httpService.put(url, query, {
            headers: this.getHeaders()
        }).pipe(
            first(), 
            map(res => {
                console.log('get', endpoint, query, res.data);
                return res.data as T;
            })
        );
    }

    private post<T = any>(endpoint: string, body?: any) {
        const url = this.getUrl(endpoint);
        return this.httpService.post(url, body, {
            headers: this.getHeaders()
        }).pipe(
            first(), 
            map(res => {
                console.log('post', endpoint, body, res.data);
                return res.data as T;
            })
        );
    }

    private put<T = any>(endpoint: string, body?: any) {
        const url = this.getUrl(endpoint);
        return this.httpService.put(url, body, {
            headers: this.getHeaders()
        }).pipe(
            first(), 
            map(res => {
                console.log('put', endpoint, body, res.data);
                return res.data as T;
            })
        );
    }

    private delete<T = any>(endpoint: string) {
        const url = this.getUrl(endpoint);
        return this.httpService.delete(url, {
            headers: this.getHeaders()
        }).pipe(
            first(), 
            map(res => {
                console.log('delete', endpoint, res.data);
                return res.data as T;
            })
        );
    }

    private getUrl(endpoint: string) {
        const config = this.configService.getConfig();
        const host = `${config.PROVIDER_PROTOCOL}://${config.PROVIDER_HOST}:${config.PROVIDER_PORT}`;
        endpoint = resolve(config.PROVIDER_API, endpoint);
        return resolve(host, endpoint);
    }

    private getHeaders() {
        return {
            Authentication: this.PUBLIC_KEY
        };
    }

    private getSpeechUrl(endpoint: string) {
        const config = this.configService.getConfig();
        const host = `${config.SPEECH_PROTOCOL}://${config.SPEECH_HOST}`;
        endpoint = resolve(config.SPEECH_API, endpoint);
        return resolve(host, endpoint);
    }

    private getSpeechHeaders(contentType?: string) {
        return {
            'Content-Type': contentType,
            'Ocp-Apim-Subscription-Key': this.SPEECH_KEY
        };
    }

}
