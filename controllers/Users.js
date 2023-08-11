const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function createUser(userId, fullname, address, password) {
  const hashedPassword = await bcrypt.hash(password, 10); // 10 adalah jumlah salt rounds

  const user = await prisma.user.create({
    data: {
      userId,
      fullname,
      address,
      password: hashedPassword,
    },
  });

  return user;
}