import { Request, Response } from "express";

import ListCategoryService from "../../services/category/ListCategoryService";

export default class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const listCategoryService = new ListCategoryService();
    const categorys = await listCategoryService.execute(name);
    return res.json(categorys);
  }
}
