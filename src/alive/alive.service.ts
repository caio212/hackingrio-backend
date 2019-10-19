import { Injectable } from '@nestjs/common';

@Injectable()
export class AliveService {

    constructor( ) { }

    getAlive() {
        return {
            alive: true
        };
    }

}
