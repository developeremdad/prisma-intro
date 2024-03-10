import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // =================================================================  fluent api => Get posts throw user
  const result = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
    })
    .post();
  console.log(result);
  //   Output
  // [
  //   {
  //     id: 2,
  //     title: 'this is post title',
  //     content: 'this is post content',
  //     published: false,
  //     authorId: 1,
  //     createdAt: 2024-03-10T06:18:14.849Z,
  //     updatedAt: 2024-03-10T06:18:14.849Z
  //   },
  //   {
  //     id: 3,
  //     title: 'this is post title',
  //     content: 'this is post content',
  //     published: false,
  //     authorId: 1,
  //     createdAt: 2024-03-10T06:19:13.378Z,
  //     updatedAt: 2024-03-10T06:19:13.378Z
  //   }
  // ]
  // //  ================================================================= Populate
  // const populateResult = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   },
  //   include: {
  //     post: true,
  //   },
  // });
  // console.log(populateResult);
  // Output
  //   {
  //   id: 1,
  //   username: 'emdad3',
  //   email: 'email@gmail.com',
  //   role: 'user',
  //   post: [
  //     {
  //       id: 2,
  //       title: 'this is post title',
  //       content: 'this is post content',
  //       published: false,
  //       authorId: 1,
  //       createdAt: 2024-03-10T06:18:14.849Z,
  //       updatedAt: 2024-03-10T06:18:14.849Z
  //     },
  //     {
  //       id: 3,
  //       title: 'this is post title',
  //       content: 'this is post content',
  //       published: false,
  //       authorId: 1,
  //       createdAt: 2024-03-10T06:19:13.378Z,
  //       updatedAt: 2024-03-10T06:19:13.378Z
  //     }
  //   ]
  // }
};

relationalQueries();
