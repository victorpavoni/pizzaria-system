import prismaClient from "../../prisma";

export default class CreateCategoryService {
  async execute(name: string) {
    if(!name) throw new Error("Incorrect name");
    const categoryExists = await prismaClient.category.findFirst({where:{name}});
    if(categoryExists) throw new Error("Category already exists");
    const category = await prismaClient.category.create(
      {
        data:{
          name
      },
        select: {
          id: true,
          name: true
        }
      }
    );

    return category;
  }
}
