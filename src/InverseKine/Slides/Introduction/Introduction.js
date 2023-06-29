import React from 'react';
import {
    Box,
    Heading,
    Quote
} from 'spectacle';
import Gif from "./Assets/dofs.gif"
import Right from "../../../Slides/Imager/Right";

const Introduction = () => <Right src={Gif}>
    <Box>
        <Heading margin="0px" color="primary" fontSize="30px">
            O Problema Inicial
        </Heading>
        <Heading margin="0px" color="primary" fontSize="15px">
            Degrees of Freedom
        </Heading>
        <Box margin="50px 0px">
            <Quote color="secondary" fontSize="25px">
                Como alcançar uma Posição ou Alvo dado os DoFs de um Objeto?
            </Quote>
        </Box>
    </Box>
</Right>

export default Introduction
