import express, { Application, Request, Response } from "express";
import helmet from "helmet";

const app: Application = express();
const port = 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Rota
app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

app.post(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        console.log(req);
        console.log(typeof req.body);

        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

// Middlewares

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}