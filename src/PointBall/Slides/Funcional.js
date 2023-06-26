import React from 'react';
import {
    Heading,
    UnorderedList, ListItem
} from 'spectacle';
import Left from "../../Slides/Text/Left";

const Funcional = () => <Left title='O Paradigma Funcional'>
    <Heading margin="0px 32px" color="primary" fontSize="30px">
        Seus Fundamentos
    </Heading>
    <UnorderedList fontSize="25px">
        <ListItem>Funções Puras</ListItem>
        <ListItem>Transparência Referêncial ou Encapsulamento</ListItem>
        <ListItem>Imutabilidade de Dados | Uso de Constantes</ListItem>
        <ListItem>Composição de Funções</ListItem>
        <ListItem>Funções como Entidades de Primeira Classe</ListItem>
        <ListItem>Funções de Alta Ordem</ListItem>
        <ListItem>Funções Anônimas ou Lambda</ListItem>
    </UnorderedList>
</Left>

export default Funcional
