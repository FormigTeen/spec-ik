import React from 'react';
import {
    Heading,
    UnorderedList, ListItem
} from 'spectacle';
import Left from "../../Slides/Text/Left";

const Jacobian = () => <Left title='Solução Jacobiana  (Cálculo Diferencial)'>
    <Heading margin="0px 32px" color="primary" fontSize="30px">
        Principais Características
    </Heading>
    <UnorderedList fontSize="25px">
        <ListItem>Analisa a função derivada do End Effector em relação ao ângulo de cada Joint</ListItem>
        <ListItem>Trabalha com aproximação Linear e Cálculo diferencial</ListItem>
        <ListItem>Pode trabalhar com a sensibilidade do Joint ( A velocidade de mudança do End Effector )</ListItem>
        <ListItem>Pode ter soluções fisicamente impossíveis ( Singularidades )</ListItem>
    </UnorderedList>
</Left>

export default Jacobian
