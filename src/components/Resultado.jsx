import { useCallback , useRef , useMemo } from "react";
import useCotizador from "../hooks/useCotizador";
import { marcas , PLANES } from "../constants";

const Resultado = () => {


    const { resultado, datos} = useCotizador();
    const { marca , plan , year } = datos;

    //useRef -> 'congelar un valor del state  y evitar re-render
    const yearRef = useRef(year);

    if(resultado === 0) return null;

    const [nombreMarca] = useCallback(marcas.filter(m => m.id === Number(marca)), [resultado]);
    const [tipoPlan] = useMemo(() => PLANES.filter(p => p.id === Number(plan)), [resultado]);



    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>

            <p className="my-2">
                <span className="font-bold">Marca: </span>
                { nombreMarca.nombre }
            </p>
            <p className="my-2">
                <span className="font-bold">Año: </span>
                { yearRef.current }
            </p>
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                { tipoPlan.nombre }
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold">Total Cotizacion: </span>
                { resultado }
            </p>
        </div>
    )
}

export default Resultado;