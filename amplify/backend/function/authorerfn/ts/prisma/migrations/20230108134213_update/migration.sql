/*
  Warnings:

  - Added the required column `userId` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "userId" INT4 NOT NULL;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
