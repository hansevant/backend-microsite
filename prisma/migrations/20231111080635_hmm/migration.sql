/*
  Warnings:

  - Added the required column `img` to the `testimonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `star` to the `testimonials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `testimonials` ADD COLUMN `img` VARCHAR(191) NOT NULL,
    ADD COLUMN `star` INTEGER NOT NULL;
