import React from 'react';
import {
    Heading, ListItem, UnorderedList
} from 'spectacle';
import Gif from "./Assets/tori.gif"
import Top from "../../../Slides/Imager/Top";

const ArtBody = () => <Top src={Gif}>
    <Heading margin="30px 0px" color="primary" fontSize="20px">
        Um Modelo de Corpo Articulado
    </Heading>
    <Heading margin="0px" color="primary" fontSize="15px">
        Principais Conceitos:
    </Heading>
    <UnorderedList fontSize="15px">
        <ListItem>Links</ListItem>
        <ListItem>Joints</ListItem>
        <ListItem>Chains</ListItem>
        <ListItem>Effectors</ListItem>
    </UnorderedList>
</Top>

export default ArtBody
