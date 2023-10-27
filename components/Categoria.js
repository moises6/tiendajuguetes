import React from "react";
import Image from "next/image";
import useJuguetes from "@/hooks/useJuguetes";

const Categoria = ({ categoria }) => {
  const { categoriaActual, handleClickCategoria } = useJuguetes();
  const { nombre, icono, id } = categoria;

  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={100}
        height={100}
        src={`/assets/icono_${icono}.png`}
        alt="Imagen icono"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
