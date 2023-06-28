import React from 'react';
import {
    Heading, Slide, Stepper
} from 'spectacle';
import Cotovelo from "./Assets/cotovelo.gif"
import Ombro from "./Assets/ombro.gif"
import Pulso from "./Assets/pulso.gif"
import {TopCore} from "../../../Slides/Imager/Top";

const Steps = [
    {
        title: 'Singularidade do Cotovelo',
        description: 'Em algumas situações, a projeção do movimento pode atingir 0 ou 180 graus de amplitude no cotovelo',
        src: Cotovelo,
    },
    {
        title: 'Singularidade do Ombro',
        description: 'Em algumas situações, um Joint pode aplicar uma rotação de 180 graus extremamente quase instantânea para preservar o vetor velocidade',
        src: Ombro,
    },
    {
        title: 'Singularidade do Pulso',
        description: 'Um Joint pode aplicar uma rotação de 180 graus extremamente quase instantânea para preservar o vetor velocidade',
        src: Pulso,
    },
]


const Singularity = () => {
    const defaultValue = {
        title: 'Exemplos de Singularidades',
        description: 'Muitas vezes a solução pode trazer situações impossíveis fisicamente de serem aplicadas',
        src: null,
    }

    return <Slide>
        <Stepper values={Steps} tagName='div' alwaysVisible>
            {(value, step, isActive) => (
                <TopCore src={isActive ? value.src : defaultValue.src} imageHeight="50vh">
                    <Heading margin="30px 0px" color="primary" fontSize="20px">
                        { value?.title ?? defaultValue.title }
                    </Heading>
                    <Heading margin="0px" color="primary" fontSize="15px">
                        { value?.description }
                    </Heading>
                </TopCore>
            )}
        </Stepper>
    </Slide>
}

export default Singularity
