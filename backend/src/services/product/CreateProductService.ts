import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

export default class CreateProductService {
  async execute({ name, price, description, banner, category_id }: ProductRequest) {
    if(!name) throw new Error("Incorrect name");
    if(!price) throw new Error("Incorrect price");
    if(!description) throw new Error("Incorrect description");
    if(!banner) throw new Error("Incorrect banner");
    if(!category_id) throw new Error("Incorrect category_id");

    const product = await prismaClient.product.create(
      {
        data: {name, price, banner, description, category_id},
        select: {name: true, price: true, banner: true, description: true, category_id: true}
      },
    )

    return product;
  }
}
