import { Route } from "nest-router";
import { AliveModule } from "./alive.module";

export const aliveRoute: Route = {
    path: "/alive",
    module: AliveModule
};