import Layout from "@/layout/Layout";
import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import useJuguetes from "@/hooks/useJuguetes";
import Image from "next/image";
import { producto } from "@/prisma/data/producto";
import Producto from "@/components/Producto";
export default function Home() {
  const { categoriaActual } = useJuguetes();
  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu Juguete a continuación
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaActual?.productoes?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  );
}

/*Código para consultar a la base datos con props
export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categorias = await prisma.categoria.findMany();

  return {
    props: {
      categorias,
    },
  };
};
*/
