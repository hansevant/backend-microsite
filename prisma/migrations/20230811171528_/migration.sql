/*
  Warnings:

  - You are about to alter the column `userId` on the `user_balances` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the column `userId` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `user_balances` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `user_balances` DROP FOREIGN KEY `user_balances_userId_fkey`;

-- DropIndex
DROP INDEX `users_userId_key` ON `users`;

-- AlterTable
ALTER TABLE `user_balances` MODIFY `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `userId`,
    MODIFY `id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_balances_userId_key` ON `user_balances`(`userId`);

-- AddForeignKey
ALTER TABLE `user_balances` ADD CONSTRAINT `user_balances_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
