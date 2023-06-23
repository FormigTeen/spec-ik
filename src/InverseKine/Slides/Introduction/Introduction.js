import React from 'react';
import {
    FlexBox,
    Box,
    Heading,
    Slide, UnorderedList, ListItem, Image, Appear, Stepper, Quote
} from 'spectacle';
import Gif from "./Assets/dofs.gif"

const Introduction = () => <Slide>
        <FlexBox flexDirection="row" alignItems="start" flex={1}>
            <Box width="100%" height="100%">
                <FlexBox flexDirection="column" height="100%">
                    <Box>
                        <Heading margin="0px" color="primary" fontSize="30px">
                            O Problema dos DoFs
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
                </FlexBox>
            </Box>
            <Box width="100%" height="100%">
                <FlexBox flexDirection="column" justifyContent="center" alignItems="center" height="100%">
                    <Image src={Gif} />
                </FlexBox>
            </Box>
        </FlexBox>
    </Slide>

export default Introduction
