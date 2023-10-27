import { PrismaClient } from "@prisma/client";
import { categoria } from "./data/categoria";
import { producto } from "./data/producto";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  try {
    await prisma.categoria.createMany({
      data: categoria,
    });
    await prisma.productos.createMany({
      data: producto,
    });
  } catch (error) {
    console.log(error);
  }
};
main();
