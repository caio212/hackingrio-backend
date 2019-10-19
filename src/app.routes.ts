import { Routes } from "nest-router";
import { authRouter } from "./auth/auth.routes";

export const routes: Routes = [
    {
        path: '/api/v1',
        children: [
            authRouter
        ]
    }
];