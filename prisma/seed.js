import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password', 10);

  await prisma.users.createMany({
    data: [
      {
        userId: '119822',
        fullname: 'john_doe',
        address: 'john@example.com',
        password: hashedPassword,
      },
      // Add more seed data here
    ],
  });
}

main()
  .catch((error) => {
    console.error('Error seeding data:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
