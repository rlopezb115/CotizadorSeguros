import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const MensajeSinCotizacion = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const MensajeConCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const ContenedorCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const Resultado = ({ cotizacion }) => {

    return (
        cotizacion === 0
        ? 
            <MensajeSinCotizacion>Elige marca, año y tipo de plan</MensajeSinCotizacion>
        : 
        (
            <ContenedorCotizacion>
                <TransitionGroup
                    component="span"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{ enter: 500, exit: 500 }}
                    >
                        <MensajeConCotizacion>Total: $ <span>{cotizacion}</span></MensajeConCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ContenedorCotizacion>
        )
    );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
};
 
export default Resultado;