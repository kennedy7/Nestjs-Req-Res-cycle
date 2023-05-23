import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { AuthGuard } from './middleware/guards/auth.guard';
import { RequestService } from './middleware/request.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RequestService, 
    {
    provide: APP_GUARD, 
    useClass: AuthGuard
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor
  }
],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes('*');
  }
}
