import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class ValidateCustomerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("here in middleware");
        const { auth } = req.headers;

        if (!auth) return res.status(403).send({ error: 'auth not found' });

        next()
    }
}