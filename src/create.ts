import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const create = async () => {
  const createUser = await prisma.user.create({
    data: {
      username: "emdad",
      email: "email@gmail.com",
      role: "user",
    },
  });
};

create();
