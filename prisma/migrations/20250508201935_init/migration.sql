/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ConsultMode" AS ENUM ('PHYSICAL', 'ONLINE');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('ENGLISH', 'HINDI', 'TELUGU');

-- CreateEnum
CREATE TYPE "Facility" AS ENUM ('APOLLO_HOSPITAL', 'OTHER_CLINICS');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "doctors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profileImageUrl" TEXT NOT NULL,
    "degrees" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,
    "experienceYears" INTEGER NOT NULL,
    "consultationFee" INTEGER NOT NULL,
    "noBookingFees" BOOLEAN NOT NULL DEFAULT true,
    "location" TEXT NOT NULL,
    "clinicName" TEXT NOT NULL,
    "availableAt" TIMESTAMP(3),
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "patientsTreated" INTEGER NOT NULL DEFAULT 0,
    "modesOfConsult" "ConsultMode"[] DEFAULT ARRAY['PHYSICAL', 'ONLINE']::"ConsultMode"[],
    "languages" "Language"[] DEFAULT ARRAY['ENGLISH']::"Language"[],
    "facilities" "Facility"[] DEFAULT ARRAY[]::"Facility"[],

    CONSTRAINT "doctors_pkey" PRIMARY KEY ("id")
);
