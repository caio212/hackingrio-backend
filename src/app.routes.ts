import { Routes } from "nest-router";
import { authRouter } from "./auth/auth.routes";
import { aliveRoute } from "./alive/alive.routes";
import { speechRoute } from "./speech/speech.routes";

export const routes: Routes = [
    {
        path: '/api/v1',
        children: [
            aliveRoute,
            authRouter,
            speechRoute
        ]
    }
];