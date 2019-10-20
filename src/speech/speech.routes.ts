import { Route } from "nest-router";
import { SpeechModule } from "./speech.module";

export const speechRoute: Route = {
    path: "/speech",
    module: SpeechModule
};