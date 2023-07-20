-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "date_start" DATE NOT NULL,
    "data_end" DATE NOT NULL,
    "description" TEXT,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
