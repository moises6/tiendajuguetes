import React from "react";
import Image from "next/image";
import { producto } from "@/prisma/data/producto";
import { formatearDinero } from "@/helpers";
import useJuguetes from "../hooks/useJuguetes";

const Producto = ({ producto }) => {
  const { handleSetProducto, handleChangeModal } = useJuguetes();
  const { nombre, imagen, precio } = producto;
  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen Juguete ${nombre} `}
        width={400}
        height={250}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          type="button "
          className="bg-indigo-500 hover:bg-indigo-900 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleChangeModal();
            handleSetProducto(producto);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
