import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helpers';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => 
{
    const { marca, anio, plan } = datos;
    if (marca.trim() === '' || anio.trim() === '' || plan.trim() === '')
        return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: { primerMayuscula(marca) }</li>
                <li>Año: { anio }</li>
                <li>Plan: { primerMayuscula(plan) }</li>
            </ul>
        </ContenedorResumen>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
};
 
export default Resumen;