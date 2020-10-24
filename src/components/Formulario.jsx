import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import 
{
    valueDefaulApp,
    calcularPorcientoPorAnio, 
    calcularIncrementoMarca,
    obtenerPlan 
} from  '../helpers';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #E1E1E1;
    --webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #0083BF;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: #F00;
    color: #FFF;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;

`;

const Formulario = ({guardarResumen, guardarCargando}) => 
{
    const [datos, guardarDatos] = useState(valueDefaulApp.datos);
    const [error, guardarError] = useState({
        status: false,
        mensaje: ''
    });

    const { marca, anio, plan } = datos;
    const { status, mensaje } = error;

    const onChangeData = e => 
    {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e =>
    {
        e.preventDefault();
        let mensajeError = '';

        if (marca.trim() === '')
            mensajeError += 'El campo "marca" es requerido. ';

        if (anio.trim() === '')
            mensajeError += 'El campo "anio" es requerido. ';

        if (plan.trim() === '')
            mensajeError += 'El campo "plan" es requerido.';

        if (mensajeError !== '')
        {
            guardarError({
                status: true,
                mensaje: mensajeError
            });

            return;
        }

        guardarError({
            status: false,
            mensaje: ''
        });

        // Precio Base
        let resultado = 2000;
        resultado -= calcularPorcientoPorAnio(anio, resultado, 3);
        resultado = calcularIncrementoMarca(marca) * resultado;
        resultado = parseFloat(obtenerPlan(plan) * resultado).toFixed(2);

        guardarCargando(true);
        setTimeout(() => {
            guardarCargando(false);

            guardarResumen({
                cotizacion: Number(resultado),
                datos
            });
        }, 5000);
        
    };

    return (
        <form
            onSubmit={handleSubmit}
        >
            {
                status ? <Error>{mensaje}</Error> : null
            }
            <Field>
                <Label
                    htmlFor="marca"
                >Marca</Label>
                <Select 
                    name="marca"
                    id="marca"
                    value={marca}
                    onChange={onChangeData}
                >
                    <option value="">-- Seleccione una marca --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Field>
            <Field>
                <Label
                    htmlFor="anio"
                >Año</Label>
                <Select 
                    name="anio"
                    id="anio"
                    value={anio}
                    onChange={onChangeData}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <label>
                    <InputRadio 
                        type="radio"
                        name="plan"
                        value="basico"
                        checked={plan === "basico"}
                        onChange={onChangeData}
                    /> Básico
                </label>

                <label>
                    <InputRadio 
                        type="radio"
                        name="plan"
                        value="completo"
                        checked={plan === "completo"}
                        onChange={onChangeData}
                    /> Completo
                </label>
            </Field>
            <Boton 
                type="submit"
            >Cotizar</Boton>
        </form>
    );
}

Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired, 
    guardarCargando: PropTypes.func.isRequired
};
 
export default Formulario;