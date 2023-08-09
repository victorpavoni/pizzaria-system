import prismaClient from "../../prisma";

interface OrderRequest{
  order_id: string;
}

export default class RemoveOrderService {
  async execute({ order_id: id }: OrderRequest){
    const order = await prismaClient.order.delete({where:{id}});
    return order;
  }
}
