import prismaClient from "../../prisma";

export default class DetailUserService {
  async execute(id: string) {
    const user = await prismaClient.user.findFirst({where:{id}, select: {id: true, name: true, email: true}});

    return user
  }
}
