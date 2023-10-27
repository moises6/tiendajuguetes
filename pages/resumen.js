import Layout from "@/layout/Layout";
import useJuguetes from "@/hooks/useJuguetes";
import ResumenProductos from "@/components/ResumenProductos";

export default function Resumen() {
  const { pedido } = useJuguetes();
  return (
    <Layout pagina={"Resumen"}>
      <h1 className="text-4xl font-black ">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu Pedido</p>

      {pedido.length === 0 ? (
        <p className="text-center text-2xl">No hay elemento en tu pedido</p>
      ) : (
        pedido.map((producto) => (
          <ResumenProductos key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
}
