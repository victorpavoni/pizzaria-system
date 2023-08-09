import prismaClient from "../../prisma";

export default class ListCategoryService {
  async execute(name: string) {
    const categorys = await prismaClient.category.findMany(
      {
        select:{
          id: true,
          name: true
        }
      }
    );
    return categorys;
  }
}
