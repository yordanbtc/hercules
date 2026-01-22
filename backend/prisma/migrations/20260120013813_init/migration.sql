/*
  Warnings:

  - The values [REGULAR] on the enum `OrganizationMemberRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('USER', 'ADMIN');

-- AlterEnum
BEGIN;
CREATE TYPE "OrganizationMemberRole_new" AS ENUM ('MANAGER', 'MEMBER');
ALTER TYPE "OrganizationMemberRole" RENAME TO "OrganizationMemberRole_old";
ALTER TYPE "OrganizationMemberRole_new" RENAME TO "OrganizationMemberRole";
DROP TYPE "public"."OrganizationMemberRole_old";
COMMIT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "type" "UserType" NOT NULL DEFAULT 'USER';

-- DropEnum
DROP TYPE "Role";
