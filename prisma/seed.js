import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password', 10);

  const user = await prisma.user.create({
    data: {
      id: 5377113,
      fullname: 'Louis William',
      address: 'Louisville',
      password: hashedPassword,
      userBalances: {
        create: [
          {
                va: 224496,
                balance: '49.99',
                invPack: 'DPLK PSU'
          },
          {
                va: 214556,
                balance: '19.99',
                invPack: 'DPLK PSU'
          },
          // Add more UserBalance data here
        ],
      },
    },
  });

  // await prisma.userBalance.create({
  //   data:{
  //     userId: 1122113,
  //     va: 224496,
  //     balance: '39.99',
  //     invPack: 'DPLK PSU'
  //   }
  // })

  console.log('User created:', user);
}

main()
  .catch((error) => {
    console.error('Error seeding data:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
