import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// prisma.user.create({
//     data: {
//         name: 'Diego',
//         username: 'Digo',
//         password: '9087',
//         cityId: 1,
//         countryId: 1,
//     },
// }).then(() => {
//     console.log('Cadastrou');

// })

async function main() {
    const users = await prisma.user.findMany({
        include: {
            City: true,
            Country :true
        }
    })
  console.log(users);  
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
