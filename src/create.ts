import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const create = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "emdad5",
  //     email: "email@gmail.com",
  //     role: "user",
  //   },
  // });
  // console.log(createUser);

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is a bio..",
  //     userId: 4,
  //   },
  // });
  // console.log(createProfile);

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "others",
  //   },
  // });
  // console.log(createCategory);

  const createPost = await prisma.post.create({
    data: {
      title: "this is post title 3",
      content: "this is post content 3",
      authorId: 3,
      postCategory: {
        // create: {
        //   // By category reference
        //   // category: {
        //   //   connect: {
        //   //     id: 2,
        //   //   },
        //   // },

        //   // By category id
        //   // categoryId: 3,
        // },

        // Make many to many relation
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 3,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

create();
