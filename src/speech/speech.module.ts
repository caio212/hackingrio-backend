import { Module } from "@nestjs/common";
import { RestModule } from "../shared/rest/rest.module";
import { SpeechService } from "./speech.service";
import { SpeechController } from "./speech.controller";

@Module({
    imports: [ RestModule ],
    controllers: [ SpeechController ],
    providers: [ SpeechService ],
    exports: [ SpeechService ]
})
export class SpeechModule { }