import express, { Application } from "express";

console.log(bucketRep);

import exampleRoutes from './src/domains/example/routes';
import { registerPreRouteMiddlewares, registerPostRouteMiddlewares } from './src/middlewares';

const app: Application = express();
const port = 8080;

registerPreRouteMiddlewares(app);

app.use(exampleRoutes);

registerPostRouteMiddlewares(app);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}