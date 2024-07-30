/*
  Warnings:

  - You are about to drop the column `capacity` on the `Auditorium` table. All the data in the column will be lost.
  - You are about to drop the column `seatId` on the `Booking` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Auditorium` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_seatId_fkey`;

-- AlterTable
ALTER TABLE `Auditorium` DROP COLUMN `capacity`;

-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `seatId`,
    MODIFY `time` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `_BookingSeats` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BookingSeats_AB_unique`(`A`, `B`),
    INDEX `_BookingSeats_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Auditorium_name_key` ON `Auditorium`(`name`);

-- AddForeignKey
ALTER TABLE `_BookingSeats` ADD CONSTRAINT `_BookingSeats_A_fkey` FOREIGN KEY (`A`) REFERENCES `Booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BookingSeats` ADD CONSTRAINT `_BookingSeats_B_fkey` FOREIGN KEY (`B`) REFERENCES `Seat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
