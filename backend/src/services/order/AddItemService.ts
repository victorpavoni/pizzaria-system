import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

export default class AddItemService {
  async execute({ amount, order_id, product_id }: ItemRequest) {
    const order = await prismaClient.item.create({
      data:{
        amount,
        order_id,
        product_id
      }
    });
    return order;
  }
}
