/* eslint-disable no-var */
import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

//usar para chamar o banco de dados
export const db = prisma;

// esse código garante que sempre teremos uma conexão aberta com o banco de dados
// e que não vamos abrir uma nova conexão a cada requisição
