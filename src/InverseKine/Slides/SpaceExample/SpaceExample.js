import React from 'react';
import {
    Heading,
} from 'spectacle';
import Png from "./Assets/example.png"
import Top from "../../../Slides/Imager/Top";

const SpaceExample = () => <Top src={Png}>
    <Heading margin="30px 0px" color="primary" fontSize="20px">
        Quanto maior a quantidade de Links ( n > 3 ), mais complexo se torna achar a solução computacionalmente. Podendo provocar em alguns casos Loops infinitos.
    </Heading>
</Top>

export default SpaceExample
