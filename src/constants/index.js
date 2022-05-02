export const marcas = [
    {id : 1, nombre: 'Europeo'},
    {id : 2, nombre: 'Americano'},
    {id : 3, nombre: 'Asiatico'},
]


const yearMax = new Date().getFullYear();

export const YEARS = Array.from( new Array(20), (valor , index) => yearMax - index );


export const PLANES = [

    {id : 1, nombre: 'Básico'},
    {id : 2, nombre: 'Completo'}
]