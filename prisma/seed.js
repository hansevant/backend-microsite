import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // const hashedPassword = await bcrypt.hash('password', 10);

  // const user = await prisma.user.create({
  //   data: {
  //     id: 1122113,
  //     fullname: 'john_doe',
  //     address: 'john@example.com',
  //     password: hashedPassword,
  //     userBalances: {
  //       create: [
  //         {
  //           virtualAccount: 1234567890,
  //           balance: '1000.00',
  //         },
  //         // Add more UserBalance data here
  //       ],
  //     },
  //   },
  // });

  await prisma.userBalance.create({
    data:{
      id:1,
      userId: 1122113,
      va: 123456,
      balance: '99.99',
      invPack: 'DPLK PSU'
    }
  })

  // console.log('User created:', user);
}

main()
  .catch((error) => {
    console.error('Error seeding data:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
