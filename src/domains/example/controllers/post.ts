import { Request, Response } from 'express';

export default async (req: Request, res: Response): Promise<Response> => {
    console.log(req);
    console.log(typeof req.body);

    return res.status(200).send({
        message: "Hello World!",
    });
}