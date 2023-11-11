/*
  Warnings:

  - You are about to drop the column `gender` on the `testimonials` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `testimonials` DROP COLUMN `gender`,
    MODIFY `img` VARCHAR(191) NOT NULL DEFAULT 'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png';
