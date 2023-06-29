import React from 'react';
import {
    Heading,
    UnorderedList, ListItem
} from 'spectacle';
import Left from "../../Slides/Text/Left";

const Ccd = () => <Left title='Solução CCD - Cyclic Coordonate Descent (Heurística)'>
    <Heading margin="0px 32px" color="primary" fontSize="30px">
        Principais Características
    </Heading>
    <UnorderedList fontSize="25px">
        <ListItem>Eficiente na Busca de Solução mas nem sempre a melhor</ListItem>
        <ListItem>Incentiva uma alta variação no ângulo dos Joints próximos ao End Effector</ListItem>
        <ListItem>Tem uma abordagem gulosa ( Tenta buscar a melhor solução em cada Iteração )</ListItem>
        <ListItem>Pode apresentar poses e movimentações não naturais</ListItem>
        <ListItem>Limitado para sistemas complexos e com muitas especificações</ListItem>
    </UnorderedList>
</Left>

export default Ccd
