import React from "react";
import Image from "next/image";
import axios from 'axios'
import { Toast, toast } from "react-toastify";
import { formatearDinero } from "@/helpers";

export default function Orden({orden}) {
    //console.log(orden)
    const { id, nombre, total, pedido } = orden

    const completarOrden = async () => {
        try {
            await axios.post(`/api/ordenes/${id}`)
            toast.success('Orden lista');
        } catch (error) {
            toast.error('Hubo un error');
        }
    }

    console.log(orden.id)
    return (
        <div className="border p-10 space-y-5">
            <h3 className="text-2xl font-bold ">Orden: {id}</h3>
            <p className="text-lg font-bold">Cliente: {nombre}</p>

            <div>
                {pedido.map(orden => (
                    <div key={orden.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                        <Image
                            width={400}
                            height={500}
                            src={`/assets/img/${orden.imagen}.jpg`}
                            alt={`Imagen Juguete ${nombre} `}
                        />

                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500">{orden.nombre}</h4>
                            <p className="text-lg font-bold">Cantidad: {orden.cantidad}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md: flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-500">
                    Total a pagar: {formatearDinero(total)}
                </p> 
                <button className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg"
                type="button"
                onClick={completarOrden}>
                Completar orden
                </button>
            </div>
        </div>
    )
}