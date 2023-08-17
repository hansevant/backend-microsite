/*
  Warnings:

  - You are about to drop the column `virtualAccount` on the `user_balances` table. All the data in the column will be lost.
  - Added the required column `invPack` to the `user_balances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `va` to the `user_balances` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_balances` DROP COLUMN `virtualAccount`,
    ADD COLUMN `invPack` VARCHAR(191) NOT NULL,
    ADD COLUMN `va` INTEGER NOT NULL;
