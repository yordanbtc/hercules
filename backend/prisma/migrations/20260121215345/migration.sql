/*
  Warnings:

  - You are about to drop the column `productId` on the `Invoice` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `Invoice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderId]` on the table `Invoice` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTotal` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('PENDING', 'PAID', 'CANCELLED', 'VOID');

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_productId_fkey";

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "productId",
ADD COLUMN     "dueDate" TIMESTAMP(3),
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "paidAt" TIMESTAMP(3),
ADD COLUMN     "status" "InvoiceStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "subTotal" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "tax" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "total" DECIMAL(10,2) NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_number_key" ON "Invoice"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_orderId_key" ON "Invoice"("orderId");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
