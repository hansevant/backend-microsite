/*
  Warnings:

  - You are about to drop the column `balance` on the `user_balances` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `user_balances` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `user_balances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user_balances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `user_balances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_balances` DROP FOREIGN KEY `user_balances_user_id_fkey`;

-- DropIndex
DROP INDEX `users_user_id_key` ON `users`;

-- AlterTable
ALTER TABLE `user_balances` DROP COLUMN `balance`,
    DROP COLUMN `user_id`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `user_id`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_userId_key` ON `users`(`userId`);

-- AddForeignKey
ALTER TABLE `user_balances` ADD CONSTRAINT `user_balances_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
