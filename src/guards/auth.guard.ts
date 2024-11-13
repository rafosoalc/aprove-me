import { CanActivate, ExecutionContext, forwardRef, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { privateDecrypt } from "crypto";
import { AuthService } from "src/auth/auth.service";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        // @Inject(forwardRef(()=> AuthService))
        private readonly authService: AuthService) { }

    canActivate(context: ExecutionContext) {
        const { authorization } = context.switchToHttp().getRequest().headers;

        if (!authorization) {
            throw new UnauthorizedException('Sem o header authorization')
        }
        const [, token] = authorization.split(' ')
        if (!token) {
            throw new UnauthorizedException('O token está vazio!')
        }
        try {
            const payload = this.authService.verifyToken(token)
            return true
        } catch (error) {
            throw new UnauthorizedException('token Invalido');
        }

    }

}