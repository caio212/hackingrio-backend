import { Routes } from "nest-router";
import { authRouter } from "./auth/auth.routes";
import { aliveRoute } from "./alive/alive.routes";

export const routes: Routes = [
    {
        path: '/api/v1',
        children: [
            aliveRoute,
            authRouter
        ]
    }
];