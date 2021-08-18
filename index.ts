import express, { Application } from "express";

import exampleRoutes from './src/domains/example/routes';
import bindBucketRoutes from './src/domains/bucket/bindRoutes';
import { registerPreRouteMiddlewares, registerPostRouteMiddlewares } from './src/middlewares';

const app: Application = express();
const port = 8080;

registerPreRouteMiddlewares(app);

app.use(exampleRoutes);
bindBucketRoutes(app);

registerPostRouteMiddlewares(app);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}