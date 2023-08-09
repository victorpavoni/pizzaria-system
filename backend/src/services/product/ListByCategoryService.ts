import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: string;
}

export default class ListByCategoryService{
  async execute({ category_id }: CategoryRequest) {
    const findByCategory = await prismaClient.product.findMany({
      where: {
        category_id
      }
    });
    return findByCategory;
  }
}
