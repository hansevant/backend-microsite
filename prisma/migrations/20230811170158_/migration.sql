/*
  Warnings:

  - You are about to drop the column `address` on the `user_balances` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user_balances` table. All the data in the column will be lost.
  - Added the required column `balance` to the `user_balances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `virtualAccount` to the `user_balances` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_balances` DROP COLUMN `address`,
    DROP COLUMN `password`,
    ADD COLUMN `balance` VARCHAR(191) NOT NULL,
    ADD COLUMN `virtualAccount` INTEGER NOT NULL;
