import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insert = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "new post",
  //       content: "content field",
  //       author: "emdad",
  //     },
  //   });
  //   console.log(result);

  const insertMany = await prisma.post.createMany({
    data: [
      {
        title: "title 1",
        content: "content 1",
      },
      {
        title: "title 2",
        content: "content 2",
      },
      {
        title: "title 3",
        content: "content 3",
      },
      {
        title: "title 4",
        content: "content 4",
      },
      {
        title: "title 5",
        content: "content 5",
        author: "emdad",
      },
      {
        title: "title 6",
        content: "content 6",
      },
      {
        title: "title 7",
        content: "content 7",
        author: "emdad",
      },
      {
        title: "title 8",
        content: "content 8",
      },
      {
        title: "title 1",
        content: "content 1",
      },
      {
        title: "title 2",
        content: "content 2",
      },
      {
        title: "title 3",
        content: "content 3",
      },
      {
        title: "title 4",
        content: "content 4",
      },
      {
        title: "title 5",
        content: "content 5",
        author: "emdad",
      },
      {
        title: "title 6",
        content: "content 6",
      },
      {
        title: "title 7",
        content: "content 7",
        author: "emdad",
      },
      {
        title: "title 8",
        content: "content 8",
      },
      {
        title: "title 1",
        content: "content 1",
      },
      {
        title: "title 2",
        content: "content 2",
      },
      {
        title: "title 3",
        content: "content 3",
      },
      {
        title: "title 4",
        content: "content 4",
      },
      {
        title: "title 5",
        content: "content 5",
        author: "emdad",
      },
      {
        title: "title 6",
        content: "content 6",
      },
      {
        title: "title 7",
        content: "content 7",
        author: "emdad",
      },
      {
        title: "title 8",
        content: "content 8",
      },
    ],
  });
  console.log(insertMany);
};

insert();
