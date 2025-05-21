/*
  Warnings:

  - The values [anfibios] on the enum `Animal_tipo` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Animal` MODIFY `tipo` ENUM('AVE', 'MAMIFERO', 'ANFIBIO', 'REPTIL', 'PEZ') NOT NULL;
