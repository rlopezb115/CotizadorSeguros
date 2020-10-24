import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import { valueDefaulApp } from  './helpers';

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
    background-color: #F5F5F5;
    padding: 3rem;
`;

const App = () => {
    
    // states
    const [ resumen, guardarResumen ] = useState(valueDefaulApp);
    const [ cargando, guardarCargando ] = useState(false);
    
    const { datos, cotizacion } = resumen;

    return (
        <Contenedor>
            <Header
                titulo="Cotizador de Seguros"
            />
            <ContenedorFormulario>
                <Formulario
                    guardarResumen={guardarResumen}
                    guardarCargando={guardarCargando}
                />
                {
                    cargando 
                    ? <Spinner /> 
                    : (
                        <Fragment>
                            <Resumen
                                datos={datos}
                            />
                            <Resultado
                                cotizacion={cotizacion}
                            />
                        </Fragment>
                    )}
            </ContenedorFormulario>
        </Contenedor>
    );
}
 
export default App;