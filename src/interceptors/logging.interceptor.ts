import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthenticationMiddleware } from "src/middleware/authentication.middleware";


@Injectable()
export class LoggingInterceptor implements NestInterceptor{
    private readonly logger = new Logger(AuthenticationMiddleware.name)
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        const userAgent = request.get('user-agent') || '';
        const {ip, method, path: url} = request;

        this.logger.log(`${method} ${url} ${userAgent}`)
    }
}