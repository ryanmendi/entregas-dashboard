-- CreateTable
CREATE TABLE "Entrega" (
    "id" SERIAL NOT NULL,
    "nf" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "dataSaida" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entrega_pkey" PRIMARY KEY ("id")
);
