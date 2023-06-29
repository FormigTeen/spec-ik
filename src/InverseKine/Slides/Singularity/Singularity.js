import React from 'react';
import {
    Heading, Slide, Stepper
} from 'spectacle';
import Ombro from "./Assets/ombro.gif"
import { TopCore } from "../../../Slides/Imager/Top";

const Steps = [
    /**
    {
        title: 'Singularidade do Cotovelo',
        description: 'Em algumas situações, a projeção do movimento pode atingir 0 ou 180 graus de amplitude no cotovelo',
        src: Cotovelo,
    },
    {
        title: 'Singularidade do Pulso',
        description: 'Um Joint pode aplicar uma rotação de 180 graus extremamente quase instantânea para preservar o vetor velocidade',
        src: Pulso,
    },
     **/
    {
        title: 'Singularidade do Ombro',
        description: 'Em algumas situações, um Joint pode aplicar uma rotação de 180 graus quase instantânea para preservar o vetor velocidade',
        src: Ombro,
    },
]


const Singularity = () => {
    const defaultValue = {
        title: 'Singularidade do Ombro',
        description: 'Em algumas situações, um Joint pode aplicar uma rotação de 180 graus quase instantânea para preservar o vetor velocidade',
        src: Ombro,
    }

    return <Slide>
        <Stepper values={Steps} tagName='div' alwaysVisible>
            {(value, step, isActive) => (
                <TopCore src={isActive ? value.src : defaultValue.src} imageHeight="50vh">
                    <Heading margin="30px 0px" color="primary" fontSize="20px">
                        { value?.title ?? defaultValue.title }
                    </Heading>
                    <Heading margin="0px" color="primary" fontSize="15px">
                        { value?.description ?? defaultValue.description }
                    </Heading>
                </TopCore>
            )}
        </Stepper>
    </Slide>
}

export default Singularity
