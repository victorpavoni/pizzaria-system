import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

export default class SendOrderService {
  async execute({ order_id: id }: OrderRequest) {
    const order = await prismaClient.order.update({
      where: { id },
      data: { draft: false }
    })
    return order;
  }
}
