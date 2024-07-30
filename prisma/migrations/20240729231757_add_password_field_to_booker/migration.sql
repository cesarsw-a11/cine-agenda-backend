/*
  Warnings:

  - Added the required column `password` to the `Booker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Booker` ADD COLUMN `password` VARCHAR(191) NOT NULL;
