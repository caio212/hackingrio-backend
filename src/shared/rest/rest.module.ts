import { Module, HttpModule } from "@nestjs/common";
import { RestService } from "./rest.service";
import { ConfigModule } from "../config/config.module";

@Module({
    imports: [
        HttpModule,
        ConfigModule
    ],
    providers: [ RestService ],
    exports: [
        ConfigModule,
        HttpModule,
        RestService
    ]
})
export class RestModule {}