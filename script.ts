import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "Morne",
      email: "louw.morne@gmail.com",
      age: 49,
      UserPreference: {
        create: {
          emailUpdates: true
        }
      }
    },
    include: {
      UserPreference: true
    }
  });
  console.log(user);
}

main()
  .catch(e => {
    console.error(e.message);
  })
  .finally((async () => {
    await prisma.$disconnect();
  }));
