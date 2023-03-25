import prisma from '../services/db.js';

async function main() {
  // ... you will write your Prisma Client queries here

  // delete all records from all tables
  const deleteUsers = prisma.user.deleteMany();
  await prisma.$transaction([deleteUsers]);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
