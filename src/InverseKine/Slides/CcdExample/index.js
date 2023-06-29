import React from 'react';
import {
    Appear,
    Box, Link, Text
} from 'spectacle';
import Gif from "./Assets/ccd.gif"
import Right from "../../../Slides/Imager/Right";

const Index = () => <Right src={Gif}>
    <Box>
        <Text fontSize='20px'><Link target='_blank' href='https://threejs.org/docs/scenes/ccdiksolver-browser.html'>Clique aqui</Link> para visualizar a implementação apresentada pelo Three Js em sua Documentação do CCD IK</Text>
    </Box>
    <Appear>
        <Box>
            <Text fontSize='20px'><Link target='_blank' href='https://threejs.org/docs/#manual/en/introduction/Libraries-and-Plugins'>Nesse Link</Link> você encontrará outras implementações produzidas pela comunidade do ThreeJs para outros tipos de algoritmos e também abstrações que facilitam o desenvolvimento de Corpos Articulados como implementações adicionais de Joints, Bones, Targets etc.</Text>
        </Box>
    </Appear>
</Right>

export default Index
