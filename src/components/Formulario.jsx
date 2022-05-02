import { Fragment} from "react";
import useCotizador from "../hooks/useCotizador";
import { marcas , YEARS  , PLANES} from "../constants";
import Error from "./Error";
const Formulario = () => {


    const {  handleChangueDatos , datos , setError , error , cotizarSeguro} = useCotizador();

    const handleSubmit = e => {
        e.preventDefault();

        if(Object.values(datos).includes('')) {
            setError('Todos los datos son obligatorios')
            return;

        }

        setError('');

        cotizarSeguro()


    }

  return (
    <>
        {error && <Error /> }
        <form onSubmit={ handleSubmit } >
            <div className=" my-5">
                <label 
                    htmlFor="marca" 
                    className="block mb-3 font-bold text-gray-400 uppercase"
                >Marca</label>
                
                <select 
                    name="marca" 
                    id="marca"
                    className="w-full p-3 bg-white border border-gray-200"
                    value={ datos.marca }
                    onChange={ e => handleChangueDatos(e) }
                    >
                        
                    <option value="">--Seleciona Marca --</option>
                    { marcas.map(marca => (
                        <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                    )) 
                        
                    }
                </select>

            </div>
            
            <div className=" my-5">
                <label 
                    htmlFor="" 
                    className="block mb-3 font-bold text-gray-400 uppercase"
                >Año</label>
                
                <select 
                    name="year" 
                    id="year"
                    className="w-full p-3 bg-white border border-gray-200"
                    onChange={ e => handleChangueDatos(e)}
                    value={ datos.year }
                    >
                        
                    <option value="">--Seleciona Año --</option>
                    { YEARS.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    )) 
                        
                    }
                </select>

            </div>


            <div className=" my-5">
                <label 
                    htmlFor="plan" 
                    className="block mb-3 font-bold text-gray-400 uppercase"
                >Elige un Plan</label>

                <div className="flex gap-3 items-center">
                    { PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label htmlFor="plan">{plan.nombre}</label>
                            <input 
                                type="radio" 
                                value={plan.id} 
                                name='plan' 
                                onChange={ e => handleChangueDatos(e) }                                
                                />
                        </Fragment>

                    )) }
                </div>
            </div>
            
            <input 
                type="submit" 
                value="Cotizar" 
                className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors
                text-white uppercase cursor-pointer p-3 font-bold"
                
            />

        </form>
    
    </>
  )
}

export default Formulario;