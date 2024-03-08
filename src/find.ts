import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const find = async () => {
  // Find all post
  //   const findAll = await prisma.post.findMany();

  //   find fist matched post with error handling.
  // const findPost = await prisma.post.findFirstOrThrow({
  //     where:{
  //         id: 8
  //     }
  // })

  // find a post uniquely
  const findPostUnique = await prisma.post.findUnique({
    where: {
      id: 8,
    },
  });
  console.log(findPostUnique);
};

find();
