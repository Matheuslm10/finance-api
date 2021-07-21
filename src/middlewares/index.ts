import express, { Application } from 'express';
import helmet from 'helmet';

export function registerPreRouteMiddlewares (app: Application): void {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(helmet());
}

export function registerPostRouteMiddlewares (app: Application): void {
}