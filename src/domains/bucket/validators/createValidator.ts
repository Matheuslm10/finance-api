import { validate, Joi } from "express-validation";

const createValidation = {
  body: Joi.object({
    userId: Joi.string().required(),
    name: Joi.string().required(),
    balance: Joi.number().optional(),
    targetBalance: Joi.number().optional(),
    dueDate: Joi.date().optional(),
  }),
};

export default validate(createValidation, {}, {});
