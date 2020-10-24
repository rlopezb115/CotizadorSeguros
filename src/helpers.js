const calcularPorcientoPorAnio = (anio, base, porciento) =>
{
    const diferenciaAnio = new Date().getFullYear() - anio;
    return ((diferenciaAnio * porciento) * base) / 100;
};

const calcularIncrementoMarca = marca =>
{
    let incremento;
    switch (marca)
    {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            incremento = 1.0;
            break;
    };

    return incremento;
};

const obtenerPlan = plan =>
{
    return plan === 'basico' ? 1.20 : 1.50;
};

const primerMayuscula = texto =>
{
    return texto.charAt(0).toUpperCase() + texto.slice(1);
};

// Valores por Default
const valueDefaultForm = {
    marca: '',
    anio: '',
    plan: 'basico'
};

const valueDefaulApp = {
    cotizacion: 0.00,
    datos: valueDefaultForm
};

export 
{
    valueDefaulApp,
    calcularPorcientoPorAnio,
    calcularIncrementoMarca,
    obtenerPlan,
    primerMayuscula
};
