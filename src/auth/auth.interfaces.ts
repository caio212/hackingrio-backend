export interface AuthBody {
    phone: number;
    password: string;
    cpf?: number;
    audio?: Uint16Array;
};