import React from 'react';
import {
    Heading,
    UnorderedList, ListItem
} from 'spectacle';
import Left from "../../Slides/Text/Left";

const Analytic = () => <Left title='Solução Analítica'>
    <Heading margin="0px 32px" color="primary" fontSize="30px">
        Principais Características
    </Heading>
    <UnorderedList fontSize="25px">
        <ListItem>Eficiente com um número baixo de Joints</ListItem>
        <ListItem>Deve ter o tamanho dos Links</ListItem>
        <ListItem>Todas as Soluções do Sistema pode ser dada por uma Função</ListItem>
        <ListItem>Não oferece uma clareza em quais são as melhores soluções</ListItem>
    </UnorderedList>
</Left>

export default Analytic
