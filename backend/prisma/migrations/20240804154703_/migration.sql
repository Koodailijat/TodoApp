/*
  Warnings:

  - You are about to drop the column `authorId` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Task` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[author_id,name]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `author_id` to the `Tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_authorId_fkey";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "authorId",
ADD COLUMN     "author_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "authorId",
ADD COLUMN     "author_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Tag_author_id_name_key" ON "Tag"("author_id", "name");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
