import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
//   const result = await prisma.post.create({
//     data: {
//       title: "new post",
//       content: "content field",
//       author: "emdad",
//     },
//   });
//   console.log(result);

const getAllPosts = await prisma.post.findMany()
console.log(getAllPosts);
};

main();
 