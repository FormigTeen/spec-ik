import React from 'react';
import {
    Box,
    Heading,
    Quote
} from 'spectacle';
import Gif from "./Assets/space.gif"
import Right from "../../../Slides/Imager/Right";

const Space = () => <Right src={Gif}>
    <Box>
        <Heading margin="0px" color="primary" fontSize="30px">
            O Espaço Alcançável
        </Heading>
        <Box margin="50px 0px">
            <Quote color="secondary" fontSize="25px">
                Qais são os Pontos que podem ser alcançados dados os Joints e Links?
            </Quote>
        </Box>
    </Box>
</Right>

export default Space
