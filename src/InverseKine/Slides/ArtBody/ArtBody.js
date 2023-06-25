import React from 'react';
import {
    Heading
} from 'spectacle';
import Gif from "./Assets/tori.gif"
import Top from "../../../Slides/Imager/Top";

const ArtBody = () => <Top src={Gif}>
    <Heading margin="30px 0px" color="primary" fontSize="20px">
        Um Modelo de Corpo Articulado
    </Heading>
    <Heading margin="0px" color="primary" fontSize="15px">
        Consiste em um Conjunto de: Links, Joints e Chains
    </Heading>
</Top>

export default ArtBody
