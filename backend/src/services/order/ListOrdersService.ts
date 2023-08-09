import prismaClient from "../../prisma";

export default class ListOrdersService {
  async execute() {
    const orders = await prismaClient.order.findMany(
      {
        where:{ draft: false, status: false },
        orderBy:{ created_at: 'desc' }
      }
    );
    return orders;
  }
}
