import prismaClient from "../../prisma";

interface DetailRequest {
  order_id: string;
}

export default class DetailOrderService {
  async execute({ order_id }: DetailRequest) {
    const orders = await prismaClient.item.findMany({
      where: {
        order_id
      },
      include: {
        Product: true,
        Order: true
      }
    });
    return orders;
  }
}
