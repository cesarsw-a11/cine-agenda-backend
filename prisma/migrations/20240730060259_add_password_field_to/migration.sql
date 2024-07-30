/*
  Warnings:

  - You are about to alter the column `time` on the `Booking` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to drop the `_BookingSeats` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `capacity` to the `Auditorium` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seatId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_BookingSeats` DROP FOREIGN KEY `_BookingSeats_A_fkey`;

-- DropForeignKey
ALTER TABLE `_BookingSeats` DROP FOREIGN KEY `_BookingSeats_B_fkey`;

-- DropIndex
DROP INDEX `Auditorium_name_key` ON `Auditorium`;

-- AlterTable
ALTER TABLE `Auditorium` ADD COLUMN `capacity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Booking` ADD COLUMN `seatId` INTEGER NOT NULL,
    MODIFY `time` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `_BookingSeats`;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_seatId_fkey` FOREIGN KEY (`seatId`) REFERENCES `Seat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
