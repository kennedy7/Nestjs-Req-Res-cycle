import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { RequestService } from './request.service';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AuthenticationMiddleware.name);
  constructor(private requestService: RequestService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const userId = '123';
    this.requestService.setUserId(userId);
    next();
  }
}
