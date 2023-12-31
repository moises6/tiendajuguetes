import Image from "next/image";
import useJuguetes from "../hooks/useJuguetes";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useJuguetes();

  return (
    <>
      <Image
        width={300}
        height={100}
        src={`/logo.jpeg`}
        alt="imagen logotipo"
      />
      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
