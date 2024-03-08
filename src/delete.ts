import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletePost = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 119,
  //     },
  //   });

  const deleteMany = await prisma.post.deleteMany({
    where: {
      title: {
        contains: "title 4",
      },
    },
  });

  console.log("Number of posts deleted:", deleteMany);

  if (deleteMany.count === 0) {
    console.log("No posts found with the specified conditions.");
  } else {
    console.log("Posts deleted successfully.");
  }
};

deletePost();
