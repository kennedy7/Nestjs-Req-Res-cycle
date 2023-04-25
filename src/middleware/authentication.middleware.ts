import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";


export class AuthenticationMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        
    }
}