export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;

}


export function porcentajeMarca(marca) {

            //americano 15%
        // europeo 30%
        // asiatico 5%

        let incremento = 0
        
        switch(marca) {
            case '2' : 
                incremento = 1.15;
                break;

            case '1' : 
                incremento = 1.30;
                break;


            default:
                incremento =  1.05;
        }

        return incremento;

}

export function porcentajePlan(plan) {

        //basico 20%
        //completo 50%  

    let incremento = 0

    switch(plan) {
        case '1' : 
            incremento = 1.20;
            break;

        case '2' : 
            incremento = 1.50;
            break;

        default:
            break;
    }

    return incremento;

}


export function formatearDinero(cantidad) {
    return cantidad.toLocaleString('HNL' ,{ style: 'currency' , currency : 'HNL' });
}