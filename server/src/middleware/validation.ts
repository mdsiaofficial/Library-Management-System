import { NextFunction, Request, Response } from "express";
import Joi, { ObjectSchema } from "joi";
import { IUser } from "../models/user.model";
import { IUserModel } from "../daos/user.dao";

export function validateSchema(schema: ObjectSchema, property: string) {

  return async (req: Request, res: Response, next: NextFunction) => {

    try {
      // await schema.validateAsync(req.body)
      switch (property) {
        case 'query':
          await schema.validateAsync(req.query)
          break
        case 'params':
          await schema.validateAsync(req.params)
          break
        default:
          await schema.validateAsync(req.body)
      }
      next()
    } catch (error) {
      return res.status(422).json({ message: "Object validation failed, please include a valid object." })
    }
  }
}

export const Schemas = {
  user: {
    create: Joi.object<IUser>({
      type: Joi.string().valid('ADMIN', 'EMPLOYEE', 'PATRON').required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/).required(),
      // email: Joi.string().email().required(),
      password: Joi.string().required()
    }),
    login: Joi.object<{ email: string, password: string }>({
      email: Joi.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/).required(),
      password: Joi.string().required()
    }),
    userId: Joi.object<{ userId: string}>({
      userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
    }),
    update: Joi.object<IUserModel>({
      _id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      type: Joi.string().valid("ADMIN", "EMPLOYEE", "PATRON").required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/).required(),
      password: Joi.string()
    })
  }
}