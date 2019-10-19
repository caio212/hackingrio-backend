import { Module, HttpModule } from "@nestjs/common";
import { RestService } from "./rest.service";
import { ConfigModule } from "../config/config.module";

@Module({
    imports: [
        HttpModule,
        ConfigModule
    ],
    providers: [ RestService ],
    exports: [ RestService ]
})
export class RestModule {}