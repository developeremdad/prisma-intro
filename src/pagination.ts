import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const pagination = async () => {
  const result = await prisma.post.findMany({
    cursor: {
      id: 48,
    },
    skip: 50,
    take: 4,
    select: {
      id: true,
      title: true,
      content: true,
    },
    // orderBy: {
    //   title: "asc",
    // },
  });
  console.log(result);
};

pagination();
