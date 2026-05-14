import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const body = await request.json();

  const entrega = await prisma.entrega.create({
    data: {
      nf: body.nf,
      empresa: body.empresa,
      cnpj: body.cnpj,
      valor: Number(body.valor),
      dataSaida: new Date(body.data),
    },
  });

  return NextResponse.json(entrega);
}

export async function GET() {
  const entregas = await prisma.entrega.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json(entregas);
}