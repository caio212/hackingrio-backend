import { Route } from "nest-router";
import { AuthModule } from "./auth.module";

export const authRouter: Route = {
    path: "/auth",
    module: AuthModule
};