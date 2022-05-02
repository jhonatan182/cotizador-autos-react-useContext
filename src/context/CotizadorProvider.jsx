/* extraemos la funcion para crear un context */
import { createContext, useState } from "react";
import { obtenerDiferenciaYear  , porcentajeMarca, porcentajePlan , formatearDinero} from "../helpers";



/* creamos la varible que va contener el context */
const CotizadorContext = createContext();

/* creamos al funcion provider que es el origin de los datos */
const CotizadorProvider = ({children}) => {

    const [ datos , setDatos ] = useState({
        marca : '',
        year: '',
        plan: ''
    })

    const [error , setError] = useState('');
    const [resultado , setResultado] = useState(0);
    const [cargando , setCargando] = useState(false);

    const handleChangueDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })

    }

    const cotizarSeguro = () => {

        // una base
        let resultado = 2000;
        //obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year);


        // hay que restar el 3% por cada año
        resultado -= (0.03 * diferencia) * resultado;

        //americano 15%
        // europeo 30%
        // asiatico 5%
        resultado *= porcentajeMarca(datos.marca);


        //basico 20%
        //completo 50%  

        resultado *= porcentajePlan(datos.plan);

        //convertir dinero
        resultado = formatearDinero(resultado);
        

        setCargando(true);

        setTimeout(() => {
            setCargando(false);
            setResultado(resultado);
        }, 2000);

        

    }

    return (
        <CotizadorContext.Provider 
            value={{
                handleChangueDatos,
                datos,
                setError,
                error,
                cotizarSeguro,
                resultado,
                cargando
            }}>

            { children }
        </CotizadorContext.Provider>

    )


}

export {
    CotizadorProvider
}

export default CotizadorContext;