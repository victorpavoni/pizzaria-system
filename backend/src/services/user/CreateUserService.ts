import prismaClient from "../../prisma";
import { hash } from 'bcryptjs';

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  async execute({name, email, password}:UserRequest) {
    if(!email) {
      throw new Error("Incorrect email");
    }
    const userAlreadyExists = await prismaClient.user.findFirst({where:{email}})
    if(userAlreadyExists) throw new Error("User already exists")

    if(!name) {
      throw new Error("Incorrect name");
    }
    if(!password) {
      throw new Error("Incorrect password");
    }

    const hashedPassword = await hash(password, 8);

    const user = await prismaClient.user.create({data:{name, email, password: hashedPassword}, select: {id: true, name: true, email: true}});

    return user;
  }
}
