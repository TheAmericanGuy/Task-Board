declare module 'jwt-decode' {
    export default function jwt_decode<T = unknown>(token: string): T;

    export interface JwtPayload {
        exp?: number;
        iat?: number;
        [key: string]: any;
    };
};
