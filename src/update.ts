import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const update = async () => {
  // const updatePost = await prisma.post.update({
  //   where: {
  //     id: 8,
  //   },
  //   data: {
  //     title: "title 1",
  //   },
  // });

  // const updateMany = await prisma.post.updateMany({
  //   where: {
  //     title: "title 2",
  //   },
  //   data: {
  //     published: true,
  //   },
  // });
  // console.log(updateMany);

  // Upsert
  const upsert = await prisma.post.upsert({
    where: {
      id: 115,
    },
    update: {
      title: "data is available and update",
    },
    create: {
      title: "data not available and create data.",
      content: "content not available so create content.",
    },
  });
  console.log({ upsert });
};

update();
