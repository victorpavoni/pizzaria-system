import { Request, Response } from "express";

import CreateUserService from "../../services/user/CreateUserService";

export default class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({ name, email, password });
    return res.json(user);
  }
}
